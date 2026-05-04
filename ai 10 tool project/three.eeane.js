import * as THREE from 'three';

var canvas = document.getElementById('three-canvas');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);
camera.position.z = 7;

var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// تتبع الماوس
var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
document.addEventListener('mousemove', function(e) {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
});

// === شكل مورفينغ مركزي ===
var icoGeo = new THREE.IcosahedronGeometry(2, 3);
var origP = new Float32Array(icoGeo.attributes.position.array);
var icoMat = new THREE.MeshStandardMaterial({
    color: 0x0c0c0c,
    metalness: 0.92,
    roughness: 0.1
});
var icoMesh = new THREE.Mesh(icoGeo, icoMat);
scene.add(icoMesh);

// === طبقة سلكية ===
var wGeo = new THREE.IcosahedronGeometry(2.01, 2);
var wOrig = new Float32Array(wGeo.attributes.position.array);
var wireMat = new THREE.MeshBasicMaterial({
    color: 0x333333,
    wireframe: true,
    transparent: true,
    opacity: 0.07
});
var wireMesh = new THREE.Mesh(wGeo, wireMat);
scene.add(wireMesh);

// === الحلقات المدارية ===
var rMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.9,
    roughness: 0.15
});

var ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.008, 8, 120), rMat);
ring1.rotation.x = 0.5;
ring1.rotation.y = 0.3;
scene.add(ring1);

var ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.006, 8, 120), rMat.clone());
ring2.rotation.x = 1.4;
ring2.rotation.z = 0.4;
scene.add(ring2);

var ring3 = new THREE.Mesh(
    new THREE.TorusGeometry(4.0, 0.004, 8, 120),
    new THREE.MeshStandardMaterial({
        color: 0x151515,
        metalness: 0.9,
        roughness: 0.2,
        transparent: true,
        opacity: 0.5
    })
);
ring3.rotation.x = 0.2;
ring3.rotation.z = 0.9;
scene.add(ring3);

// === عُقد عائمة مضيئة ===
var nGeo = new THREE.SphereGeometry(0.04, 8, 8);
var nMat = new THREE.MeshStandardMaterial({
    color: 0xff4f30,
    metalness: 0.8,
    roughness: 0.2,
    emissive: 0xff4f30,
    emissiveIntensity: 0.3
});
var nodes = [];
for (var i = 0; i < 16; i++) {
    var node = new THREE.Mesh(nGeo, nMat);
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    var rad = 2.8 + Math.random() * 1.8;
    node.position.set(
        rad * Math.sin(phi) * Math.cos(theta),
        rad * Math.sin(phi) * Math.sin(theta),
        rad * Math.cos(phi)
    );
    node.userData = {
        base: node.position.clone(),
        spd: 0.12 + Math.random() * 0.2,
        off: Math.random() * 6.28
    };
    scene.add(node);
    nodes.push(node);
}

// === الجسيمات ===
var pCount = 250;
var pGeo = new THREE.BufferGeometry();
var pPos = new Float32Array(pCount * 3);
var pSizes = new Float32Array(pCount);
for (var i = 0; i < pCount; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 18;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
    pSizes[i] = Math.random() * 2.5 + 0.5;
}
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('aSize', new THREE.BufferAttribute(pSizes, 1));

var pMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: [
        'attribute float aSize;',
        'uniform float uTime;',
        'varying float vA;',
        'void main() {',
        '    vec3 p = position;',
        '    p.y += sin(uTime * 0.18 + position.x * 0.35) * 0.4;',
        '    p.x += cos(uTime * 0.14 + position.z * 0.28) * 0.3;',
        '    vec4 mv = modelViewMatrix * vec4(p, 1.0);',
        '    gl_PointSize = aSize * (45.0 / -mv.z);',
        '    gl_Position = projectionMatrix * mv;',
        '    vA = 0.08 + 0.08 * sin(uTime * 0.35 + position.y * 0.4);',
        '}'
    ].join('\n'),
    fragmentShader: [
        'varying float vA;',
        'void main() {',
        '    float d = length(gl_PointCoord - vec2(0.5));',
        '    if (d > 0.5) discard;',
        '    float a = smoothstep(0.5, 0.0, d) * vA;',
        '    gl_FragColor = vec4(1.0, 1.0, 1.0, a);',
        '}'
    ].join('\n'),
    transparent: true,
    depthWrite: false
});
scene.add(new THREE.Points(pGeo, pMat));

