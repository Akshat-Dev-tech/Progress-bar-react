import "./styles.css";

export default function App() {
  const getProgress = (prgressVal) => {
    return (
      <div className="outer">
        <div className="Inner" style={{ width: `${prgressVal}%` }}>
          {prgressVal}%
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {getProgress(70)}
    </div>
  );
}
