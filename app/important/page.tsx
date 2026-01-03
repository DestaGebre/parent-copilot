export default function ImportantPage() {
  return (
    <div className="flex justify-center p-6 md:p-12">
      <div className="max-w-2xl bg-white rounded-2xl shadow-sm border p-8 md:p-12 space-y-6 border-l-4 border-l-amber-400">
        <h1 className="text-3xl font-bold text-gray-900">Medical Disclaimer</h1>
        
        <p className="text-gray-700 font-medium">
          Please read this carefully before using the Parent Copilot.
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Parenting Virtue is an <strong>educational resource</strong>. The AI-generated suggestions, scripts, and guidance are for informational purposes only and do not constitute professional medical, psychological, or legal advice.
          </p>
          
          <p>
            Every child and family dynamic is unique. AI models may occasionally provide guidance that is not suitable for your specific context. Always use your best judgment.
          </p>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="text-red-800 font-bold mb-2 uppercase text-xs tracking-wider">Urgent Situations</h3>
            <p className="text-red-700 text-sm">
              If you or a child are in immediate danger, or if you are experiencing a mental health crisis, do not use this tool. Please contact your local emergency services (such as 911 or 999) or a professional crisis hotline immediately.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            By using this site, you agree that Parenting Virtue is not liable for any actions taken based on the information provided.
          </p>
        </div>
      </div>
    </div>
  );
}