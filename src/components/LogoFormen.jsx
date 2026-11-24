// Die drei Linien des ALZ-Logos (Ocker, Rot, Grün) als große Gestaltungsform; rein dekorativ
function LogoFormen({ className = '' }) {
  return (
    <svg className={`logo-formen ${className}`} viewBox="0 0 220 160" aria-hidden="true" focusable="false">
      <path d="M22 150 V52 Q22 22 52 22 H104" stroke="var(--logo-ocker)" />
      <path d="M104 22 V104 Q104 124 124 124 H196" stroke="var(--logo-rot)" />
      <path d="M128 52 Q160 52 160 84 V122 Q160 146 184 146 H200" stroke="var(--logo-gruen)" />
    </svg>
  );
}

export default LogoFormen;
