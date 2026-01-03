"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Login attempt:", data);
    alert("Login UI is ready! Database connection coming soon.");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 py-12 lg:py-20">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 p-10">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to access your saved guidance.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
            <input 
              {...register("email")} 
              type="email" 
              required 
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all" 
              placeholder="alex@example.com" 
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
              <Link href="#" className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-tighter">Forgot Password?</Link>
            </div>
            <input 
              {...register("password")} 
              type="password" 
              required 
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all" 
              placeholder="••••••••" 
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-blue-800 text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <p className="text-gray-500 text-sm">
            New to Parenting Virtue?{" "}
            <Link href="/register" className="text-blue-700 font-bold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}