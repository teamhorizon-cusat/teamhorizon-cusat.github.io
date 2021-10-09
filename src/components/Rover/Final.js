import React,{Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Stage,useProgress} from '@react-three/drei';
import Model from './Rover';
import Control from './Control';
import GLB from '../../assets/3d/HorizonRoverSmall2.glb';
import './style.css';
export default function Final() {
    return (
      <div className="rover-container">
        <Canvas>
        <Suspense fallback={null}>
          <Stage adjustCamera contactShadow environment={null} >
            <Model url={GLB}/>
          </Stage>
        </Suspense>
        <Control
        autoRotate
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.5}
        rotateSpeed={50}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
      </Canvas>
      <div className="id">
        ROVER VER 2.0
      </div>
      </div>
    )
}
