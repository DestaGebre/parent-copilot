"use client";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Contact Form Data:", data);
    alert("Thank you! Your message has been sent to the Parenting Virtue team.");
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 md:p-12 lg:p-16">
      
      {/* 1. TEXT SECTION */}
      <div className="max-w-2xl w-full text-center mb-10 space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Let’s Connect
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Have a question about the Parent Copilot, an opinion on our guidance, 
          or a suggestion for a new feature? We’d love to hear from you.
        </p>
      </div>

      {/* 2. DIRECT EMAIL BOX */}
      <div className="max-w-2xl w-full mb-12">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-blue-900 font-bold text-xl">Send us an email</h3>
            <p className="text-blue-700/70 text-sm">For direct inquiries and long-form feedback</p>
          </div>
          <a 
            href="mailto:hello@parentingvirtue.com" 
            className="group flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>hello@parentingvirtue.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* 3. CONTACT FORM CARD */}
      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 border border-gray-100 p-8 md:p-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Or use the contact form below</h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full mt-2"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <input 
                {...register("name")} 
                required 
                className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all" 
                placeholder="Jane Smith" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <input 
                {...register("email")} 
                type="email" 
                required 
                className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all" 
                placeholder="jane@example.com" 
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Topic</label>
            <input 
              {...register("topic")} 
              required 
              className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all" 
              placeholder="What can we help you with?" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
            <textarea 
              {...register("message")} 
              required 
              className="w-full bg-gray-50 border border-gray-100 p-5 h-44 rounded-3xl focus:ring-2 focus:ring-blue-400 focus:bg-white outline-none transition-all resize-none" 
              placeholder="Tell us more..." 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-800 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
          >
            Submit Message
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed">
          By contacting us, you agree to our <a href="/privacy" className="underline hover:text-blue-600">Privacy Policy</a>. 
          We typically respond within 2 business days.
        </p>
      </div>
    </div>
  );
}