import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector2, Vector3 } from 'three';
import { Sparkles } from '@react-three/drei';

const TorusKnot = () => {
  const knotRef = useRef();
  const { camera } = useThree();
  const mouse = useRef(new Vector2());
  const originalPosition = useRef(new Vector3(3, 1, 0));
  const maxDistance = 1;
  const lerpFactor = 0.05;
  const tempVector = useRef(new Vector3());

  useEffect(() => {
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!knotRef.current) return;

    const vector = new Vector3(mouse.current.x, mouse.current.y, 0.5);
    vector.unproject(camera);
    vector.sub(camera.position).normalize();
    const distance = -camera.position.z / vector.z;
    vector.multiplyScalar(distance).add(camera.position);

    tempVector.current.subVectors(vector, originalPosition.current);
    if (tempVector.current.length() > maxDistance) {
      tempVector.current.normalize().multiplyScalar(maxDistance);
    }
    tempVector.current.add(originalPosition.current);

    knotRef.current.position.lerp(tempVector.current, lerpFactor);

    knotRef.current.rotation.x += delta * 0.1;
    knotRef.current.rotation.y += delta * 0.1;
  });

  return (
    <>
      <mesh
        ref={knotRef}
        scale={1.5}
        position={originalPosition.current.toArray()}
      >
        <torusKnotGeometry args={[1, 0.3, 300, 16]} />
        <meshStandardMaterial
          attach="material"
          color="#ed143d"
          wireframe
        />
      </mesh>
      <Sparkles
        size={6}
        scale={10}
        speed={0.2}
      />
    </>
  );
};

export default TorusKnot;
