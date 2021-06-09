
import {GLTFLoader} from './GLTFLoader.js'

//la scene 3d de three,js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//lumiere simple
const light = new THREE.AmbientLight( 0xffffff); // soft white light
scene.add( light );

// le canvas
const renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha:true
})
let theCanvas = renderer.domElement;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

theCanvas.classList.add("absolute");

function respo(c){
    let x = window.innerWidth;
    if (x <= 780){
        c.style.display = "none";
    } else{
        c.style.display = "block";
    }
};
respo(theCanvas);


//responsive canvas
window.addEventListener('resize',() =>{
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    respo(theCanvas);
})




//la Guitare
let loader = new GLTFLoader();
let myobj;
loader.load( './models/guitar.gltf', function ( gltf ) {

    const box = new THREE.Box3().setFromObject( gltf.scene );
    const center = box.getCenter( new THREE.Vector3() );

    myobj = gltf;

    gltf.scene.position.x += ( gltf.scene.position.x - center.x );
    gltf.scene.position.y += ( gltf.scene.position.y - center.y );
    gltf.scene.position.z += ( gltf.scene.position.z - center.z );
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

//decaler la camera de 70 (px?)
camera.position.z = 70;
camera.position.x = -30;

//La rotation de l'element
function rotateScene(deltaX, deltaY) {
    myobj.scene.rotation.y = deltaX  ;
    myobj.scene.rotation.x = deltaY  ;
} 

function moveScene(moveX) {
    myobj.scene.position.x = moveX  ;
}

let minAngleX = -0.7,
    maxAngleX = 0.2,
    minAngleY = -0.2,
    maxAngleY = 0.2,
    maxMove = 5,
    minMove = -5,
    maxScreenWidth = window.innerWidth,
    maxScreenHeight = window.innerHeight,
    csize = document.getElementById("main");

document.addEventListener('mousemove', (e) =>{
    let deltaX = ((e.clientX) * (maxAngleX-minAngleX)/maxScreenWidth) + minAngleX,
        deltaY = ((e.clientY) * (maxAngleY-minAngleY)/maxScreenHeight) + minAngleY;
    let moveX = ((e.clientX) * (maxMove-minMove)/maxScreenWidth) + minMove;

    rotateScene(deltaX,deltaY);
    moveScene(moveX);
});


const animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();