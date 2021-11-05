function soldierMesh() {
				let loader = new THREE.TextureLoader();
				let icon = loader.load("https://i.imgur.com/7yl0PLz.png");
				var soldier = new THREE.Group();
				var mat = new THREE.MeshNormalMaterial();
				var body = new THREE.Mesh(
					new THREE.CylinderGeometry(8, 8, 4, 20, 1, true),
					mat
				);
				var pointer = new THREE.Mesh(
					new THREE.BoxGeometry(15, 2, 2),
					mat
				);
				body.position.y = 2;
				pointer.position.set(5, 2, 0);

				// '帥'蓋
				let iconZX = new THREE.Group();
				let circle = new THREE.Mesh(
					new THREE.CircleGeometry(8, 8),
					new THREE.MeshBasicMaterial({ map: icon })
				);
				circle.position.y = 4;
				circle.rotation.x = -Math.PI / 2;
				iconZX.add(circle);
				
				solattack = new THREE.Object3D();
				solattack.position.set(5,2,0);
				solattack2 = new THREE.Object3D();
				solattack2.position.set(4,2,0);


				soldier.add(iconZX, pointer, body,solattack,solattack2);
				return soldier;
			}
