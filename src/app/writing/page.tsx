import { getContentList } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function WritingPage() {
  const topics = getContentList("writing");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          ✍️ Écriture — Writing Skills (Section B — 20 Marks)
        </h1>
        <p className="text-gray-600 mt-2">
          Master all writing formats tested in the CBSE board exam. Each tutorial
          includes format, useful phrases, model answers, and every topic asked
          in previous year papers (2016–2025).
        </p>
      </div>

      {/* Exam structure overview */}
      <div className="card bg-blue-50 border-blue-200">
        <h2 className="font-semibold text-french-blue mb-3">
          📋 Section B Breakdown — What&apos;s Tested
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-lg border">
            <p className="font-bold text-lg text-french-blue">10 marks</p>
            <p className="font-medium">Lettre Informelle</p>
            <p className="text-gray-500 text-xs mt-1">~80 words. Informal letter to a friend/family.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border">
            <p className="font-bold text-lg text-french-blue">5 marks</p>
            <p className="font-medium">Message</p>
            <p className="text-gray-500 text-xs mt-1">~30-40 words. Short note with date, time, info.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border">
            <p className="font-bold text-lg text-french-blue">5 marks</p>
            <p className="font-medium">Dialogue / Composition</p>
            <p className="text-gray-500 text-xs mt-1">5-6 exchanges or paragraph with clues.</p>
          </div>
        </div>
      </div>

      {/* Full Guide CTA */}
      <div className="card bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">📖 Complete Writing Guide — Get Full Marks</h2>
            <p className="text-purple-100 text-sm mt-1">
              Expandable guide with exact format, step-by-step process, phrase bank, marking scheme & model answers for every writing skill.
            </p>
          </div>
          <Link
            href="/writing/guide"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-purple-700 font-medium hover:bg-purple-50 transition-colors shrink-0"
          >
            Open Full Guide →
          </Link>
        </div>
      </div>

      {/* Writing skill tutorials */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Writing Skill Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((t) => (
            <Card
              key={t.slug}
              href={`/writing/${t.slug}`}
              title={t.title}
              description={t.description}
            />
          ))}
        </div>
      </div>

      {/* Most repeated themes */}
      <div className="card">
        <h2 className="font-semibold text-french-blue mb-4">
          🔥 Most Repeated Writing Themes (10 Years Analysis)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          These themes appear repeatedly across years. Prepare model answers for each.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3 p-2 bg-red-50 rounded">
            <span className="text-red-600 font-bold w-6">1.</span>
            <span className="flex-1 font-medium">Vacances / Voyage (Holidays / Travel)</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">8+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-red-50 rounded">
            <span className="text-red-600 font-bold w-6">2.</span>
            <span className="flex-1 font-medium">Fête / Anniversaire (Festival / Birthday)</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">7+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-red-50 rounded">
            <span className="text-red-600 font-bold w-6">3.</span>
            <span className="flex-1 font-medium">Routine quotidienne (Daily routine)</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">6+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
            <span className="text-orange-600 font-bold w-6">4.</span>
            <span className="flex-1 font-medium">Loisirs / Passe-temps (Hobbies)</span>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">5+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
            <span className="text-orange-600 font-bold w-6">5.</span>
            <span className="flex-1 font-medium">Invitation (Inviting someone)</span>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">5+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
            <span className="text-yellow-700 font-bold w-6">6.</span>
            <span className="flex-1 font-medium">École / Professeur (School / Teacher)</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">4+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
            <span className="text-yellow-700 font-bold w-6">7.</span>
            <span className="flex-1 font-medium">Nourriture / Restaurant (Food / Dining)</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">4+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <span className="text-gray-600 font-bold w-6">8.</span>
            <span className="flex-1 font-medium">Magasin / Shopping (Buying things)</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">3+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <span className="text-gray-600 font-bold w-6">9.</span>
            <span className="flex-1 font-medium">Santé / Médecin (Health / Doctor)</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">3+ times</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <span className="text-gray-600 font-bold w-6">10.</span>
            <span className="flex-1 font-medium">Film / Cinéma / Émission (Entertainment)</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">3+ times</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="card bg-green-50 border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">💡 Scoring Tips for Section B</h3>
        <ul className="text-sm text-green-900 space-y-1">
          <li>• <strong>Letter:</strong> Follow the format strictly — date, greeting, 2+ paragraphs, closing, signature.</li>
          <li>• <strong>Message:</strong> Always include date + time + greeting + clear info + name.</li>
          <li>• <strong>Dialogue:</strong> Use greetings, questions, reactions, and farewell. 5-6 exchanges minimum.</li>
          <li>• <strong>Composition:</strong> Use ALL given clues. Add connectors (puis, ensuite, finalement).</li>
          <li>• <strong>General:</strong> Respect word limits. Use correct tense (passé composé for past, futur for plans).</li>
        </ul>
      </div>
    </div>
  );
}
