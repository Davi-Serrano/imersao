import { NextApiRequest, NextApiResponse } from "next"; 
import { UserDatasProps } from "../../types/types";
import { fauna } from "../../services/faunadb"
import { query as q } from "faunadb"


export default async(req: NextApiRequest, res: NextApiResponse)=>{
    if (req.method === "POST"){

        const user : UserDatasProps = req.body;
        const { name,  email, confirmEmail, tel } = user

        if(email !== confirmEmail){
            return res.send(300)
        }

        if( name.length  < 5 || email.length  < 4 || tel.length  < 10  ){
          return res.send(300)
        }
        
        try{
            await fauna.query(
                  q.Create(
                    q.Collection("users"),
                      { data:  user }
                  )                 
            ); 

            res.send(200)
          return true
        }catch{
          return false
        }
        
    }


}