function HomeBackgroundFX() {
  const particles = Array.from({ length: 34 }, (_, i) => i);
  const dataLines = Array.from({ length: 7 }, (_, i) => i);
  return (
    <div className="home-fx" aria-hidden="true">
      <div className="home-fx-grid" />
      <div className="home-fx-orbit orbit-a" />
      <div className="home-fx-orbit orbit-b" />
      <div className="home-fx-orbit orbit-c" />
      <div className="home-fx-glow glow-a" />
      <div className="home-fx-glow glow-b" />
      <div className="home-fx-scan" />
      <div className="home-fx-ring ring-a" />
      <div className="home-fx-ring ring-b" />
      {dataLines.map(n => <span key={`line-${n}`} className="home-fx-data-line" style={{"--i":n}} />)}
      {particles.map(n => <span key={n} className="home-fx-particle" style={{"--i":n}} />)}
    </div>
  );
}
export default HomeBackgroundFX;
