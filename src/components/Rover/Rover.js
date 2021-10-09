import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export default function Rover({url}) {
    function hello(event){
        console.log(event);
    }
    const [gltf, set] = React.useState();
    React.useMemo(() => new GLTFLoader().load(url, set,(e)=>{hello(e)}), [url])
    return  gltf ? <primitive object={gltf.scene} /> : null
}
