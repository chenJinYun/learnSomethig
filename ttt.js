
		let link1 = {
			"val": 2,
			"next": {
				"val": 4,
				"next": {
					"val": 3
				}
			}
		}

		let link2 = {
			"val": 5,
			"next": {
				"val": 6,
				"next": {
					"val": 4
				}
			}
		}


		let link4 = function (val) {
			this.val = val
		}
		function add (link1, link2) 
		{
			let link3 = new link4(0);
			let res = link3;
			let sum = 0;
			let flag = 0;
			while (link1 || link2 || flag == 1) {
				let temp = flag;
				temp += (link1 ? link1.val : 0) + (link2 ? link2.val : 0);
				link1 = (link1 ? link1.next : null);
				link2 = (link2 ? link2.next : null);
				link3.next = new link4(temp % 10);
				flag = temp / 10;
				link3 = link3.next;
			}
			return res.next.val;
		}
		console.log(add(link1, link2));