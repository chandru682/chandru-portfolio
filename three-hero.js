(() => {
  const canvas = document.getElementById('three-hero');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(2, 3, 4);
  scene.add(ambient, dir);

  const mat1 = new THREE.MeshStandardMaterial({ metalness: 0.2, roughness: 0.3 });
  const mat2 = new THREE.MeshStandardMaterial({ metalness: 0.1, roughness: 0.4 });

  const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1, 0.35, 140, 18), mat1);
  const box = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), mat2);
  box.position.set(-2.2, -0.6, 0);
  torus.position.set(1.8, 0.5, 0);
  scene.add(torus, box);

  const onResize = () => {
    const width = canvas.clientWidth || canvas.parentElement.clientWidth || 480;
    const height = canvas.clientHeight || 380;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  window.addEventListener('resize', onResize);
  onResize();

  const clock = new THREE.Clock();
  function animateFrame() {
    const t = clock.getElapsedTime();
    torus.rotation.x = t * 0.4;
    torus.rotation.y = t * 0.6;
    box.rotation.x = t * 0.3;
    box.rotation.y = t * 0.5;
    renderer.render(scene, camera);
    requestAnimationFrame(animateFrame);
  }
  animateFrame();
})();
