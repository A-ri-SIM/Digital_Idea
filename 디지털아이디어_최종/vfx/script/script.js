// let ww=$(window).width();

// if(ww >'800px'){
//   $(".vfx_pc").css({
//     display:'block'
//   })









  const container = document.body;

let viewport = {
  width: container.clientWidth,
  height: container.clientHeight,
  aspectRatio: container.clientWidth / container.clientHeight };


const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false });


renderer.setSize(viewport.width, viewport.height);
renderer.setPixelRatio = window.devicePixelRatio;
container.appendChild(renderer.domElement);

const FOV = 50;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 160;
const ASPECT_RATIO = viewport.aspectRatio;

const camera = new THREE.PerspectiveCamera(
FOV,
ASPECT_RATIO,
CAMERA_NEAR,
CAMERA_FAR);


camera.position.set(0, 0, 50);

{
  const near = 1;
  const far = 150;
  const color = 0xb0cec8;
  
  scene.fog = new THREE.Fog(color, near, far);
}

const sectionsInfo = [
{
  images: [
  "./img/2023/2023_1.jpg",
  "./img/2023/2023_2.jpg",
  "./img/2023/2023_3.jpg"
],

  title: "2023" },

{
  images: [
    "./img/2022/2022_1.jpg",
    "./img/2022/2022_2.jpg",
    "./img/2022/2022_3.jpg",
    "./img/2022/2022_4.jpg",
    "./img/2022/2022_5.jpg",
    "./img/2022/2022_6.jpg",
    "./img/2022/2022_7.jpg",
    "./img/2022/2022_8.jpg",
    "./img/2022/2022_9.jpg",
    "./img/2022/2022_11.jpg",
    "./img/2022/2022_12.jpeg",
    "./img/2022/2022_13.png"],

  title: "2022" },

{
  images: [
    "./img/2021/2021_1.jpg",
    "./img/2021/2021_2.jpg",
    "./img/2021/2021_3.jpg",
    "./img/2021/2021_4.png",
    "./img/2021/2021_5.png",
    "./img/2021/2021_6.jpg",
    "./img/2021/2021_7.jpg",
    "./img/2021/2021_8.jpg",
    "./img/2021/2021_9.jpg",
    "./img/2021/2021_10.jpg",
    "./img/2021/2021_11.jpg"],

  title: "2021" },

{
  images: [
    "./img/2020/2020_1.jpeg)",
    "./img/2020/2020_3.jpg",
    "./img/2020/2020_4.jpg",
    "./img/2020/2020_5.png",
    "./img/2020/2020_6.jpg",
    "./img/2020/2020_7.jpg",
    "./img/2020/2020_8.jpg"],

  title: "2020" },
{
  images: [
    "./img/2019/2019_1.jpg",
    "./img/2019/2019_2.jpg",
    "./img/2019/2019_3.jpg",
    "./img/2019/2019_4.jpg",
    "./img/2019/2019_5.jpg",
    "./img/2019/2019_6.jpg",
    "./img/2019/2019_7.jpg",
    "./img/2019/2019_8.jpg",
    "./img/2019/2019_9.jpg",
    "./img/2019/2019_10.jpg",
    "./img/2019/2019_11.jpg",
    "./img/2019/2019_12.jpg",
    "./img/2019/2019_13.jpg",
    "./img/2019/2019_14.jpg"],

  title: "2019" },
{
  images: [
    "./img/2018/2018_1.jpg",
    "./img/2018/2018_2.jpg",
    "./img/2018/2018_3.jpg",
    "./img/2018/2018_4.jpg",
    "./img/2018/2018_5.jpg",
    "./img/2018/2018_6.jpg",
    "./img/2018/2018_7.jpg",
    "./img/2018/2018_8.jpg",
    "./img/2018/2018_9.jpg",
    "./img/2018/2018_10.jpg",
    "./img/2018/2018_11.jpg",
    "./img/2018/2018_12.jpg",
    "./img/2018/2018_13.jpg",
    "./img/2018/2018_14.jpg",
    "./img/2018/2018_15.jpg",
    "./img/2018/2018_16.jpg",
    "./img/2018/2018_17.jpg"],

  title: "2018" },
{
  images: [
    "./img/2017/2017_1.jpg",
    "./img/2017/2017_2.jpg",
    "./img/2017/2017_3.jpg",
    "./img/2017/2017_4.jpg",
    "./img/2017/2017_5.jpg",
    "./img/2017/2017_6.jpg",
    "./img/2017/2017_7.jpg",
    "./img/2017/2017_8.jpg",
    "./img/2017/2017_9.jpg",
    "./img/2017/2017_10.jpg",
    "./img/2017/2017_11.jpg",
    "./img/2017/2017_12.jpg",
    "./img/2017/2017_13.jpg",
    "./img/2017/2017_14.jpg",
    "./img/2017/2017_15.jpg",
    "./img/2017/2017_16.jpg",
    "./img/2017/2017_17.jpg"],

  title: "2017" },
{
  images: [
    "/img/2016/2016_1.jpg",
    "/img/2016/2016_2.jpg",
    "/img/2016/2016_3.jpg",
    "/img/2016/2016_4.jpg",
    "/img/2016/2016_5.jpg",
    "/img/2016/2016_6.jpg"],

  title: "2016" },
{
  images: [
    "./img/2015/2015_1.jpg",
    "./img/2015/2015_2.jpg",
    "./img/2015/2015_3.jpg",
    "./img/2015/2015_4.jpg",
    "./img/2015/2015_5.jpg",
    "./img/2015/2015_6.jpg"],

  title: "2015" },
{
  images: [
    "./img/2014/2014_1.jpg",
    "./img/2014/2014_2.jpg",
    "./img/2014/2014_3.jpg",
    "./img/2014/2014_4.jpg",
    "./img/2014/2014_5.jpg",
    "./img/2014/2014_6.jpg",
    "./img/2014/2014_7.jpg",
    "./img/2014/2014_8.jpg",
    "./img/2014/2014_9.jpg"],

  title: "2014" },
{
  images: [
    "./img/2014/2014_1.jpg",
    "./img/2014/2014_2.jpg",
    "./img/2014/2014_3.jpg"],

  title: "2013" },
{
  images: [
    "./img/2012/2012_1.jpg",
    "./img/2012/2012_2.jpg",
    "./img/2012/2012_3.jpg",
    "./img/2012/2012_4.jpg",
    "./img/2012/2012_5.jpg"],

  title: "2012" },
{
  images: [
    "./img/2011/2011_1.jpg",
    "./img/2011/2011_2.jpg",
    "./img/2011/2011_3.jpg",
    "./img/2011/2011_4.jpg"],

  title: "2011" },
{
  images: [
    "./img/2010/2010_1.jpg",
    "./img/2010/2009_1.jpg",
    "./img/2010/2008_1.jpg",
    "./img/2010/2007_1.jpg",
    "./img/2010/2006_1.jpg",
    "./img/2010/2005_1.jpg",
    "./img/2010/2004_1.jpg",
    "./img/2010/2003_1.jpg",
    "./img/2010/2001_1.jpg",
    "./img/2010/2000_1.jpg",
    "./img/2010/1998_1.jpg",
    "./img/2010/1997_1.jpg"
  ],

  title: "2010~" },
{
  images: [
  ],
  title: "" },
{
  images: [
  ],
  title: "SINCE.1997" }
  

];



