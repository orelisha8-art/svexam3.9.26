// יצור חייזרי מקורי (SVG) - שד ג'לי-חלל חמוד עם עיניים וקרניים, בהשראת אווירת מדע בדיוני
function AlienBlob({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 8 C20 8 8 35 12 58 C16 82 34 94 50 94 C66 94 84 82 88 58 C92 35 80 8 50 8 Z"
        fill="#44e5e5"
        opacity="0.9"
      />
      <path d="M35 10 L30 -2 M65 10 L70 -2" stroke="#97ce4c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="38" cy="48" r="10" fill="#0d0e1a" />
      <circle cx="62" cy="48" r="10" fill="#0d0e1a" />
      <circle cx="40" cy="46" r="3" fill="#ffe066" />
      <circle cx="64" cy="46" r="3" fill="#ffe066" />
      <path d="M38 68 Q50 76 62 68" stroke="#0d0e1a" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default AlienBlob;
