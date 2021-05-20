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
var images = document.querySelector('#user-img');
i=0
Onclick=()=>{
	i+=1
	if(i%2==0){
		document.querySelector(".user-ui").classList.toggle("out");
	}
	else{
		document.querySelector(".user-ui").classList.toggle("in");
	}
}
