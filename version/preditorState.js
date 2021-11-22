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
				
				
				var mat = new THREE.MeshNormalMaterial();
				var captain = new THREE.Group();
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
				var body3 = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					new THREE.MeshBasicMaterial({
						color: "yellow",
						map: iconBody,
						side: THREE.DoubleSide,
					})
				);
				var pointer = new THREE.Mesh(
					new THREE.BoxGeometry(15, 2, 2),
					mat
				);
				body.position.y = 3;
				pointer.position.set(5, 2, 0);

				// '帥'蓋
				let iconZX = new THREE.Group();
				let circle = new THREE.Mesh(
					new THREE.CircleGeometry(8, 8),
					new THREE.MeshBasicMaterial({ map: icon })
				);
				circle.position.y = 5;
				circle.rotation.x = -Math.PI / 2;
				iconZX.add(circle);

				captain.add(body, body2, body3, iconZX, pointer);
				return captain;
			}
function checkRaycaster() {
				let preditorToTarget = soldier.pos.clone().sub(preditor.pos);
				let preditorDir = preditor.mesh
					.localToWorld(new THREE.Vector3(1, 0, 0))
					.sub(preditor.mesh.localToWorld(new THREE.Vector3(0, 0, 0)))
					.normalize();
				preditorRaycaster.set(preditor.pos, preditorDir);

				let preditordistance = preditor.pos.distanceTo(soldier.pos);

				if (
					(preditorToTarget.dot(preditorDir) > 0 &&
						preditordistance < 60) ||
					attack == true
				) {
					preditor.fsm.shoot();
					$("#inView").text("soldier in view");
				} else {
					preditor.fsm.depart();
					$("#inView").text("soldier NOT in view");
				}
			}