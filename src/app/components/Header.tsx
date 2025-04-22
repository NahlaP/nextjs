
"use client"
import axios from "axios";
import {toast} from "react-hot-toast";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from 'next/image';
import Link from "next/link";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";



const Header = () => {
  const isLoggedIn = false; 
  const router=useRouter()
  const logout=async () =>{
try {
await axios.get('/api/users/logout')
toast.success('Logout successful')  
router.push('/')
// } catch (error:any) {
//   console.log(error.message);
//   toast.error(error.message)
  
  
// }
} catch (error: unknown) {  // Change 'any' to 'unknown'
  if (error instanceof Error) {
    console.log(error.message);  // Access error message safely
    toast.error(error.message);  // Show error message in the toast
  } else {
    console.log("An unknown error occurred");
    toast.error("An unknown error occurred");  // Handle unknown errors
  }
}

  }
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-gray- shadow-md">
  
  <div className="flex items-center gap-2">
  <Image
    src="/images/logo.svg"   
    alt="Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  
  <div className="text-2xl font-bold text-gray-800">
    store
  </div>
  
</div>


  
      <div className="flex items-center space-x-6 text-l text-gray-700">
      <button
      onClick={logout}
      className="bg-gray-400 hover:bg-gray-700 text-black py-2 px-4 text-sm rounded-md">
            Logout
          </button>
      <Link href="/login">
        <BiUser className="cursor-pointer hover:text-blue-600 transition duration-300" /></Link>

        <FiHeart className="cursor-pointer hover:text-red-500 transition duration-300" />
        <HiOutlineShoppingBag className="cursor-pointer hover:text-green-500 transition duration-300" />
        {isLoggedIn && ( 
    <Navbar/>
  )}
      </div>
      
    </header>
  );
};

export default Header;


