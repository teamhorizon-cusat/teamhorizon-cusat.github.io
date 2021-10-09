import React,{useRef} from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {useThree,useFrame, extend } from "@react-three/fiber"

extend({ OrbitControls })

export default function Control(props) {
    const { camera, scene,gl } = useThree()
    const ref = useRef()

  useFrame(() => {
    ref.current && ref.current.update()
    // scene.scale.set(1,1,1);
  //   scene.traverse( child => {
  //     if ( child.material ) child.material.metalness = 0.5;

  // } );
  })
    return  <orbitControls ref={ref} args={[camera,gl.domElement]} {...props} />
}
