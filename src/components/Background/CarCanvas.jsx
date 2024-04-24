import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import Car from '../3DComponents/Car';

const CarCanvas = () => {
  return (
    <div className="car-canvas-container">
      <Canvas>
        <OrthographicCamera />
        <ambientLight intensity={2} />
        <Car />
      </Canvas>
    </div>
  );
};

export default CarCanvas;
