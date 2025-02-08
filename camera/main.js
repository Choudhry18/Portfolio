import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Load the glTF model
const loader = new GLTFLoader();
loader.load(
  'model.glb',
  function (gltf) {
    const model = gltf.scene;
    model.scale.set(5, 5, 5); // adjust the scale factors as needed
    scene.add(model);
    // Render once after the model has loaded
    renderer.render(scene, camera);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);

// Optionally render continuously if controls are used
controls.addEventListener('change', () => renderer.render(scene, camera));