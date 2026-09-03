// חללית מצוירת מקורית (SVG) המרחפת ברקע לתחושת "הרפתקה בין-מימדית"
function Spaceship({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="60" cy="38" rx="52" ry="14" fill="#171a2e" stroke="#44e5e5" strokeWidth="2" />
      <ellipse cx="60" cy="22" rx="26" ry="18" fill="#97ce4c" opacity="0.85" />
      <ellipse cx="60" cy="22" rx="18" ry="12" fill="#0d0e1a" opacity="0.6" />
      <circle cx="30" cy="40" r="4" fill="#ffe066" />
      <circle cx="60" cy="44" r="4" fill="#ff5c5c" />
      <circle cx="90" cy="40" r="4" fill="#44e5e5" />
      <path d="M45 52 Q60 62 75 52" stroke="#97ce4c" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

export default Spaceship;
