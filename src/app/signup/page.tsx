'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router=useRouter();
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })

    const[buttonDisabled,setButtonDisabled]=useState(false);

    const [loading,setLoading]= React.useState(false);


const onSignup=async()=>{
  try{
    setLoading(true);
    const response=await axios.post("/api/users/signup",user);
    console.log("signup success",response.data);
    router.push("/login");

//   }catch(error:any){
//     console.log("signup failed",error.message);
    
// toast.error(error.message);
//   }finally{
//     setLoading(false);
//   }

// }

} catch (error) {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.error || "Signup failed");
    console.error("Signup failed", error.message);
  } else {
    toast.error("Something went wrong");
    console.error(error);
  }
} finally {
  setLoading(false);
}
};


useEffect(()=>{
if(user.email.length>0 && user.password.length>
  0 && user.username.length>0){
setButtonDisabled(false);
  }else{
    setButtonDisabled(true);
  }

},[user]);

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{loading ? "processing" : "signup"}</h1>
      <hr className="w-full max-w-md mb-6" />
  
      <div className="flex flex-col w-full max-w-md space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-black font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="email" className="text-black font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="password" className="text-black font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
   

<div className="flex justify-center">
  <button
    onClick={onSignup}
    className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg mt-6 mb-10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
  >
    {buttonDisabled ? "No signup" : "Sign up"} 
  </button>

</div>
<div className="flex justify-center">
  <p className="text-sm mb-6 ">
    Already have an account?{" "}
    <Link href="/login" className="text-blue-600 hover:underline font-semibold">
       Login
    </Link>
  </p>
</div>

        </div>
      </div>
    </div>
  );
  
  

}

