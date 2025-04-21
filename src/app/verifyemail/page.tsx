"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      verifyEmail(token);
    } else {
      toast.error("No token found in URL");
      router.push("/login");
    }
  }, []);

  const verifyEmail = async (token: string) => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });

      if (response.data.success) {
        toast.success("Email verified! Redirecting...");
        setTimeout(() => {
          router.push("/login");
        }, 2000); // Wait 2 seconds before redirect
      } else {
        toast.error("Verification failed");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong");
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-semibold">Verifying your email...</p>
        </div>
      ) : (
        <p className="text-lg">Please wait...</p>
      )}
    </div>
  );
};

export default VerifyEmailPage;
