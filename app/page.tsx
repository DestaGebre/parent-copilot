"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  childAge: string;
  situationType: string;
  goal: string;
  description: string;
};

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // All cards expanded by default
  const [collapsed, setCollapsed] = useState({
    summary: false,
    suggestions: false,
    whatToAvoid: false,
    exampleScript: false,
  });

  const toggleCollapse = (section: keyof typeof collapsed) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
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

      // Merge current situation into summary
      const situationSummary = `Child Age: ${data.childAge}\nSituation: ${data.situationType}\nGoal: ${data.goal}\nDescription: ${data.description}`;
      json.guidance.summary = `${situationSummary}\n\n${json.guidance.summary}`;

      setResult(json);
      setShowForm(false);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `
Summary:
${result.guidance.summary}

Suggestions:
${result.guidance.suggestions.map((s: string) => "- " + s).join("\n")}

What to Avoid:
${result.guidance.whatToAvoid.map((s: string) => "- " + s).join("\n")}

Example Script:
${result.guidance.exampleScript}

Disclaimer:
${result.disclaimer}
    `;
    navigator.clipboard.writeText(text);
    alert("Guidance copied to clipboard!");
  };

  const downloadGuidance = () => {
    if (!result) return;
    const text = `
Parent Copilot Guidance

Summary:
${result.guidance.summary}

Suggestions:
${result.guidance.suggestions.map((s: string) => "- " + s).join("\n")}

What to Avoid:
${result.guidance.whatToAvoid.map((s: string) => "- " + s).join("\n")}

Example Script:
${result.guidance.exampleScript}

Disclaimer:
${result.disclaimer}
    `;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "parent-copilot-guidance.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderCollapseButton = (section: keyof typeof collapsed, color: string) => (
    <span
      className={`ml-auto cursor-pointer font-bold transition-transform duration-200 transform ${
        collapsed[section] ? "rotate-180" : "rotate-0"
      } ${color} hover:scale-110`}
      onClick={() => toggleCollapse(section)}
    >
      ▼
    </span>
  );

  const collapseClass = (section: keyof typeof collapsed) =>
    `overflow-hidden transition-all duration-300 ${collapsed[section] ? "max-h-0" : "max-h-[1000px] mt-2"}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mt-6">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Parent Copilot</h1>
        <p className="text-center text-gray-600 mb-6">
          {result
            ? "Here’s your personalized guidance based on your submitted situation."
            : "Describe your situation and get AI-powered parenting guidance."}
        </p>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <select {...register("childAge")} className="w-full border p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400">
                <option value="">Child age</option>
                <option value="0-2">0–2</option>
                <option value="3-5">3–5</option>
                <option value="6-9">6–9</option>
                <option value="10-13">10–13</option>
                <option value="14+">14+</option>
              </select>

              <select {...register("situationType")} className="w-full border p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400">
                <option value="">Situation</option>
                <option value="behavior">Behavior</option>
                <option value="routine">Routine</option>
                <option value="emotion">Emotion</option>
                <option value="school">School</option>
              </select>

              <select {...register("goal")} className="w-full border p-2 rounded shadow-sm focus:ring-2 focus:ring-blue-400">
                <option value="">Goal</option>
                <option value="calm">Calm</option>
                <option value="discipline">Discipline</option>
                <option value="communication">Communication</option>
                <option value="confidence">Confidence</option>
              </select>

              <textarea
                {...register("description")}
                className="w-full border p-2 h-28 rounded shadow-sm focus:ring-2 focus:ring-blue-400"
                placeholder="Describe the situation"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Thinking…" : "Get Guidance"}
            </button>
          </form>
        )}

        {/* AI Guidance */}
        {result?.guidance && (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">Guidance</h2>

            {/* Summary Card */}
            {result.guidance.summary && (
              <div className="p-4 bg-gray-100 rounded shadow-sm hover:shadow-md transform transition duration-150 ease-in-out">
                <div className="flex items-center">
                  <span>📝</span>
                  <span className="ml-2 font-semibold">Summary</span>
                  {renderCollapseButton("summary", "text-gray-700")}
                </div>
                <div className={collapseClass("summary")}>
                  <p className="whitespace-pre-line">{result.guidance.summary}</p>
                </div>
              </div>
            )}

            {/* Suggestions Card */}
            {result.guidance.suggestions?.length > 0 && (
              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded shadow-sm hover:shadow-md transform transition duration-150 ease-in-out">
                <div className="flex items-center">
                  <span>✅</span>
                  <span className="ml-2 font-semibold text-green-700">Suggestions</span>
                  {renderCollapseButton("suggestions", "text-green-700")}
                </div>
                <div className={collapseClass("suggestions")}>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    {result.guidance.suggestions.map((s: string, i: number) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* What to Avoid Card */}
            {result.guidance.whatToAvoid?.length > 0 && (
              <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded shadow-sm hover:shadow-md transform transition duration-150 ease-in-out">
                <div className="flex items-center">
                  <span>⚠️</span>
                  <span className="ml-2 font-semibold text-red-700">What to Avoid</span>
                  {renderCollapseButton("whatToAvoid", "text-red-700")}
                </div>
                <div className={collapseClass("whatToAvoid")}>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    {result.guidance.whatToAvoid.map((s: string, i: number) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Example Script Card */}
            {result.guidance.exampleScript && (
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded shadow-sm hover:shadow-md transform transition duration-150 ease-in-out">
                <div className="flex items-center">
                  <span>💬</span>
                  <span className="ml-2 font-semibold text-blue-700">Example Script</span>
                  {renderCollapseButton("exampleScript", "text-blue-700")}
                </div>
                <div className={collapseClass("exampleScript")}>
                  <p className="mt-2 whitespace-pre-line">{result.guidance.exampleScript}</p>
                </div>
              </div>
            )}

            {/* Save / Copy Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              >
                Copy Guidance
              </button>
              <button
                onClick={downloadGuidance}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
              >
                Download as TXT
              </button>
            </div>

            {/* Add Another Situation at bottom */}
            <button
              className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
              onClick={() => {
                setShowForm(true);
                reset();
                setResult(null);
              }}
            >
              Submit Another Situation
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-2">{result.disclaimer}</p>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-6 text-center">
          This tool does not replace professional medical or psychological advice.
        </p>
      </div>
    </main>
  );
}