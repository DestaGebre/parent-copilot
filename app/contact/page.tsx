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
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-xl shadow-wisdom/5 border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT SIDE: BRANDING & DIRECT CONTACT */}
        <div className="md:w-1/3 bg-wisdom p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-4">Get in Touch</h1>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-8 font-sans">
              Have a question about the Parent Copilot or a suggestion for a new virtue? We'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-virtue font-bold mb-1">Email us directly</p>
                <a href="mailto:hello@parentingvirtue.com" className="text-sm font-medium hover:text-virtue transition-colors break-all">
                  hello@parentingvirtue.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-virtue font-bold mb-1">Response Time</p>
                <p className="text-sm opacity-80">Within 48 business hours</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block pt-12">
            <div className="h-px w-12 bg-virtue/50 mb-4"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
              Parenting Virtue
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div className="md:w-2/3 p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stable ml-1">Full Name</label>
                <input 
                  {...register("name")} 
                  required 
                  className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl focus:ring-2 focus:ring-wisdom focus:bg-white outline-none transition-all text-sm" 
                  placeholder="Jane Smith" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-stable ml-1">Email Address</label>
                <input 
                  {...register("email")} 
                  type="email" 
                  required 
                  className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl focus:ring-2 focus:ring-wisdom focus:bg-white outline-none transition-all text-sm" 
                  placeholder="jane@example.com" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stable ml-1">Topic</label>
              <input 
                {...register("topic")} 
                required 
                className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl focus:ring-2 focus:ring-wisdom focus:bg-white outline-none transition-all text-sm" 
                placeholder="How can we help?" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-stable ml-1">Message</label>
              <textarea 
                {...register("message")} 
                required 
                className="w-full bg-gray-50 border border-gray-100 p-4 h-32 rounded-2xl focus:ring-2 focus:ring-wisdom focus:bg-white outline-none transition-all resize-none text-sm" 
                placeholder="Your message here..." 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-wisdom text-white py-4 rounded-xl font-bold text-sm hover:bg-slate-900 transition-all shadow-md active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>

          <p className="mt-6 text-center text-[10px] text-gray-400">
            By contacting us, you agree to our <a href="/privacy" className="underline hover:text-wisdom">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </div>
  );
}