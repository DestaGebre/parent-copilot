export default function ImportantPage() {
  return (
    <div className="flex justify-center bg-background min-h-screen p-6 md:p-12">
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 self-start border-l-8 border-l-virtue">
        
        {/* HEADER */}
        <div className="space-y-2">
          <h1 className="text-3xl font-serif font-bold text-wisdom">Medical Disclaimer</h1>
          <p className="text-stable font-medium text-sm">
            Please read this carefully before using the Parent Copilot.
          </p>
        </div>

        <div className="space-y-6 text-stable text-sm leading-relaxed">
          <p>
            Parenting Virtue is an <strong className="text-wisdom">educational resource</strong>. 
            The AI-generated suggestions, scripts, and guidance are for informational 
            purposes only and do not constitute professional medical, psychological, 
            or legal advice.
          </p>
          
          <p>
            Every child and family dynamic is unique. AI models may occasionally provide 
            guidance that is not suitable for your specific context. We provide a 
            "second perspective," but you should always rely on your intuition and 
            professional consultation for serious matters.
          </p>

          {/* URGENT SITUATIONS BOX */}
          <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold text-lg">⚠️</span>
              <h3 className="text-red-800 font-bold uppercase text-[10px] tracking-[0.2em]">
                Urgent Situations
              </h3>
            </div>
            <p className="text-red-900/80 text-xs md:text-sm leading-relaxed">
              If you or a child are in immediate danger, or if you are experiencing 
              a mental health crisis, <strong className="text-red-700">do not use this tool</strong>. 
              Please contact your local emergency services (such as 911 or 999) or 
              a professional crisis hotline immediately.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-50">
            <p className="text-[11px] text-stable/50 italic leading-relaxed">
              By using this site, you acknowledge and agree that Parenting Virtue 
              is not liable for any actions taken based on the information provided 
              by the AI Copilot. You are responsible for the safety and well-being 
              of your family.
            </p>
          </div>
        </div>

        {/* BACK TO TOOL BUTTON */}
        <div className="pt-4 text-center">
          <a 
            href="/" 
            className="text-wisdom text-xs font-bold underline decoration-virtue underline-offset-8 hover:opacity-70 transition-opacity"
          >
            I understand, take me to the Copilot
          </a>
        </div>

      </div>
    </div>
  );
}