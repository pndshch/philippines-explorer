import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

const canvas = document.getElementById("expeditionCanvas");
const stage = document.getElementById("expeditionStage");
const scoreEl = document.getElementById("expeditionScore");
const progressEl = document.getElementById("expeditionProgress");
const missionTitle = document.getElementById("missionTitle");
const missionHint = document.getElementById("missionHint");
const placeName = document.getElementById("placeName");
const placeLesson = document.getElementById("placeLesson");
const placeTags = document.getElementById("placeTags");
const webglNote = document.getElementById("webglNote");

const places = [
  {
    id: "manila",
    name: "Manila / Intramuros",
    lat: 14.5995,
    lon: 120.9842,
    group: "ルソン",
    tags: ["首都", "スペイン統治", "港湾都市"],
    lesson: "マニラ湾の内側に発展した首都圏。Intramuros はスペイン統治期の城壁都市で、政治・宗教・交易の中心でした。",
  },
  {
    id: "banaue",
    name: "Banaue Rice Terraces",
    lat: 16.91,
    lon: 121.13,
    group: "ルソン",
    tags: ["山岳地帯", "棚田", "先住民文化"],
    lesson: "コルディリェラ山地の棚田。山がちな地形に合わせ、人の暮らしと農業が斜面へ広がったことが見えます。",
  },
  {
    id: "vigan",
    name: "Vigan",
    lat: 17.5747,
    lon: 120.3869,
    group: "ルソン",
    tags: ["交易", "街並み", "ルソン北部"],
    lesson: "北西ルソンの歴史都市。アジア交易とスペイン植民地都市の形が重なった場所として覚えると立体的です。",
  },
  {
    id: "taal",
    name: "Taal Volcano",
    lat: 14.002,
    lon: 120.993,
    group: "ルソン",
    tags: ["火山", "湖", "自然リスク"],
    lesson: "湖の中に火山島がある複雑な地形。人口密集地の近くに火山リスクがあることを示す重要地点です。",
  },
  {
    id: "mayon",
    name: "Mayon Volcano",
    lat: 13.257,
    lon: 123.685,
    group: "ルソン",
    tags: ["火山", "ビコール", "避難計画"],
    lesson: "きれいな円錐形で知られる火山。観光資源であると同時に、噴火・土石流と向き合う地域でもあります。",
  },
  {
    id: "puerto",
    name: "Puerto Princesa",
    lat: 9.7407,
    lon: 118.7353,
    group: "パラワン",
    tags: ["島の回廊", "生物多様性", "地下河川"],
    lesson: "パラワンは南シナ海とスールー海の間にのびる細長い島。自然保護と観光を一緒に考える入口です。",
  },
  {
    id: "cebu",
    name: "Cebu",
    lat: 10.3157,
    lon: 123.8854,
    group: "ビサヤ",
    tags: ["海路", "交易", "都市"],
    lesson: "ビサヤの交通と経済の要所。島々が近いため、港・フェリー・航空路が生活圏をつくります。",
  },
  {
    id: "bohol",
    name: "Chocolate Hills",
    lat: 9.8349,
    lon: 124.1435,
    group: "ビサヤ",
    tags: ["石灰岩", "地形", "観光"],
    lesson: "ボホールの丘陵地形。地質と観光がつながる場所で、フィリピンの自然景観の多様さが見えます。",
  },
  {
    id: "leyte",
    name: "Leyte Gulf",
    lat: 10.85,
    lon: 125.0,
    group: "ビサヤ",
    tags: ["海峡", "戦争史", "台風"],
    lesson: "海の通路としても歴史の舞台としても重要な湾。島国では海域そのものが歴史の場所になります。",
  },
  {
    id: "zamboanga",
    name: "Zamboanga",
    lat: 6.9214,
    lon: 122.079,
    group: "ミンダナオ",
    tags: ["港", "多文化", "ミンダナオ西部"],
    lesson: "ミンダナオ西端の港湾都市。マレー世界、スペイン語系クレオール、イスラム文化圏への入口として見られます。",
  },
  {
    id: "davao",
    name: "Davao",
    lat: 7.1907,
    lon: 125.4553,
    group: "ミンダナオ",
    tags: ["都市", "農業", "南部経済"],
    lesson: "ミンダナオ最大級の都市圏。果物、物流、都市成長を通じて南部の経済を見る拠点です。",
  },
  {
    id: "apo",
    name: "Mount Apo",
    lat: 6.9875,
    lon: 125.2708,
    group: "ミンダナオ",
    tags: ["最高峰", "火山", "生態系"],
    lesson: "フィリピン最高峰。山岳、生態系、先住民の土地、観光が重なる地点として覚えると深くなります。",
  },
];

