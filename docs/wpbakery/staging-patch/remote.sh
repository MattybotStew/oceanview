#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Drive WPE staging with the account password (no SSH key needed).
#
# Tries SSH (port 22) first — if password auth is allowed there we get a shell
# and the append happens in place. If not, falls back to SFTP (port 2222),
# which is file-transfer only, so the sheet is downloaded, appended locally and
# uploaded again (read-modify-write against the live file).
#
# Password comes from $OV_PASS or the first line of ~/.ov_sftp_pass — never
# from an argument, so it stays out of shell history.
#
#   ./remote.sh probe                     # which transport works?
#   ./remote.sh ls   [path]               # list a remote path
#   ./remote.sh get  <remote> <local>
#   ./remote.sh put  <local>  <remote>
#   ./remote.sh shell <command>           # only if ssh password auth works
# ---------------------------------------------------------------------------
set -euo pipefail

HOST_SSH="${OV_SSH_HOST:-oceanviewstg.ssh.wpengine.net}"
HOST_SFTP="${OV_SFTP_HOST:-oceanviewstg.sftp.wpengine.com}"
USER_="${OV_USER:-oceanviewstg-matt}"
PORT_SFTP="${OV_SFTP_PORT:-2222}"

if [ -n "${OV_PASS:-}" ]; then
  PASS="$OV_PASS"
elif [ -f "$HOME/.ov_sftp_pass" ]; then
  PASS="$(head -n1 "$HOME/.ov_sftp_pass")"
else
  echo "✗ no password. Set OV_PASS or put it in ~/.ov_sftp_pass"
  exit 1
fi

cmd="${1:-probe}"

run_expect() { # $1 = script
  OV_PASS="$PASS" USER_="$USER_" HOST_SSH="$HOST_SSH" HOST_SFTP="$HOST_SFTP" PORT_SFTP="$PORT_SFTP" \
  expect <<<"$1"
}

case "$cmd" in
  probe)
    echo "→ trying SSH password auth on $HOST_SSH:22"
    run_expect '
      set timeout 25
      log_user 0
      spawn ssh -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no -o NumberOfPasswordPrompts=1 $env(USER_)@$env(HOST_SSH) "echo SSH_PASSWORD_OK; pwd"
      expect {
        -re "assword:" { send -- "$env(OV_PASS)\r" }
        timeout { puts "TIMEOUT"; exit 1 }
        eof { puts "EOF_EARLY"; exit 1 }
      }
      log_user 1
      expect {
        "SSH_PASSWORD_OK" { puts "\nRESULT=ssh" ; exit 0 }
        -re "Permission denied" { puts "\nRESULT=ssh-denied" ; exit 1 }
        timeout { puts "\nRESULT=ssh-timeout" ; exit 1 }
      }
    ' || true
    echo "→ trying SFTP on $HOST_SFTP:$PORT_SFTP"
    run_expect '
      set timeout 25
      log_user 0
      spawn sftp -P $env(PORT_SFTP) -o StrictHostKeyChecking=accept-new $env(USER_)@$env(HOST_SFTP)
      expect {
        -re "assword:" { send -- "$env(OV_PASS)\r" }
        timeout { puts "TIMEOUT"; exit 1 }
        eof { puts "EOF_EARLY"; exit 1 }
      }
      log_user 1
      expect {
        -re "sftp>" { send -- "pwd\r"; expect -re "sftp>"; send -- "bye\r"; puts "\nRESULT=sftp"; exit 0 }
        -re "Permission denied" { puts "\nRESULT=sftp-denied"; exit 1 }
        timeout { puts "\nRESULT=sftp-timeout"; exit 1 }
      }
    ' || true
    ;;

  ls)
    path="${2:-.}"
    run_expect "
      set timeout 40
      spawn sftp -P $PORT_SFTP -o StrictHostKeyChecking=accept-new $USER_@$HOST_SFTP
      expect -re \"assword:\" { send -- \"$PASS\\r\" }
      expect -re \"sftp>\"
      send -- \"ls -l $path\\r\"
      expect -re \"sftp>\"
      send -- \"bye\\r\"
      expect eof
    "
    ;;

  get)
    [ $# -ge 3 ] || { echo "usage: remote.sh get <remote> <local>"; exit 1; }
    run_expect "
      set timeout 120
      spawn sftp -P $PORT_SFTP -o StrictHostKeyChecking=accept-new $USER_@$HOST_SFTP
      expect -re \"assword:\" { send -- \"$PASS\\r\" }
      expect -re \"sftp>\"
      send -- \"get $2 $3\\r\"
      expect -re \"sftp>\"
      send -- \"bye\\r\"
      expect eof
    "
    ;;

  put)
    [ $# -ge 3 ] || { echo "usage: remote.sh put <local> <remote>"; exit 1; }
    run_expect "
      set timeout 180
      spawn sftp -P $PORT_SFTP -o StrictHostKeyChecking=accept-new $USER_@$HOST_SFTP
      expect -re \"assword:\" { send -- \"$PASS\\r\" }
      expect -re \"sftp>\"
      send -- \"put $2 $3\\r\"
      expect -re \"sftp>\"
      send -- \"ls -l $3\\r\"
      expect -re \"sftp>\"
      send -- \"bye\\r\"
      expect eof
    "
    ;;

  shell)
    shift
    run_expect "
      set timeout 60
      spawn ssh -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $USER_@$HOST_SSH \"$*\"
      expect -re \"assword:\" { send -- \"$PASS\\r\" }
      expect eof
    "
    ;;

  *)
    echo "unknown command: $cmd"; exit 1
    ;;
esac
