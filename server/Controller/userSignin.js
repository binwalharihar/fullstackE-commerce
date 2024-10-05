async function userSignupController(req,res){
    try{
        const {email,username,password} = req.body
        if(!email || !username || !password){
            return res.status(400).json({message:'All fields are required',success:false,error:true});
        }
    }catch(e){
        console.error(e);
        res.status(500).json({message:e.message,success:false,error:true});
    }
}