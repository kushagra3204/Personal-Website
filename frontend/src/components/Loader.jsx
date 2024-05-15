import { Html, useProgress } from "@react-three/drei";
import "../App.css";

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <div className="box-circle">
        <span className="canvas-load"></span>
        <p style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
        }}>
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  )
}

export default Loader