const islands = [
  { name: "Luzon", lon: 121.1, lat: 16.0, rx: 10, rz: 21, rot: -0.2, height: 5.1, seed: 1 },
  { name: "Bicol", lon: 123.4, lat: 13.2, rx: 4.3, rz: 8.5, rot: 0.45, height: 3.6, seed: 2 },
  { name: "Mindoro", lon: 121.0, lat: 12.9, rx: 4.4, rz: 5.7, rot: -0.35, height: 2.4, seed: 3 },
  { name: "Palawan", lon: 118.7, lat: 10.0, rx: 3.5, rz: 19, rot: -0.62, height: 2.1, seed: 4 },
  { name: "Panay", lon: 122.5, lat: 11.2, rx: 4.6, rz: 4.8, rot: -0.1, height: 2.2, seed: 5 },
  { name: "Negros", lon: 123.1, lat: 10.0, rx: 3.2, rz: 7.3, rot: -0.15, height: 2.8, seed: 6 },
  { name: "Cebu", lon: 123.8, lat: 10.35, rx: 1.2, rz: 7.1, rot: -0.22, height: 1.7, seed: 7 },
  { name: "Bohol", lon: 124.15, lat: 9.85, rx: 2.7, rz: 2.4, rot: 0.25, height: 1.5, seed: 8 },
  { name: "Leyte", lon: 124.8, lat: 10.9, rx: 2.8, rz: 6.2, rot: 0.1, height: 2.2, seed: 9 },
  { name: "Samar", lon: 125.0, lat: 12.0, rx: 4.0, rz: 5.4, rot: -0.45, height: 2.3, seed: 10 },
  { name: "Mindanao", lon: 124.2, lat: 7.5, rx: 15.0, rz: 12.2, rot: 0.16, height: 5.6, seed: 11 },
  { name: "Sulu", lon: 121.0, lat: 6.1, rx: 5.4, rz: 1.0, rot: -0.35, height: 1.1, seed: 12 },
];

const keys = {
  forward: false,
  back: false,
  left: false,
  right: false,
};

const sceneBounds = {
  minX: -45,
  maxX: 42,
  minZ: -70,
  maxZ: 64,
};

let scene;
let camera;
let renderer;
let player;
let routeRing;
let heading = -0.2;
let speed = 0;
let animationId = null;
let lastTime = performance.now();
let discovered = new Set();
let markerMap = new Map();

function supportsWebGL() {
  try {
    const test = document.createElement("canvas");
    return Boolean(test.getContext("webgl") || test.getContext("experimental-webgl"));
  } catch (error) {
    return false;
  }
}

function project(lon, lat) {
  return new THREE.Vector3((lon - 122.1) * 8.4, 0, -(lat - 11.8) * 7.25);
}