// === الإضاءة ===
scene.add(new THREE.AmbientLight(0xffffff, 0.35));
var keyLight = new THREE.PointLight(0xffffff, 3, 20);
keyLight.position.set(4, 3, 6);
scene.add(keyLight);
var fillLight = new THREE.PointLight(0xff4f30, 0.6, 15);
fillLight.position.set(-4, -2, 3);
scene.add(fillLight);
var rimLight = new THREE.PointLight(0xffffff, 1.5, 12);
rimLight.position.set(0, 4, -4);
scene.add(rimLight);

// === تجميع كل شيء في مجموعة واحدة ===
var mainGroup = new THREE.Group();
mainGroup.add(icoMesh, wireMesh, ring1, ring2, ring3);
for (var i = 0; i < nodes.length; i++) {
    mainGroup.add(nodes[i]);
}
mainGroup.position.set(2.5, 0.3, 0);
scene.add(mainGroup);

// === حلقة التحريك ===
var t = 0;

function animate() {
    requestAnimationFrame(animate);
    t += 0.006;

    // تنعيم حركة الماوس
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    // مورفينغ الشكل المركزي
    var pos = icoGeo.attributes.position.array;
    for (var i = 0; i < pos.length; i += 3) {
        var ox = origP[i], oy = origP[i + 1], oz = origP[i + 2];
        var len = Math.max(0.001, Math.sqrt(ox * ox + oy * oy + oz * oz));
        var nx = ox / len, ny = oy / len, nz = oz / len;
        var d = Math.sin(ox * 1.5 + t * 0.4) * 0.13
              + Math.cos(oy * 1.5 + t * 0.3) * 0.13
              + Math.sin(oz * 1.5 + t * 0.35) * 0.09
              + Math.sin((ox + oy) * 2 + t * 0.5) * 0.06;
        pos[i] = ox + nx * d;
        pos[i + 1] = oy + ny * d;
        pos[i + 2] = oz + nz * d;
    }
    icoGeo.attributes.position.needsUpdate = true;
    icoGeo.computeVertexNormals();

    // مورفينغ السلكي
    var wPos = wGeo.attributes.position.array;
    for (var i = 0; i < wPos.length; i += 3) {
        var ox = wOrig[i], oy = wOrig[i + 1], oz = wOrig[i + 2];
        var len = Math.max(0.001, Math.sqrt(ox * ox + oy * oy + oz * oz));
        var nx = ox / len, ny = oy / len, nz = oz / len;
        var d = Math.sin(ox * 1.2 + t * 0.35) * 0.15
              + Math.cos(oy * 1.2 + t * 0.25) * 0.15;
        wPos[i] = ox + nx * d;
        wPos[i + 1] = oy + ny * d;
        wPos[i + 2] = oz + nz * d;
    }
    wGeo.attributes.position.needsUpdate = true;

    // دوران الأشكال
    icoMesh.rotation.x = t * 0.15 + mouse.y * 0.15;
    icoMesh.rotation.y = t * 0.1 + mouse.x * 0.15;
    wireMesh.rotation.x = -t * 0.08 + mouse.y * 0.1;
    wireMesh.rotation.y = -t * 0.06 + mouse.x * 0.1;

    // دوران الحلقات
    ring1.rotation.z = t * 0.07;
    ring2.rotation.z = -t * 0.05;
    ring3.rotation.y = t * 0.04;

    // تحريك العُقد
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        var d = n.userData;
        n.position.x = d.base.x + Math.sin(t * d.spd + d.off) * 0.3;
        n.position.y = d.base.y + Math.cos(t * d.spd * 0.8 + d.off) * 0.3;
        n.position.z = d.base.z + Math.sin(t * d.spd * 0.6 + d.off * 2) * 0.2;
    }

    // استجابة المجموعة للماوس
    mainGroup.rotation.y = mouse.x * 0.08;
    mainGroup.rotation.x = mouse.y * 0.05;

    // تحريك الإضاءة
    keyLight.position.x = 4 + Math.sin(t * 0.3) * 1.5;

    // تحديث الجسيمات
    pMat.uniforms.uTime.value = t;

    renderer.render(scene, camera);
}

animate();

// === التعامل مع تغيير حجم النافذة ===
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});