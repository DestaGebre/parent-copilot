export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* --- HERO SECTION --- */}
      <section className="w-full bg-wisdom text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Nurturing Virtue in the <br />
            <span className="text-virtue italic">Modern Home</span>
          </h1>
          <p className="text-blue-100/80 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            Parenting Virtue is a digital companion designed to provide a calm, 
            objective perspective when the journey gets complex.
          </p>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="max-w-4xl w-full py-16 px-6 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-wisdom">Our Philosophy</h2>
            <p className="text-stable leading-relaxed">
              Parenting is the most complex journey a human can undertake. In moments of stress, it is easy to lose sight of the virtues we wish to model.
            </p>
            <p className="text-stable leading-relaxed font-medium italic">
              "We don't replace intuition; we protect it from the noise of the moment."
            </p>
          </div>
          <div className="bg-virtue/10 p-8 rounded-[2rem] border border-virtue/20">
            <p className="text-wisdom font-sans leading-relaxed">
              We created the <strong>Parent Copilot</strong> as a bridge between the heat of a challenging moment and the thoughtful parent you strive to be. 
            </p>
          </div>
        </div>
      </section>

      {/* --- APPROACH GRID --- */}
      <section className="w-full bg-white py-20 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-wisdom">Our Approach</h2>
            <div className="h-1 w-12 bg-virtue mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-50 hover:shadow-lg transition-shadow">
              <span className="text-virtue font-serif text-4xl block mb-4">01.</span>
              <h3 className="text-xl font-bold text-wisdom mb-3 font-sans">Emotional Intelligence</h3>
              <p className="text-sm text-stable leading-relaxed">
                We prioritize scripts that validate a child's feelings while maintaining the clear boundaries necessary for growth.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-50 hover:shadow-lg transition-shadow">
              <span className="text-virtue font-serif text-4xl block mb-4">02.</span>
              <h3 className="text-xl font-bold text-wisdom mb-3 font-sans">Clarity Over Judgment</h3>
              <p className="text-sm text-stable leading-relaxed">
                Our AI is designed to be a neutral "copilot," providing objective guidance in high-pressure parenting moments.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-lg transition-shadow">
              <span className="text-virtue font-serif text-4xl block mb-4">03.</span>
              <h3 className="text-xl font-bold text-wisdom mb-3 font-sans">Privacy by Default</h3>
              <p className="text-sm text-stable leading-relaxed">
                Parenting challenges are personal. We prioritize anonymous interactions so you can seek help with total peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 text-center px-6">
        <h2 className="text-2xl font-serif text-wisdom mb-6">Ready to parent with more clarity?</h2>
        <a 
          href="/" 
          className="inline-block bg-wisdom text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl active:scale-95"
        >
          Try the Parent Copilot
        </a>
      </section>
    </div>
  );
}