const raycaster = new THREE.Raycaster();
let intersections = [];
const textureLoader = new THREE.TextureLoader();
const fontLoader = new THREE.FontLoader();
const font = "https://assets.codepen.io/2479807/silk-json.json";

const makePlane = (width, height, image) => {
  const geometry = new THREE.PlaneBufferGeometry(width, height, 1);
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: image });

  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

const setImagesPositions = (image, index) => {
  if (index === 0) {
    // Top left
    gsap.set(image, { x: -20, y: 20, z: "-=20" });
  } else if (index === 1) {
    // Bottom left
    gsap.set(image, { x: -20, y: -20, z: "-=80" });
  } else if (index === 2) {
    // Top right
    gsap.set(image, { x: 20, y: 20, z: "-=40" });
  } else if (index === 3) {
    // Bottom right
    gsap.set(image, { x: 20, y: -20, z: "-=120" });
  }else if (index === 4) {
    // Top left
    gsap.set(image, { x: -60, y: 40, z: "-=180" });
  } else if (index === 5) {
    // Bottom left
    gsap.set(image, { x: -60, y: -40, z: "-=260" });
  } else if (index === 6) {
    // Top right
    gsap.set(image, { x: 60, y: 40, z: "-=220" });
  } else if (index === 7) {
    // Bottom right
    gsap.set(image, { x: 60, y: -40, z: "-=300" });
  }
  else if (index === 8) {
    // Top left
    gsap.set(image, { x: -20, y: 20, z: "-=360" });
  } else if (index === 9) {
    // Bottom left
    gsap.set(image, { x: -20, y: -20, z: "-=440" });
  } else if (index === 10) {
    // Top right
    gsap.set(image, { x: 20, y: 20, z: "-=400" });
  } else if (index === 11) {
    // Bottom right
    gsap.set(image, { x: 20, y: -20, z: "-=480" });
  }else if (index === 12) {
    // Top left
    gsap.set(image, { x: -60, y: 40, z: "-=520" });
  } else if (index === 13) {
    // Bottom left
    gsap.set(image, { x: -60, y: -40, z: "-=600" });
  } else if (index === 14) {
    // Top right
    gsap.set(image, { x: 60, y: 40, z: "-=560" });
  } else if (index === 15) {
    // Bottom right
    gsap.set(image, { x: 60, y: -40, z: "-=640" });
  }else if (index === 16) {
    // Top left
    gsap.set(image, { x: -60, y: 40, z: "-=660" });
  }

  return;
};

