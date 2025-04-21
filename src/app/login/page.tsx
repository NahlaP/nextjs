
'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

  const router=useRouter();
    const[user,setUser]=React.useState({
        email:"",
        password:"",
   
    })
const[buttonDisabled,setButtonDisabled]=React.useState(false);

const[loading,setLoading]=React.useState(false);


const onLogin=async()=>{
  try {
    setLoading(true);
    const response = await axios.post("/api/users/login",user);
    console.log("Login success",response.data);
    toast.success("Login success");
    router.push("/profile");
    
  } catch (error:any) {
    console.log("Login Failed",error.message);
    toast.error(error.message);
    
  }finally{
    setLoading(false);
  }

}
useEffect(()=>{
if(user.email.length>0 && user.password.length >0){
  setButtonDisabled(false);
}else{
  setButtonDisabled(true);
}
},[user])


return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{loading ? "processing" : "login"}</h1>
      <hr className="w-full max-w-md mb-6" />
  
   
      <div className="flex flex-col w-full max-w-md space-y-4">
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
    onClick={onLogin}
    className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg mt-6 mb-10 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100"
  >
  Login
  </button>

</div>
<div className="flex justify-center">
  <p className="text-sm mb-6 ">
    Dont have an account?{" "}
    <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
       Signup
    </Link>
  </p>
</div>

        </div>
      </div>
      </div>
    
  );
  
  

}

