// Unified button system
// Variants: mint | navy | white | ghost | ghost-light
// Sizes:    sm (default) | lg
// All hover/focus/disabled states live in tokens.css (.ov-btn-*)

function Btn({ variant = "mint", size = "sm", children, onClick, type = "button", disabled, className, style }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ov-btn ov-btn--${variant} ov-btn--${size}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </button>
  );
}

export function PillMint({ children, hero, onClick, style, type, disabled }) {
  return <Btn variant="mint" size={hero ? "lg" : "sm"} onClick={onClick} style={style} type={type} disabled={disabled}>{children}</Btn>;
}

export function PillNavy({ children, hero, onClick, style, type, disabled }) {
  return <Btn variant="navy" size={hero ? "lg" : "sm"} onClick={onClick} style={style} type={type} disabled={disabled}>{children}</Btn>;
}

export function PillWhite({ children, hero, onClick, style, type, disabled }) {
  return <Btn variant="white" size={hero ? "lg" : "sm"} onClick={onClick} style={style} type={type} disabled={disabled}>{children}</Btn>;
}

// light prop = ghost-light variant (for dark / image backgrounds)
export function PillGhost({ children, hero, light, onClick, style, type, disabled }) {
  return <Btn variant={light ? "ghost-light" : "ghost"} size={hero ? "lg" : "sm"} onClick={onClick} style={style} type={type} disabled={disabled}>{children}</Btn>;
}

export function TextLink({ children, onClick, color, style }) {
  return (
    <button type="button" onClick={onClick} className="ov-text-link" style={{ color: color || "var(--ov-navy-600)", ...style }}>
      <span>{children}</span>
      <span className="ov-text-link-arrow" aria-hidden="true">→</span>
    </button>
  );
}
