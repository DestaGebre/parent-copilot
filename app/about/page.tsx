export default function AboutPage() {
  return (
    <div className="flex justify-center p-6 md:p-12">
      <div className="max-w-2xl bg-white rounded-2xl shadow-sm border p-8 md:p-12 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Our Philosophy</h1>
        <p className="text-gray-700 leading-relaxed">
          Parenting is perhaps the most complex journey a human can undertake. In moments of stress or uncertainty, it is easy to lose sight of the "virtue" we wish to model for our children. 
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Parenting Virtue</strong> was created as a digital companion—not to replace a parent’s intuition, but to provide a calm, objective second perspective when it is needed most.
        </p>
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Our Approach</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">01.</span>
              <p className="text-gray-600"><span className="text-gray-900 font-medium">Emotional Intelligence:</span> We prioritize scripts and suggestions that validate the child's feelings while maintaining clear boundaries.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">02.</span>
              <p className="text-gray-600"><span className="text-gray-900 font-medium">Clarity Over Judgement:</span> Our AI-powered guidance is designed to be neutral, providing a "copilot" experience for parents in the heat of the moment.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">03.</span>
              <p className="text-gray-600"><span className="text-gray-900 font-medium">Privacy by Default:</span> We believe parenting challenges are deeply personal. We don't store your stories; we only help you navigate them.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}