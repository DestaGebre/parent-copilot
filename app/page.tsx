"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  childAge: string;
  categories: string[];
  goal: string;
  description: string;
};

export default function Home() {
  const { register, handleSubmit, watch, setValue, reset } = useForm<FormData>({
    defaultValues: { categories: [] }
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // Form State Watchers
  const selectedAge = watch("childAge");
  const selectedCategories = watch("categories") || [];
  const selectedGoal = watch("goal");

  const toggleCategory = (val: string) => {
    const current = [...selectedCategories];
    const index = current.indexOf(val);
    index > -1 ? current.splice(index, 1) : current.push(val);
    setValue("categories", current);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/parent-guidance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      setResult(json);
      setShowForm(false);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const Tooltip = ({ text }: { text: string }) => (
    <div className="group relative ml-auto">
      <div className="w-5 h-5 rounded flex items-center justify-center bg-gray-100 text-gray-400 text-[10px] font-bold cursor-help hover:bg-virtue hover:text-white transition-colors">?</div>
      <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all z-10">
        <p className="text-[11px] leading-relaxed text-stable/80 font-medium normal-case">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-xl mx-auto">
        
        <div className="bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] overflow-hidden">
          
          {/* Header */}
          <div className="bg-wisdom p-8 text-white text-center">
            <h2 className="text-2xl font-serif font-bold italic">Parent Copilot</h2>
            <p className="text-blue-100/60 text-[11px] mt-1 uppercase tracking-widest font-medium">
              {result ? "Your Personalized Guidance" : "Virtual guidance for real-world parenting moments."}
            </p>
          </div>

          {showForm ? (
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              
              {/* 1. Age Range */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <label className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedAge ? "text-virtue" : "text-wisdom"}`}>01. Child's Age</label>
                  <Tooltip text="Knowing the age helps us tailor the developmental approach." />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {["0-2", "3-5", "6-9", "10-13", "14+"].map((age) => (
                    <button key={age} type="button" onClick={() => setValue("childAge", age)}
                      className={`py-2.5 rounded-xl text-[11px] font-bold border-2 transition-all ${selectedAge === age ? "border-virtue bg-virtue/[0.02] text-wisdom shadow-sm ring-1 ring-virtue/20" : "border-gray-100 bg-white text-gray-400 hover:border-gray-200"}`}>
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Situation Type */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <label className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedCategories.length > 0 ? "text-virtue" : "text-wisdom"}`}>02. Situation Type</label>
                  <Tooltip text="Select multiple if the situation involves both feelings and behaviors." />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "behavior", label: "Behavior", icon: "🔨" },
                    { id: "emotion", label: "Emotion", icon: "❤️" },
                    { id: "routine", label: "Routine", icon: "⏰" },
                    { id: "social", label: "Social", icon: "🏫" },
                  ].map((cat) => (
                    <button key={cat.id} type="button" onClick={() => toggleCategory(cat.id)}
                      className={`flex items-center gap-2.5 p-2 rounded-xl border-2 transition-all text-left ${selectedCategories.includes(cat.id) ? "border-virtue bg-virtue/[0.02] ring-1 ring-virtue/20 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`}>
                      <span className={`text-base ${selectedCategories.includes(cat.id) ? "" : "grayscale opacity-50"}`}>{cat.icon}</span>
                      <span className={`text-[11px] font-bold ${selectedCategories.includes(cat.id) ? "text-wisdom" : "text-gray-400"}`}>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Priority Goal */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <label className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedGoal ? "text-virtue" : "text-wisdom"}`}>03. Priority Goal</label>
                  <Tooltip text="This determines the focus of the advice we generate." />
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: "calm", label: "Restore Immediate Calm", icon: "🌊" },
                    { id: "connection", label: "Deepen Connection", icon: "🤝" },
                    { id: "teaching", label: "Teach a Virtue", icon: "📖" },
                  ].map((goal) => (
                    <button key={goal.id} type="button" onClick={() => setValue("goal", goal.id)}
                      className={`w-full flex items-center justify-between p-2.5 px-4 rounded-xl border-2 transition-all ${selectedGoal === goal.id ? "border-virtue bg-virtue/[0.02] shadow-sm ring-1 ring-virtue/20" : "border-gray-100 bg-white hover:border-gray-200 shadow-inner"}`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-base ${selectedGoal === goal.id ? "" : "grayscale opacity-50"}`}>{goal.icon}</span>
                        <span className={`text-[11px] font-bold ${selectedGoal === goal.id ? "text-wisdom" : "text-gray-500"}`}>{goal.label}</span>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${selectedGoal === goal.id ? "border-virtue bg-virtue" : "border-gray-200"}`}>
                        {selectedGoal === goal.id && <div className="w-1 h-1 bg-white rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Description */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <label className="text-[11px] font-bold text-wisdom uppercase tracking-wider">04. Situation Details</label>
                  <Tooltip text="Be as descriptive as possible for accurate advice." />
                </div>
                <textarea {...register("description")} placeholder="What exactly happened?" className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl text-xs font-medium focus:bg-white focus:border-virtue/40 transition-all outline-none resize-none placeholder:text-gray-300 shadow-inner" />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-wisdom text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-slate-900 active:scale-[0.98] transition-all disabled:opacity-50">
                {loading ? "Analyzing Situation..." : "Generate Guidance"}
              </button>
            </form>
          ) : (
            /* Result View */
            <div className="p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Summary */}
              <div className="bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl">
                <label className="text-[10px] font-black text-wisdom/40 uppercase tracking-widest block mb-2 text-center">Summary</label>
                <p className="text-sm font-medium text-wisdom leading-relaxed whitespace-pre-line">{result.guidance.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Suggestions List */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-virtue uppercase tracking-widest">Recommended Steps</label>
                  <ul className="space-y-2">
                    {result.guidance.suggestions.map((s: string, i: number) => (
                      <li key={i} className="flex gap-2 text-[11px] font-bold text-wisdom bg-green-50/50 p-2.5 rounded-xl border border-green-100">
                        <span className="text-green-500">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Avoid */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-red-400 uppercase tracking-widest">What to Avoid</label>
                  <ul className="space-y-2">
                    {result.guidance.whatToAvoid.map((v: string, i: number) => (
                      <li key={i} className="flex gap-2 text-[11px] font-bold text-gray-500 bg-red-50/50 p-2.5 rounded-xl border border-red-100">
                        <span className="text-red-400">✕</span> {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Example Script */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-wisdom/40 uppercase tracking-widest text-center block">Example Response Script</label>
                <div className="bg-wisdom text-white p-6 rounded-2xl italic font-serif text-sm leading-relaxed relative text-center">
                   "{result.guidance.exampleScript}"
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button onClick={() => { setShowForm(true); setResult(null); reset(); }} 
                  className="w-full border-2 border-gray-100 text-gray-400 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-all">
                  Submit New Situation
                </button>
                <p className="text-[9px] text-center text-gray-400 italic">{result.disclaimer}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}