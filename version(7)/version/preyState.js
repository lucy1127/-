function preyFSM() {
				let fsm = new StateMachine({
					init: "search",
					transitions: [
						{ name: "seeFlag", from: "search", to: "snatch" },
						{ name: "seeFlag", from: "snatch", to: "snatch" },
						{ name: "seeFlag", from: "hide", to: "snatch" },
						{ name: "findFlag", from: "hide", to: "search" },
						{ name: "findFlag", from: "search", to: "search" },
						{ name: "attacked", from: "snatch", to: "hide" },
						{ name: "attacked", from: "search", to: "hide" },
						{ name: "attacked", from: "touchDown", to: "hide" },
						{ name: "attacked", from: "hide", to: "hide" },
						{ name: "takeFlag", from: "snatch", to: "touchDown" },
						{ name: "takeFlag", from: "hide", to: "touchDown" },
						{
							name: "takeFlag",
							from: "touchDown",
							to: "touchDown",
						},
						{ name: "restart", from: "touchDown", to: "search" },
						{ name: "restart", from: "search", to: "search" },
					],
				});
				return fsm;
			}
function capturerMesh() {
				let loader = new THREE.TextureLoader();
				let icon = loader.load("https://i.imgur.com/MIvqfLQ.png");
				
				let loaderBody = new THREE.TextureLoader();
				let iconBody = loader.load("https://i.imgur.com/MIvqfLQ.png");
				iconBody.wrapS = THREE.RepeatWrapping;
				iconBody.wrapT = THREE.RepeatWrapping;
				iconBody.repeat.set(5, 1);
				
				var capturer = new THREE.Group();
				var mat = new THREE.MeshNormalMaterial();
				var body = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					new THREE.MeshBasicMaterial({ 
							color: "lightgreen", 
							map:iconBody,
							side:THREE.DoubleSide,
					}) //search
				);
				var body2 = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					new THREE.MeshBasicMaterial({ 
						color: "yellow",
						map:iconBody,
						side:THREE.DoubleSide,
					}) //beAttacked
				);
				var body3 = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					new THREE.MeshBasicMaterial({ 
						color: "blue" ,
						map: iconBody,
						side: THREE.DoubleSide,
					}) //touchDown
				);
				var body4 = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					new THREE.MeshBasicMaterial({
						color: "red",
						map: iconBody,
						side: THREE.DoubleSide,
					}) //endDown
				);
				
				
				var pointer = new THREE.Mesh(
					new THREE.BoxGeometry(15, 2, 2),
					mat
				);
				body.position.y = 2;
				pointer.position.set(5, 2, 0);

				// '車'蓋
				let iconZX = new THREE.Group();
				let circle = new THREE.Mesh(
					new THREE.CircleGeometry(8, 8),
					new THREE.MeshBasicMaterial({ 
							map: icon,
							side:THREE.DoubleSide,
					})
				);
				circle.position.y = 4;
				circle.rotation.x = -Math.PI / 2;
				iconZX.add(circle);

				capturer.add(iconZX, pointer, body, body2, body3);
				return capturer;
			}