function makeIslandGeometry(island) {
  const rings = 8;
  const segments = 72;
  const positions = [];
  const colors = [];
  const indices = [];
  const low = new THREE.Color("#4e9a61");
  const high = new THREE.Color("#f3df94");
  const beach = new THREE.Color("#f8d98a");

  for (let r = 0; r <= rings; r += 1) {
    const t = r / rings;
    for (let s = 0; s < segments; s += 1) {
      const angle = (s / segments) * Math.PI * 2;
      const edge = 1 + 0.11 * Math.sin(angle * 3 + island.seed) + 0.07 * Math.sin(angle * 7 + island.seed * 1.7);
      const localX = Math.cos(angle) * island.rx * t * edge;
      const localZ = Math.sin(angle) * island.rz * t * edge;
      const cos = Math.cos(island.rot);
      const sin = Math.sin(island.rot);
      const x = localX * cos - localZ * sin;
      const z = localX * sin + localZ * cos;
      const ridge = Math.max(0, 1 - t);
      const folded = Math.sin(angle * 5 + island.seed) * 0.22 * ridge;
      const y = t > 0.96 ? 0.08 : 0.08 + island.height * Math.pow(ridge, 1.55) + folded;
      const c = t > 0.86 ? beach.clone() : low.clone().lerp(high, Math.min(1, y / (island.height + 0.5)));
      positions.push(x, y, z);
      colors.push(c.r, c.g, c.b);
    }
  }

  for (let r = 0; r < rings; r += 1) {
    for (let s = 0; s < segments; s += 1) {
      const a = r * segments + s;
      const b = r * segments + ((s + 1) % segments);
      const c = (r + 1) * segments + s;
      const d = (r + 1) * segments + ((s + 1) % segments);
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makeLabel(text) {
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = 512;
  labelCanvas.height = 128;
  const ctx = labelCanvas.getContext("2d");
  ctx.fillStyle = "rgba(3, 24, 31, 0.76)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.32)";
  ctx.lineWidth = 4;
  roundRect(ctx, 18, 24, 476, 78, 20);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 34px Helvetica, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 256, 64, 440);

  const texture = new THREE.CanvasTexture(labelCanvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
  sprite.scale.set(8.5, 2.1, 1);
  sprite.position.y = 5.2;
  return sprite;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function buildScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#082f3e");
  scene.fog = new THREE.Fog("#082f3e", 56, 145);

  camera = new THREE.PerspectiveCamera(53, 1, 0.1, 420);
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const ambient = new THREE.HemisphereLight("#d9fffb", "#15372e", 2.4);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight("#fff0c2", 3.1);
  sun.position.set(-28, 48, 34);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  scene.add(sun);

  const sea = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 180, 12, 12),
    new THREE.MeshStandardMaterial({
      color: "#0b7181",
      roughness: 0.58,
      metalness: 0.04,
    }),
  );
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -0.05;
  sea.receiveShadow = true;
  scene.add(sea);

  const grid = new THREE.GridHelper(160, 32, "#75ccd1", "#2f8994");
  grid.position.y = 0.02;
  grid.material.opacity = 0.18;
  grid.material.transparent = true;
  scene.add(grid);

  const islandMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.85,
    metalness: 0.02,
  });

  islands.forEach((island) => {
    const mesh = new THREE.Mesh(makeIslandGeometry(island), islandMaterial);
    const position = project(island.lon, island.lat);
    mesh.position.copy(position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
  });

  places.forEach((place) => addMarker(place));
  player = makePlayer();
  scene.add(player);
  resetExpedition();

  routeRing = new THREE.Mesh(
    new THREE.TorusGeometry(2.7, 0.08, 12, 64),
    new THREE.MeshBasicMaterial({ color: "#f5bf28", transparent: true, opacity: 0.85 }),
  );
  routeRing.rotation.x = Math.PI / 2;
  scene.add(routeRing);

  resize();
}

function addMarker(place) {
  const position = project(place.lon, place.lat);
  const group = new THREE.Group();
  group.position.set(position.x, 0.4, position.z);
  group.userData.place = place;

  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 5.2, 16),
    new THREE.MeshBasicMaterial({ color: "#f5bf28", transparent: true, opacity: 0.42 }),
  );
  beacon.position.y = 2.65;

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.62, 24, 16),
    new THREE.MeshStandardMaterial({ color: "#ffffff", emissive: "#f5bf28", emissiveIntensity: 1.4 }),
  );
  orb.position.y = 0.75;

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.05, 10, 36),
    new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.85 }),
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.12;

  group.add(beacon, orb, ring, makeLabel(place.name));
  scene.add(group);
  markerMap.set(place.id, group);
}

