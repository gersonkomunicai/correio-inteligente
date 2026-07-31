'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500)
        camera.position.set(1, 1, 5)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        const geometryPoints = new THREE.BufferGeometry()
        const materialPoints = new THREE.PointsMaterial({
            size: 0.08,
            color: 0x888888
        })
        const positionsPoints = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(2, 1, 0),
            new THREE.Vector3(-1, 2, 0),
        ]
        const position = positionsPoints.flatMap(p => [p.x, p.y, p.z]);
        geometryPoints.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(position, 3)
        )
        const points = new THREE.Points(geometryPoints, materialPoints)
        const geometryLine = new THREE.BufferGeometry()
        const materialLine = new THREE.LineBasicMaterial({
            color: 0x888888
        })

        const positionLines = [
            0, 0, 0, 2, 1, 0,
            2, 1, 0, -1, 2, 0,
        ]
        geometryLine.setAttribute(
            'position', new THREE.Float32BufferAttribute(positionLines, 3)
        )
        const lines = new THREE.LineSegments(geometryLine, materialLine)
        scene.add(points, lines)
        containerRef.current?.appendChild(renderer.domElement)
        renderer.render(scene, camera)

    }, [])
    return <div ref={containerRef} />
};

export default ThreeScene;