"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * 0.18;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.045 / abs(p.y + sin((rx + time) * 1.2) * 0.45);
        float g = 0.045 / abs(p.y + sin((gx + time) * 1.2) * 0.45);
        float b = 0.045 / abs(p.y + sin((bx + time) * 1.2) * 0.45);

        vec3 warm = vec3(
          r * 1.0 + g * 0.35,
          g * 0.55 + r * 0.12,
          b * 0.12
        );
        gl_FragColor = vec4(warm, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color(0x0a0908));

    const uniforms = {
      resolution: { value: [window.innerWidth, window.innerHeight] },
      time: { value: 0 },
    };

    const geometry = new THREE.BufferGeometry();
    const verts = new Float32Array([
      -1, -1, 0, 1, -1, 0, -1, 1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0,
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(verts, 3));

    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [w, h];
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const animate = () => {
      uniforms.time.value += reduced ? 0 : 0.006;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}
