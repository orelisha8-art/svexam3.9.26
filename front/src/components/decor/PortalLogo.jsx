// לוגו פורטל מקורי (SVG ספירלה) המסתובב לאט בתפריט העליון
function PortalLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="18" fill="none" stroke="#97ce4c" strokeWidth="3" opacity="0.9" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="#44e5e5" strokeWidth="3" opacity="0.8" />
      <circle cx="20" cy="20" r="6" fill="#97ce4c" opacity="0.9" />
    </svg>
  );
}

export default PortalLogo;
