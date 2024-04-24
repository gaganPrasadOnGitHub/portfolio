import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import TorusKnot from '../3DComponents/TorusKnot';

const BackgroundModel = () => {
  return (
    <div className="model-container">
      <Canvas>
        <OrthographicCamera />
        <ambientLight intensity={2} />
        <TorusKnot />
      </Canvas>
    </div>
  );
};

export default BackgroundModel;
