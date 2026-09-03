// שדה כוכבים דינמי ברקע כדי לתת תחושת חלל עמוק
function Starfield() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none" aria-hidden="true">
      <div className="stars-layer stars-small" />
      <div className="stars-layer stars-medium" />
      <div className="stars-layer stars-large" />
    </div>
  );
}

export default Starfield;
