import * as THREE from 'three';

//Starting postion of the images from the top
const STARTY = -7.0;

//Create a new scene
const scene = new THREE.Scene();

//Create and position the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = STARTY;
camera.position.x = 15;
camera.position.z = 30;

//change background of website
const bgTexture = new THREE.TextureLoader().load('/img/bg.png');
scene.background = bgTexture;

//Create list of images in the 'img' folder
let imgList = [
    'Skyward.png',
    'pogs.png',
    'rock,paper,scissors.png',
    'crasher and sam.png',
    'junior fighting game.png',
]

// add every listed image as a plane mesh with texture to scene
for (const image in imgList) {
// every mesh has a geometry, texture, and material
     const texture = new THREE.TextureLoader().load('img/' + imgList[image])
     const geometry = new THREE.PlaneGeometry(20, 20);
     const material = new THREE.MeshBasicMaterial(
          {
               color: 0x989898,
               side: THREE.DoubleSide,
               map: texture // add the texture image here
          }
     );
     const plane = new THREE.Mesh(geometry, material);
     // add new plane to the scene
     scene.add(plane);
};
 
// Move the camera with the scroll bar
function moveCamera() {
     const top = document.body.getBoundingClientRect().top;
     camera.position.y = STARTY + top * 0.05;

};
 
document.body.onscroll = moveCamera;
 
// create the renderer and attatch to the canvas
const renderer = new THREE.WebGLRenderer(
     { canvas: document.querySelector('#bg') }
);
 
// set renderer size and add it to the page
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
 
// resize the threejs canvas with the window and adjust for phone sizes
function resizeWindow() {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
     // adjust for phone or desktop size
     if (window.innerWidth <= 600) {
          camera.position.x = 0
          for (const child in scene.children) {
               scene.children[child].rotation.y = 0;
               scene.children[child].position.y = child * -50
          };
     }
     else {
          camera.position.x = 26;
          for (const child in scene.children) {
               scene.children[child].rotation.y = 15 * (Math.PI / 180);
               scene.children[child].position.y = child * -30
          };
     };
};
 
// set initial canvas size
resizeWindow();
 
// resize canvas on window resize
window.addEventListener('resize', resizeWindow, false);
 
// animation loop (calls itself resursively)
function animate() {
     requestAnimationFrame(animate);
     renderer.render(scene, camera);
};
 
// start the animation
animate();