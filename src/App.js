import "./styles.css";
import {useState,useEffect} from 'react'
export default function App() {
  const getProgress = (prgressVal) => {
    const [progress , setProgress] = useState(0)
    useEffect(()=>{
      setTimeout(() => {
        setProgress(prgressVal)
      }, 1000)
    },[progress])
    return (
      <div className="outer">
        <div>AK</div>
        <div className="Inner" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {getProgress(20)}
    </div>
  );
}
