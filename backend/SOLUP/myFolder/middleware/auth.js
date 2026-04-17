import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

const auth = (req,res,next)=>{
 const token = req.headers.authorization;

 if(!token){
  return res.status(401).json({message:"No token"});
 }

 const decoded = jwt.verify(token, JWT_SECRET);

 req.user = decoded;

 next();
}

export default auth;
