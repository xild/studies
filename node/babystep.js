	"use strict"

	for (let i of process.argv) {
		let sum = 0;
		sum += i;
		if(isNaN(i)){
			console.log("number");
		}
   		console.log(sum); // logs "0", "1", "2", "foo"
	}
