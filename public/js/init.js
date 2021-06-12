$=(a,mode=1)=>{return mode==1 ? document.querySelector(a) : document.querySelectorAll(a)}
function filt(a,b){
    c='';
    try{
        a=a.split(b)[1];
        a=a.split(' ')[0]
        c=''
        for(i=1;i<a.length;i++){
            if(a[i]==">"){
                break
            }
            c+=a[i]
        }
    }
    catch(e){console.log(e)}
    return c.replaceAll('"','')
}
function load(){
src  = $('[src]',2)
href = $('[href]',2)
let url=window.location.origin
href.forEach((n)=>{n.href=url+'/'+filt(n.outerHTML,'href')})
src.forEach((n)=>{n.src=url+'/'+filt(n.outerHTML,'src')})
console.log(src,href)
}
check=()=>{
    if(window.location.href.split('/').length>4){
        load()
    }
    console.log('check complete')
}
