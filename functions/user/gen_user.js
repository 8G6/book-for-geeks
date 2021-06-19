gen=(req)=>{
    if(req.user!=undefined){
        return  [`<form action="/logout?_bye=DELETE" method="POST">
                    ${req.user.name} | 
                    <button type="submit">
                        Logout
                    </button>
                </form>`,req.user.name]
   } 
   else{
       return ['','']
   }
     
}
module.exports = gen