// כותרת עם אפקט "גליץ' בין-ממדי" - שכבות דקורטיביות מוסתרות מקוראי מסך
function GlitchHeading({ children, className = "", as: Tag = "h1" }) {
  return (
    <Tag className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="glitch-layer glitch-layer-a">
        {children}
      </span>
      <span aria-hidden="true" className="glitch-layer glitch-layer-b">
        {children}
      </span>
      <span className="relative">{children}</span>
    </Tag>
  );
}

export default GlitchHeading;
