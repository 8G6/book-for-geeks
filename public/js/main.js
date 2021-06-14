clik=()=>{
	$("#burger").classList.toggle("change");
	$('ul').classList.toggle("cool")
	let lis = $('.links li','')
	i=0.5
	lis.forEach(li=>{
		li.style.opacity=1
	})
}
i=0

Onclick=()=>{
	if(i%2==0){
		$('.user-ui').innerHTML=html
	}
	else{
		$('.user-ui').innerHTML=''
	}
	i+=1
}

test=()=>{
    $('body > form > table > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=email]').value='dsb@bhf.com'
    $('body > form > table > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=password]').value='dsb'
    $('body > form > table > tbody > tr:nth-child(3) > td > button').click()
}
