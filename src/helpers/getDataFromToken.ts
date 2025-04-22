// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";





// export const getDataFromToken=(request:NextRequest)=>{
//     try{
//         const token=request.cookies.get("token")?.
//         value || '';
//        const decodedToken= jwt.verify(token,process.env.TOKEN_SECRET!);

// return decodedToken.slug;

//     }catch(error:any){
//         throw new Error(error.message)
//     }
// }

import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

// Define what you expect inside your token
interface TokenData extends JwtPayload {
  slug: string;
  // you can add more fields here if needed
}

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || '';
    if (!token) {
      throw new Error('Token not found');
    }

    // Use jwt.verify and cast the result to TokenData (which extends JwtPayload)
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as TokenData;

    return decodedToken.slug;

  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Something went wrong while verifying token');
  }
}