const months = [];

sectionsInfo.forEach((section, index) => {
  const sectionGroup = new THREE.Group();

  fontLoader.load(font, font => {
    const geometry = new THREE.TextBufferGeometry(section.title, {
      font: font,
      size: 6,
      height: 0,
      curveSegments: 17 }).
    center();

    const material = new THREE.MeshBasicMaterial({
      //color: 0x404e7c
      color: '#FFFFFF' });


    const mesh = new THREE.Mesh(geometry, material);

    sectionGroup.add(mesh);
  });

  section.images.forEach((image, index) => {
    const plane = makePlane(
    20,
    20,
    textureLoader.load(image, texture => {
      plane.scale.set(
      1.0,
      texture.image.height / texture.image.width,
      1.0);

    }));

    intersections.push(plane);
    setImagesPositions(plane.position, index);

    sectionGroup.add(plane);
    months.push(sectionGroup);
  });

  gsap.set(sectionGroup.position, {
    z: () => -index * 200 });

  scene.add(sectionGroup);
});

let mouse = new THREE.Vector2();

let mousePerspective = {
  x: 0,
  y: 0 };


const onMouseMove = event => {
  mouse.set(
  event.clientX / window.innerWidth * 2 - 1,
  event.clientX / window.innerWidth * -2 + 1);


  raycaster.intersectObjects(intersections, true).forEach(intersection => {
    //console.log("Over");
    // intersection.object.scale.divideScalar(1.5);
  });

  mousePerspective.x = event.clientX / window.innerWidth - 0.5;
  mousePerspective.y = event.clientY / window.innerHeight - 0.5;

  gsap.to(camera.rotation, 17, {
    x: -mousePerspective.y * 0.5,
    y: -mousePerspective.x * 0.5,
    ease: "power4.out" });

};

window.addEventListener("mousemove", onMouseMove, false);

const onWindowResize = () => {
  viewport.width = container.clientWidth;
  viewport.height = container.clientHeight;
  viewport.aspectRatio = container.clientWidth / container.clientHeight;

  camera.aspect = viewport.aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(viewport.width, viewport.height);


};

// window.addEventListener("resize", onWindowResize);

document.addEventListener("mousewheel", event => {
  camera.position.z -= event.deltaY / 10 * 0.25;
});

const render = () => {
  renderer.render(scene, camera);
  raycaster.setFromCamera(mouse, camera);

  requestAnimationFrame(() => {
    render();
  });
};

render();
// }else{
//   $(".vfx_pc").css({
//     display:'none'
//   })
// }



