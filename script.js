document.getElementById('btn').addEventListener('click', async function(){
	const tp = document.getElementById('text').value;
	const kd = parseInt(document.getElementById('delay').value);

	await delayF(kd);
	document.getElementById("output").innerText = tp;

})

function delayF(kd){
	return new Promise((resolve, reject) => {
		setTimeout(resolve,kd);
	})
}
