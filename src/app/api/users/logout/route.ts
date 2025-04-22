import { NextResponse } from "next/server";



export async function GET() {
    try {

        const response=NextResponse.json({
            message:"Logout successful",
            success:true,
        })
        response.cookies.set("token","",{httpOnly:true,
            expires:new Date(0)
        });

        return response;
        
    // } catch (error:any) {
    //     return NextResponse.json({error:error.message},{status:500});
    // }
} catch (error: unknown) {
    let errorMessage = "Something went wrong";
  
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
  
}