export default function PrivacyPage() {
  return (
    <div className="flex justify-center p-6 md:p-12">
      <div className="max-w-2xl bg-white rounded-2xl shadow-sm border p-8 md:p-12 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Privacy & Trust</h1>
        <p className="text-gray-600">Last Updated: January 2026</p>
        
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">1. Data Minimalism</h2>
          <p className="text-gray-700 leading-relaxed">
            We operate on a "zero-knowledge" principle. Parenting Virtue does not require an account, does not use cookies for tracking, and does not store the descriptions you provide in the Copilot tool.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">2. AI Processing</h2>
          <p className="text-gray-700 leading-relaxed">
            When you submit a situation, the text is processed via secure API to generate guidance. This data is used only for that specific request and is not used to "train" models or build a profile of your family.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">3. Third Parties</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent any information to third parties. Our business model is based on providing value, not harvesting data.
          </p>
        </section>

        <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800">
          For any privacy-related inquiries, please contact our data team at <strong>privacy@parentingvirtue.com</strong>.
        </div>
      </div>
    </div>
  );
}