// יצור-שד קטן ומקורי בעל שלוש עיניים וזרועות גומי, לגיוון האווירה החייזרית
function TentacleCreature({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 15 C30 15 22 32 24 48 C18 52 14 62 18 70 C22 66 26 62 30 60 C34 76 42 88 50 88 C58 88 66 76 70 60 C74 62 78 66 82 70 C86 62 82 52 76 48 C78 32 70 15 50 15 Z"
        fill="#ff5c5c"
        opacity="0.88"
      />
      <circle cx="38" cy="42" r="6" fill="#0d0e1a" />
      <circle cx="62" cy="42" r="6" fill="#0d0e1a" />
      <circle cx="50" cy="55" r="5" fill="#0d0e1a" />
      <circle cx="39" cy="41" r="1.6" fill="#ffe066" />
      <circle cx="63" cy="41" r="1.6" fill="#ffe066" />
      <circle cx="51" cy="54" r="1.4" fill="#ffe066" />
    </svg>
  );
}

export default TentacleCreature;