function makePlayer() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.ConeGeometry(0.72, 1.9, 4),
    new THREE.MeshStandardMaterial({ color: "#f4fffb", emissive: "#0b6f72", emissiveIntensity: 0.2 }),
  );
  body.rotation.x = Math.PI / 2;
  body.castShadow = true;

  const wing = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.12, 0.42),
    new THREE.MeshStandardMaterial({ color: "#f5bf28", roughness: 0.6 }),
  );
  wing.position.z = 0.08;
  wing.castShadow = true;

  const light = new THREE.PointLight("#f5bf28", 1.8, 16);
  light.position.set(0, 1.4, 0);
  group.add(body, wing, light);
  return group;
}

function resetExpedition() {
  discovered = new Set();
  heading = -0.1;
  speed = 0;
  const start = project(120.6, 18.4);
  if (player) {
    player.position.set(start.x, 2.2, start.z);
    player.rotation.y = heading;
  }
  markerMap.forEach((marker) => setMarkerVisited(marker, false));
  updateHud();
  setPlacePanel(null);
}

function setMarkerVisited(marker, isVisited) {
  marker.userData.visited = isVisited;
  const beacon = marker.children[0];
  const orb = marker.children[1];
  const ring = marker.children[2];
  beacon.material.opacity = isVisited ? 0.12 : 0.42;
  orb.material.color.set(isVisited ? "#81f0c4" : "#ffffff");
  orb.material.emissive.set(isVisited ? "#1fc078" : "#f5bf28");
  ring.material.color.set(isVisited ? "#81f0c4" : "#ffffff");
}

function setPlacePanel(place) {
  placeTags.innerHTML = "";
  if (!place) {
    placeName.textContent = "まだ未発見";
    placeLesson.textContent = "光の柱に近づくと、その場所の地理・歴史・文化のメモが開きます。";
    return;
  }
  placeName.textContent = place.name;
  placeLesson.textContent = place.lesson;
  place.tags.concat(place.group).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    placeTags.appendChild(chip);
  });
}

function updateHud() {
  const total = places.length;
  const count = discovered.size;
  scoreEl.textContent = `${count} / ${total}`;
  progressEl.max = total;
  progressEl.value = count;
  if (count === total) {
    missionTitle.textContent = "全地点を発見";
    missionHint.textContent = "ルソン、ビサヤ、ミンダナオをひと通り横断しました。リセットで再挑戦できます。";
    return;
  }
  const next = nearestUndiscovered();
  missionTitle.textContent = `${next.name} へ`;
  missionHint.textContent = `次の発見まで約 ${Math.round(next.distance)} km 感覚。光の柱を目印に進んでください。`;
}

function nearestUndiscovered() {
  const playerPos = player ? player.position : new THREE.Vector3();
  let best = null;
  places.forEach((place) => {
    if (discovered.has(place.id)) return;
    const pos = project(place.lon, place.lat);
    const distance = playerPos.distanceTo(new THREE.Vector3(pos.x, playerPos.y, pos.z)) * 11;
    if (!best || distance < best.distance) best = { ...place, position: pos, distance };
  });
  return best || { ...places[0], position: project(places[0].lon, places[0].lat), distance: 0 };
}

function guideToNext() {
  const next = nearestUndiscovered();
  if (!next) return;
  const dx = next.position.x - player.position.x;
  const dz = next.position.z - player.position.z;
  heading = Math.atan2(dx, dz);
  speed = Math.max(speed, 6);
}

function bindControls() {
  window.addEventListener("keydown", (event) => {
    const control = keyToControl(event.key);
    if (!control) return;
    keys[control] = true;
    event.preventDefault();
  });
  window.addEventListener("keyup", (event) => {
    const control = keyToControl(event.key);
    if (!control) return;
    keys[control] = false;
  });

  document.querySelectorAll(".move-btn").forEach((button) => {
    const control = button.dataset.control;
    const down = (event) => {
      event.preventDefault();
      keys[control] = true;
    };
    const up = () => {
      keys[control] = false;
    };
    button.addEventListener("pointerdown", down);
    button.addEventListener("pointerup", up);
    button.addEventListener("pointerleave", up);
    button.addEventListener("pointercancel", up);
  });

  document.getElementById("guideNext").addEventListener("click", guideToNext);
  document.getElementById("resetExpedition").addEventListener("click", resetExpedition);
}

