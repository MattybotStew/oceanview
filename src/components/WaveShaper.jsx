// components/WaveShaper.jsx — Small center arc (preserved shape)
export default function WaveShaper({ color = "#FFFFFF", width = "360px" }) {
  return (
    <div style={{
      position: "absolute",
      bottom: -24,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      pointerEvents: "none",
      zIndex: 10
    }}>
      <svg
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: width, height: "auto", display: "block" }}
      >
        <path
          d="M0 100 Q200 20 400 100 L400 100 L0 100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
