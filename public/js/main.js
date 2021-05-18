clik=()=>{
	document.getElementById("burger").classList.toggle("change");
	document.querySelector('ul').classList.toggle("cool")
	let lis = document.querySelectorAll('.links li')
	console.log(lis)
	i=0.5
	lis.forEach(li=>{
		li.style.opacity=1
	})
}


