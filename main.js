const getSpinnerImg = document.querySelector(".spinnerImg");
const getSpinnerBtn = document.querySelector(".spinnerBtn");

let startDeg = 0;

getSpinnerBtn.addEventListener("click", () => {
	const getRandomNumber = Math.floor(Math.random() * 360 + 2800);
	startDeg += getRandomNumber;
	getSpinnerImg.style.transform = `rotate(${startDeg}deg)`;
	getSpinnerBtn.classList.add("heartbeat");
	setInterval(() => {
		getSpinnerBtn.classList.remove("heartbeat");
	}, 7000);
});
