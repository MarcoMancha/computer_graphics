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
  canvasHeight = 400;

  renderer.setSize(canvasWidth, canvasHeight);

  document.getElementById("canvas").appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, canvasWidth/canvasHeight, 1, 100);

  camera.position.set(0, 0, 10);

  camera.lookAt(scene.position);

  scene.add(camera);

  var triangleGeometry = new THREE.Geometry();

  triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  1.0,  0.0));
  triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0,  0.0));
  triangleGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0,  0.0));
  triangleGeometry.faces.push(new THREE.Face3(0,1,2));

  triangleGeometry.faces[0].vertexColors[0] = new THREE.Color(0xFF0000);
  triangleGeometry.faces[0].vertexColors[1] = new THREE.Color(0x00FF00);
  triangleGeometry.faces[0].vertexColors[2] = new THREE.Color(0x0000FF);

  var triangleMaterial = new THREE.MeshBasicMaterial({
    vertexColors:THREE.VertexColors,
    side:THREE.DoubleSide
  });

  var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);

  triangleMesh.position.set(0.0, 0.0, 0.0);
  scene.add(triangleMesh);
}


function renderScene(){
  renderer.render(scene, camera);
}
