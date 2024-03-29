import React, { useEffect, useRef } from "react";
// @ts-expect-error
import * as THREE from "three";

function MindARThreeViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-expect-error
      import("mind-ar/dist/mindar-image-three.prod.js").then((module) => {
        const mindarThree = new module.MindARThree({
          container: containerRef.current,
          imageTargetSrc: "./meishi.mind",
          maxTrack: 3,
        });
        const { renderer, scene, camera } = mindarThree;
        const anchor = mindarThree.addAnchor(0);
        const geometry = new THREE.PlaneGeometry(1, 0.55);
        const material = new THREE.MeshBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.5,
        });
        const plane = new THREE.Mesh(geometry, material);
        anchor.group.add(plane);

        mindarThree.start();
        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });
      });
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }} ref={containerRef}></div>
  );
}

export default MindARThreeViewer;
