function preditorFSM() {
	let fsm = new StateMachine({
		init: "patrol",
		transitions: [
			{ name: "beattacked", from: "patrol", to: "hide" },
			{ name: "beattacked", from: "hide", to: "hide" },
			{ name: "depart", from: "hide", to: "patrol" },
			{ name: "depart", from: "attack", to: "hide" },
			{ name: "depart", from: "patrol", to: "patrol" },
			{ name: "shoot", from: "patrol", to: "attack" },
			{ name: "shoot", from: "attack", to: "attack" },
		],
	});
	return fsm;
}
function preditorMesh() {
let loader = new THREE.TextureLoader();
	let icon = loader.load("https://i.imgur.com/9N9ohZ9.jpeg");
	let loaderBody = new THREE.TextureLoader();
	let iconBody = loader.load("https://i.imgur.com/9N9ohZ9.jpeg");
	iconBody.wrapS = THREE.RepeatWrapping;
	iconBody.wrapT = THREE.RepeatWrapping;
	iconBody.repeat.set(5, 1);
	
	
	var mat = loader.load("https://i.imgur.com/7vbarnJ.jpeg");
	var pointerHeadTexture = loader.load("https://i.imgur.com/93FViDI.png");
	
	var captain = new THREE.Group();
	var body = new THREE.Mesh(
		new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
		new THREE.MeshBasicMaterial({
		color:"green",
		map: iconBody,
		side: THREE.DoubleSide,
		})
	);
	var body2 = new THREE.Mesh(
		new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
		new THREE.MeshBasicMaterial({
			color:"red",
			map: iconBody,
			side: THREE.DoubleSide,
		})
	);
	var body3 = new THREE.Mesh(
		new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
		new THREE.MeshBasicMaterial({
			color:"yellow",
			map: iconBody,
			side: THREE.DoubleSide,
		})
	);
	var pointer = new THREE.Mesh(
		new THREE.CylinderGeometry(1.5, 1.5,15,32),
		new THREE.MeshBasicMaterial({
			map: mat,
			side: THREE.DoubleSide
		})
	);
	var pointerHead = new THREE.Mesh(
		new THREE.CylinderGeometry(1.7,1.7,2,32,1,true),
		new THREE.MeshBasicMaterial({
			color:"red",
			side: THREE.DoubleSide
		})
	);
	
	var pointerHead2 = new THREE.Mesh(
		new THREE.CylinderGeometry(1.7,1.7,2,32,1,true),
		new THREE.MeshBasicMaterial({
			color:'green',
			side: THREE.DoubleSide,
		})
	);
	var pointerHead3 = new THREE.Mesh(
		new THREE.CylinderGeometry(1.7,1.7,2,32,1,true),
		new THREE.MeshBasicMaterial({
			color:"yellow",
			side: THREE.DoubleSide,
		})
	);
	
	body.position.y = 3;
	body2.position.y = 3;
	body3.position.y = 3;
	body.name = "preditor";
	body2.name = "preditor1";
	body3.name = "preditor2";
	
	
	pointer.rotation.z = Math.PI/2;
	pointer.position.set(5, 2, 0);
	pointerHead.rotation.z = Math.PI/2;
	pointerHead.position.set(13,2,0);
	pointerHead2.rotation.z = Math.PI/2;
	pointerHead2.position.set(13,2,0);
	pointerHead3.rotation.z = Math.PI/2;
	pointerHead3.position.set(13,2,0);
	

	// '帥'蓋
	let iconZX = new THREE.Group();
	let circle = new THREE.Mesh(
		new THREE.CircleGeometry(8, 32),
		new THREE.MeshBasicMaterial({ color:'green', map: icon ,side: THREE.DoubleSide})
	);
	let circle2 = new THREE.Mesh(
		new THREE.CircleGeometry(8, 32),
		new THREE.MeshBasicMaterial({ color:'yellow', map: icon,side: THREE.DoubleSide })
	);
	let circle3 = new THREE.Mesh(
		new THREE.CircleGeometry(8, 32),
		new THREE.MeshBasicMaterial({ color:'red', map: icon,side: THREE.DoubleSide})
	);
	let circleback = new THREE.Mesh(
		new THREE.CircleGeometry(8, 32),
		new THREE.MeshBasicMaterial({ color:'grey', map: icon,side: THREE.DoubleSide})
	);
	
	circle.position.y = 5;
	circle.rotation.x = -Math.PI / 2;
	circle2.position.y = 5;
	circle2.rotation.x = -Math.PI / 2;
	circle3.position.y = 5;
	circle3.rotation.x = -Math.PI / 2;
	circleback.position.y = 5;
	circleback.rotation.x = -Math.PI / 2;
	iconZX.add(circle,circle2,circle3,circleback);
	
	fire = new THREE.Object3D();
	fire.position.set(12, 2, 0);
	fire1 = new THREE.Object3D();
	fire1.position.set(11, 2, 0);

	captain.add(body, body2,body3, iconZX, pointer,pointerHead,pointerHead2,pointerHead3,fire,fire1);
	return captain;
			}