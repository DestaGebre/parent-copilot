export default function PrivacyPage() {
  return (
    <div className="flex justify-center bg-background min-h-screen p-6 md:p-12">
      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-16 space-y-10 self-start">
        
        {/* HEADER */}
        <div className="space-y-3">
          <h1 className="text-4xl font-serif font-bold text-wisdom">Privacy & Trust</h1>
          <div className="h-1 w-12 bg-virtue rounded-full"></div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stable/50 font-bold pt-2">
            Effective Date: January 2026
          </p>
        </div>

        <p className="text-stable text-sm leading-relaxed italic">
          At Parenting Virtue, we believe that your family’s challenges are sacred and private. 
          Our privacy model is designed to provide you with a helpful history of your parenting 
          growth while ensuring your data remains under your control.
        </p>

        <div className="space-y-10">
          {/* SECTION 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-wisdom flex items-center gap-3">
              <span className="text-virtue italic text-base">01.</span> User Accounts & History
            </h2>
            <p className="text-stable text-sm leading-relaxed">
              To provide a personalized experience, we store your past "Copilot" requests and 
              AI-generated guidance within your secure account session. This allows you to 
              track your progress, revisit successful scripts, and see patterns in your 
              parenting journey over time.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-wisdom flex items-center gap-3">
              <span className="text-virtue italic text-base">02.</span> AI Data Usage
            </h2>
            <p className="text-stable text-sm leading-relaxed">
              When you submit a description of a situation, it is processed via secure API 
              to generate guidance. <strong>We do not sell your situation data to third-party 
              advertisers</strong>, nor do we use the specifics of your family life to train 
              publicly available AI models. Your data is used strictly to serve you.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-wisdom flex items-center gap-3">
              <span className="text-virtue italic text-base">03.</span> Security & Encryption
            </h2>
            <p className="text-stable text-sm leading-relaxed">
              All session data is encrypted at rest and in transit. We use industry-standard 
              authentication providers (Supabase Auth) to ensure that only you have access 
              to your request history.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-wisdom flex items-center gap-3">
              <span className="text-virtue italic text-base">04.</span> Data Portability & Deletion
            </h2>
            <p className="text-stable text-sm leading-relaxed">
              You own your data. At any time, you may request a export of your history or 
              choose to permanently delete your account and all associated parenting logs 
              from our primary database.
            </p>
          </section>
        </div>

        {/* COMPACT FOOTER BOX */}
        <div className="mt-12 pt-8 border-t border-gray-50">
          <div className="bg-background p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-wisdom uppercase tracking-widest mb-1">Privacy Inquiries</p>
              <p className="text-sm text-stable">Questions about your family data?</p>
            </div>
            <a 
              href="mailto:privacy@parentingvirtue.com" 
              className="inline-block bg-wisdom text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-900 transition-all text-center"
            >
              Email Privacy Team
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}