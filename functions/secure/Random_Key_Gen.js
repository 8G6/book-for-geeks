let done=[];
let Ind=(a)=>Math.floor(Math.random() * a.length)
let random=(a,e=0)=>{
    let r=a[Ind(a)]
    if(e==1){
        return r
    }
    else{
        if(done.indexOf(r)==-1){
        done.push(r)
        return r
        }
        else{
            let k=a[Ind(a)]
            done.push(k)
            return k
        }
    }

}
let keys=['abcdefghijklmnopqrstuvwxyz','!#$%^&*()_+<>?:`+-/*[]{},.','012301345678923456756789456789','ABCDEFGHIJKLMNOPQRSTUVWXYZ']
let rand=[]
for(i=0;i<keys.length;i++){
    rand.push(random(keys))
}
rand=rand.join('')
final=[]
done=[]
for(i=0;i<rand.length;i++){
    index=Ind(rand)
    if(index>10){break}
}
for(i=0;i<rand.length;i++){
    final.push(random(rand))
}
done=[]
result=[]
for(i=0;i<=index;i++){
    result.push(random(rand))
}

module.exports = result.join('')