function keyToControl(key) {
  const lower = key.toLowerCase();
  if (lower === "w" || key === "ArrowUp") return "forward";
  if (lower === "s" || key === "ArrowDown") return "back";
  if (lower === "a" || key === "ArrowLeft") return "left";
  if (lower === "d" || key === "ArrowRight") return "right";
  return null;
}

function update(delta, elapsed) {
  const turnSpeed = 1.95;
  const acceleration = 24;
  const drag = 6.2;
  const maxSpeed = 22;
  if (keys.left) heading += turnSpeed * delta;
  if (keys.right) heading -= turnSpeed * delta;
  if (keys.forward) speed += acceleration * delta;
  if (keys.back) speed -= acceleration * delta * 0.72;
  if (!keys.forward && !keys.back) {
    const sign = Math.sign(speed);
    speed -= sign * Math.min(Math.abs(speed), drag * delta);
  }
  speed = THREE.MathUtils.clamp(speed, -9, maxSpeed);

  const forward = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
  player.position.addScaledVector(forward, speed * delta);
  player.position.x = THREE.MathUtils.clamp(player.position.x, sceneBounds.minX, sceneBounds.maxX);
  player.position.z = THREE.MathUtils.clamp(player.position.z, sceneBounds.minZ, sceneBounds.maxZ);
  player.position.y = 2.4 + Math.sin(elapsed * 2.2) * 0.14;
  player.rotation.y = heading;
  player.rotation.z = THREE.MathUtils.clamp(-speed / maxSpeed, -0.32, 0.32);

  markerMap.forEach((marker) => {
    const place = marker.userData.place;
    const orb = marker.children[1];
    const ring = marker.children[2];
    if (!marker.userData.visited) {
      orb.position.y = 0.78 + Math.sin(elapsed * 3 + marker.position.x) * 0.18;
      ring.scale.setScalar(1 + Math.sin(elapsed * 3.5 + marker.position.z) * 0.08);
      const distance = player.position.distanceTo(marker.position);
      if (distance < 4.1) discover(place, marker);
    }
  });

  const next = nearestUndiscovered();
  if (routeRing && next) {
    routeRing.visible = discovered.size < places.length;
    routeRing.position.set(next.position.x, 0.18, next.position.z);
    routeRing.scale.setScalar(1 + Math.sin(elapsed * 2.4) * 0.12);
  }

  const camTarget = player.position.clone().add(new THREE.Vector3(0, 1.5, 0));
  const camPos = player.position.clone()
    .addScaledVector(forward, -16)
    .add(new THREE.Vector3(0, 12, 0));
  camera.position.lerp(camPos, 1 - Math.pow(0.001, delta));
  camera.lookAt(camTarget);
}

function discover(place, marker) {
  if (discovered.has(place.id)) return;
  discovered.add(place.id);
  setMarkerVisited(marker, true);
  setPlacePanel(place);
  updateHud();
}

function resize() {
  if (!stage || !renderer || !camera) return;
  const rect = stage.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / Math.max(1, rect.height);
  camera.updateProjectionMatrix();
}

function animate(now) {
  const delta = Math.min(0.04, (now - lastTime) / 1000);
  const elapsed = now / 1000;
  lastTime = now;
  update(delta, elapsed);
  renderer.render(scene, camera);
  animationId = requestAnimationFrame(animate);
}

function init3D() {
  if (!canvas || !stage || !supportsWebGL()) {
    if (webglNote) webglNote.hidden = false;
    return;
  }

  buildScene();
  bindControls();
  window.addEventListener("resize", resize);
  animationId = requestAnimationFrame(animate);
}

window.addEventListener("pagehide", () => {
  if (animationId) cancelAnimationFrame(animationId);
});

init3D();
