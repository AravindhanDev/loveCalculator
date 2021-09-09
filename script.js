document.querySelector("button").addEventListener("click", () => {
	let value1 = document.getElementById("per1").value;
	let value2 = document.getElementById("per2").value;
	if (value1 !== "" && value2 !== "") {
		let rand = Math.floor(Math.random() * 100) + 1;

		if (rand < 30) {
			document.querySelector("p").innerHTML = `${rand}% Just say good bye.`;
		} else if (rand < 50) {
			document.querySelector(
				"p"
			).innerHTML = `${rand}% Try to understand Each other`;
		} else if (rand < 70) {
			document.querySelector("p").innerHTML = `${rand}% Good ready to date`;
		} else if (rand < 90) {
			document.querySelector(
				"p"
			).innerHTML = `${rand}% becomes mad at each other`;
		} else if (rand > 90) {
			document.querySelector(
				"p"
			).innerHTML = `${rand}% When you'll going to live together`;
		} else if (rand === 100) {
			document.querySelector("p").innerHTML = `${rand}% You are 1 on billion`;
		} else {
			document.querySelector("p").innerHTML = `Just Fuck Off`;
		}
		document.getElementById("per1").value = "";
		document.getElementById("per2").value = "";
	}
});
