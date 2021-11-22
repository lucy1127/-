function garrisonFSM() {
	let fsm = new StateMachine({
		init: "follow",
		transitions: [
			{ name: "attack", from: "follow", to: "defense" },
			{ name: "attack", from: "defense", to: "defense" },
			{ name: "noattack", from: "defense", to: "follow" },
			{ name: "noattack", from: "follow", to: "follow" },
		],
	});

	return fsm;
}

function DefMesh() {
	let loader = new THREE.TextureLoader();
	let icon = loader.load("https://i.imgur.com/iiq8Wk5.png");

	let loaderBody = new THREE.TextureLoader();
	let iconBody = loader.load("https://i.imgur.com/iiq8Wk5.png");
	iconBody.wrapS = THREE.RepeatWrapping;
	iconBody.wrapT = THREE.RepeatWrapping;
	iconBody.repeat.set(5, 1);

	var def = new THREE.Group();
	var mat = new THREE.MeshNormalMaterial();

	var body = new THREE.Mesh(
		new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
		new THREE.MeshBasicMaterial({ 
			color: "lightgreen",
			map: iconBody,
			side: THREE.DoubleSide,
		})
	);
	var body2 = new THREE.Mesh(
		new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
		new THREE.MeshBasicMaterial({ 
			color: "red",
			map: iconBody,
			side: THREE.DoubleSide,
		})
	);

	var pointer = new THREE.Mesh(
		new THREE.BoxGeometry(15, 2, 2),mat
	);
	body.position.y = 2;
	body2.position.y = 2;
	pointer.position.set(5, 2, 0);
	
	// '卒'蓋
	let iconZX = new THREE.Group();
	let circle = new THREE.Mesh(
			new THREE.CircleGeometry(8, 32),
			new THREE.MeshBasicMaterial({ map: icon })
	);
	circle.position.y = 4;
	circle.rotation.x = -Math.PI / 2;
	iconZX.add(circle);

	def.add(body, body2, iconZX, pointer);
	return def;
}