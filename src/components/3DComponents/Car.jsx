import { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

export default function Car() {
  const group = useRef();
  const rotationRef = useRef(0);
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-car/model.gltf'
  );

  const materialsConfig = useMemo(() => {
    const colorMapping = {
      paintRed: 0xdc143c,
      plastic: 0xffffff,
      window: 0x02ccfe,
      _defaultMat: 0x000000,
      'carTire.014': '0x000000',
      'plastic.015': 0x02ccfe,
      paintYellow: 0xffd908,
    };

    const newMaterials = {};
    Object.keys(materials).forEach((key) => {
      if (colorMapping[key]) {
        const newMaterial = materials[key].clone();
        newMaterial.color = new Color(colorMapping[key]);
        if (key !== 'carTire.014') {
          newMaterial.wireframe = true;
        }
        newMaterials[key] = newMaterial;
      }
    });
    return newMaterials;
  }, [materials]);

  const { scale, position } = useMemo(() => {
    const width = window.innerWidth;
    if (width < 768) {
      return { scale: 1.5, position: [0, -2.5, -0.5] };
    } else {
      return { scale: 2, position: [1, -2.5, -1] };
    }
  }, []);

  useFrame(() => {
    const rotationSpeed = 0.2;
    rotationRef.current += rotationSpeed / 60;
    const angle = (Math.PI / 3.5) * Math.sin(rotationRef.current);
    if (group.current) {
      group.current.rotation.y = angle;
    }
  });

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
      dispose={null}
    >
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        if (node.isMesh) {
          return (
            <mesh
              key={key}
              geometry={node.geometry}
              material={materialsConfig[node.material.name]}
              wireframe={true}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/race-car/model.gltf'
);
