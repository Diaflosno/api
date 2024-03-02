import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop() || '';
        const isOk = verifyToken(jwt)
        if(!isOk){
            res.status(401)
            res.send("NO_TIENES_UN_JTW_VALIDO");
        }else {
            console.log({ jwtByUser })
            next();

        }
    }catch(e){
        console.log({ e })
        res.status(402)
        res.send("SESSION_NO_VALIDAD");
    }


}

export { checkJwt };