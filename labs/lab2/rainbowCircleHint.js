var scene;
var camera;
initializeScene();
renderScene();


function initializeScene(){
  if(Detector.webgl){
    renderer = new THREE.WebGLRenderer( { antialias: true} );
  }else{
    renderer = new THREE.CanvasRenderer();
  }

  renderer.setClearColor(0x000000, 1);

  canvasWidth = 600;
  canvasHeight = 600;

  renderer.setSize(canvasWidth, canvasHeight);

  document.getElementById("canvas").appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, canvasWidth/canvasHeight, 1, 100);

  camera.position.set(0, 0, 10);

  camera.lookAt(scene.position);

  scene.add(camera);

  rainbowCircleGeometry = new THREE.Geometry();

  //We rotate around the circle incrementally, adding vertices outward to one "spoke" at a time.
for( var d=0; d<361; d = d + 5 ) {
  var angle= Math.PI*(d/180);

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle), Math.cos(angle), 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#000000');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#f40202');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f40202');
  }

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*0.5, Math.cos(angle)*0.5, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f40202');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#f49702');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f49702');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length,
      rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f40202');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#f49702');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f40202');
  }

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*1, Math.cos(angle)*1, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
    rainbowCircleGeometry.vertices.length - 10,
    rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f49702');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#f4db02');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f4db02');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
  rainbowCircleGeometry.vertices.length,
  rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f49702');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#f4db02');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f49702');
}

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*1.5, Math.cos(angle)*1.5, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
  rainbowCircleGeometry.vertices.length - 9,
  rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f4db02');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#52f402');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#52f402');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
  rainbowCircleGeometry.vertices.length,
  rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#f4db02');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#52f402');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#f4db02');
  }

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*2, Math.cos(angle)*2, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#52f402');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#0222f4');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length,
      rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#52f402');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#52f402');
  }

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*2.7, Math.cos(angle)*2.7, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#0222f4');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length,
      rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#0222f4');
  }

   rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*3, Math.cos(angle)*3, 0));

   if(rainbowCircleGeometry.vertices.length > 3) {
     rainbowCircleGeometry.faces.push(new THREE.Face3(
       rainbowCircleGeometry.vertices.length - 10,
       rainbowCircleGeometry.vertices.length - 9,
       rainbowCircleGeometry.vertices.length));

     rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#0222f4');
     rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#4b0082');
     rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#4b0082');

     rainbowCircleGeometry.faces.push(new THREE.Face3(
       rainbowCircleGeometry.vertices.length - 10,
   rainbowCircleGeometry.vertices.length,
   rainbowCircleGeometry.vertices.length - 1));

     rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#0222f4');
   rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#4b0082');
   rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#0222f4');
  }

  rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*3.3, Math.cos(angle)*3.3, 0));

  if(rainbowCircleGeometry.vertices.length > 3) {
    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
      rainbowCircleGeometry.vertices.length - 9,
      rainbowCircleGeometry.vertices.length));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#4b0082');
rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
  rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#0222f4');

    rainbowCircleGeometry.faces.push(new THREE.Face3(
      rainbowCircleGeometry.vertices.length - 10,
  rainbowCircleGeometry.vertices.length,
  rainbowCircleGeometry.vertices.length - 1));

    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[0] = new THREE.Color('#4b0082');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[1] = new THREE.Color('#0222f4');
    rainbowCircleGeometry.faces[rainbowCircleGeometry.faces.length - 1].vertexColors[2] = new THREE.Color('#4b0082');
  }

 rainbowCircleGeometry.vertices.push(new THREE.Vector3(Math.sin(angle)*4.2, Math.cos(angle)*4.2, 0));
}

  var rainbowCircleMat = new THREE.MeshBasicMaterial({
    vertexColors:THREE.VertexColors,
    //wireframe: true,
    side:THREE.DoubleSide});

  var rainbowCircleMesh = new THREE.Mesh(rainbowCircleGeometry, rainbowCircleMat);

  scene.add(rainbowCircleMesh);
}


function renderScene(){
  renderer.render(scene, camera);
}
