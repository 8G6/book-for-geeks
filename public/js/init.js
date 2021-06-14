
let html='<a href="/login">Login</a><br>'
html+='<a href="/register">Register</a></li><br>'

Onclick=()=>{
	if(i%2==0){
		$('.user-ui').innerHTML=html
	}
	else{
		$('.user-ui').innerHTML=''
	}
	i+=1
}