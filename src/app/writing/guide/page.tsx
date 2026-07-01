"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, CheckCircle, BookOpen, ArrowLeft } from "lucide-react";

type Section = "letter" | "message" | "dialogue" | "composition" | null;

export default function WritingGuidePage() {
  const [expanded, setExpanded] = useState<Section>(null);

  function toggle(section: Section) {
    setExpanded(expanded === section ? null : section);
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1 text-sm text-french-blue hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Writing Section
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          ✍️ Complete Writing Skills Guide — Score Full Marks
        </h1>
        <p className="text-gray-600 mt-2">
          This is your one-stop preparation guide for <strong>Section B (20 marks)</strong>.
          Click each writing skill below to expand the complete format, content
          structure, phrases, and model answers.
        </p>
      </div>

      {/* Marking overview */}
      <div className="card bg-gradient-to-r from-french-blue to-blue-800 text-white">
        <h2 className="font-semibold text-lg mb-3">Section B — Production Écrite (20 Marks)</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-2xl font-bold">10</p>
            <p className="text-sm text-blue-100">Lettre Informelle</p>
            <p className="text-xs text-blue-200">~80 mots</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-blue-100">Message</p>
            <p className="text-xs text-blue-200">~30-40 mots</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-blue-100">Dialogue / Composition</p>
            <p className="text-xs text-blue-200">5-6 échanges</p>
          </div>
        </div>
      </div>

      {/* ============ LETTER SECTION ============ */}
      <div className="card border-2 border-blue-200">
        <button
          onClick={() => toggle("letter")}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-french-blue">
              📬 La Lettre Informelle (10 Marks)
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Informal letter to a friend/family — complete format, phrases & model
            </p>
          </div>
          {expanded === "letter" ? (
            <ChevronUp className="w-6 h-6 text-french-blue shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-french-blue shrink-0" />
          )}
        </button>

        {expanded === "letter" && (
          <div className="mt-6 space-y-6 border-t pt-6">
            {/* FORMAT */}
            <div>
              <h3 className="font-semibold text-french-blue mb-2">📐 Format Exact (Follow This)</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`                                    [Ville], le [date]
                                    New Delhi, le 15 mars 2026

Cher/Chère [Prénom],                    ← Greeting

[Para 1: Opening — reason for writing]  ← 2-3 lines

[Para 2: Main content — details]        ← 4-5 lines

[Para 3: Closing — ask question/hope]   ← 2-3 lines

Amicalement / Bisous / À bientôt,      ← Sign-off
[Your name]                             ← Signature`}
              </div>
            </div>

            {/* MARKING SCHEME */}
            <div>
              <h3 className="font-semibold text-french-blue mb-2">📊 How Marks Are Given</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded"><strong>Format (2 marks):</strong> Date, greeting, sign-off, name</div>
                <div className="bg-green-50 p-2 rounded"><strong>Content (4 marks):</strong> Relevance, completeness, details</div>
                <div className="bg-green-50 p-2 rounded"><strong>Language (3 marks):</strong> Grammar, vocabulary, spelling</div>
                <div className="bg-green-50 p-2 rounded"><strong>Coherence (1 mark):</strong> Flow, connectors, logic</div>
              </div>
            </div>

            {/* STEP BY STEP */}
            <div>
              <h3 className="font-semibold text-french-blue mb-2">🪜 Step-by-Step Writing Process</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span><span><strong>Date (top right):</strong> Always write: Ville, le + date. Example: <em>New Delhi, le 20 février 2026</em></span></li>
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span><span><strong>Greeting:</strong> Cher (boy) / Chère (girl) + first name. Example: <em>Cher Mathieu,</em> or <em>Chère Sophie,</em></span></li>
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span><span><strong>Opening (2-3 lines):</strong> Ask how they are + state why you&apos;re writing. Use: <em>Comment vas-tu ? Je t&apos;écris pour...</em></span></li>
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">4</span><span><strong>Body (4-5 lines):</strong> Main content — describe, narrate, or explain. Use passé composé for past, futur for plans.</span></li>
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">5</span><span><strong>Closing (2-3 lines):</strong> Ask a question back + say goodbye. Use: <em>Et toi ? Écris-moi bientôt.</em></span></li>
                <li className="flex gap-2"><span className="bg-french-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">6</span><span><strong>Sign-off + Name:</strong> Amicalement, / Bisous, / À bientôt, then your name on the next line.</span></li>
              </ol>
            </div>

            {/* PHRASES BANK */}
            <div>
              <h3 className="font-semibold text-french-blue mb-2">💬 Phrases You Must Know</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">Opening lines:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Comment vas-tu ? (How are you?)</li>
                    <li>• J&apos;espère que tu vas bien. (I hope you&apos;re well.)</li>
                    <li>• Je t&apos;écris pour te raconter... (I&apos;m writing to tell you...)</li>
                    <li>• Merci pour ta dernière lettre. (Thanks for your last letter.)</li>
                    <li>• Ça fait longtemps ! (It&apos;s been a long time!)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">Closing lines:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Et toi, qu&apos;est-ce que tu fais ? (And you?)</li>
                    <li>• J&apos;attends ta réponse. (I await your reply.)</li>
                    <li>• Écris-moi bientôt. (Write soon.)</li>
                    <li>• Donne le bonjour à ta famille. (Say hi to your family.)</li>
                    <li>• J&apos;espère te voir bientôt. (I hope to see you soon.)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODEL ANSWER */}
            <div>
              <h3 className="font-semibold text-french-blue mb-2">✅ Model Answer — Full Marks</h3>
              <p className="text-sm text-gray-600 mb-2"><strong>Topic:</strong> Écrivez une lettre à votre ami(e) pour raconter vos vacances d&apos;été. (80 mots)</p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`                                    New Delhi, le 20 juillet 2026

Cher Mathieu,

Comment vas-tu ? J'espère que tu vas bien. Je t'écris
pour te raconter mes vacances d'été.

Ce mois-ci, je suis allé(e) à Shimla avec ma famille.
Nous avons passé une semaine à la montagne. J'ai fait
du trekking, j'ai visité des temples et j'ai mangé des
plats locaux. Le paysage était magnifique et l'air
était frais. Je me suis bien amusé(e) !

Et toi, qu'est-ce que tu as fait pendant les vacances ?
Écris-moi bientôt.

Amicalement,
Priya`}
              </div>
              <div className="mt-2 text-xs text-green-700">
                ✓ Format correct ✓ ~80 words ✓ Passé composé used ✓ Opening + body + closing ✓ Question asked back
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============ MESSAGE SECTION ============ */}
      <div className="card border-2 border-purple-200">
        <button
          onClick={() => toggle("message")}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-purple-700">
              📝 Le Message (5 Marks)
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Short note/message — format, content & models
            </p>
          </div>
          {expanded === "message" ? (
            <ChevronUp className="w-6 h-6 text-purple-700 shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-purple-700 shrink-0" />
          )}
        </button>

        {expanded === "message" && (
          <div className="mt-6 space-y-6 border-t pt-6">
            {/* FORMAT */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">📐 Format Exact</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`MESSAGE

Date : le [date]                ← Always include
Heure : [time]                  ← Always include

[Cher/Chère Prénom],            ← Greeting (who it's for)

[Content: 3-4 clear sentences]  ← What, why, what to do

[Your name]                     ← Signature`}
              </div>
            </div>

            {/* MARKING */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">📊 Marking Scheme</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-purple-50 p-2 rounded"><strong>Format (1.5):</strong> Title, date, time, greeting, name</div>
                <div className="bg-purple-50 p-2 rounded"><strong>Content (2):</strong> Clear, complete information</div>
                <div className="bg-purple-50 p-2 rounded"><strong>Language (1):</strong> Correct grammar</div>
                <div className="bg-purple-50 p-2 rounded"><strong>Word limit (0.5):</strong> 30-40 words</div>
              </div>
            </div>

            {/* STEP BY STEP */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">🪜 Step-by-Step</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span><span><strong>Write &quot;MESSAGE&quot;</strong> as the title (centered or left)</span></li>
                <li className="flex gap-2"><span className="bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span><span><strong>Date :</strong> le + day + month + year. <strong>Heure :</strong> time in 24h format</span></li>
                <li className="flex gap-2"><span className="bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span><span><strong>Greeting:</strong> Cher/Chère + name (for whom the message is)</span></li>
                <li className="flex gap-2"><span className="bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">4</span><span><strong>Content (3-4 sentences):</strong> WHY are you writing? WHAT happened? WHAT should they do?</span></li>
                <li className="flex gap-2"><span className="bg-purple-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">5</span><span><strong>Sign your name</strong> at the bottom</span></li>
              </ol>
            </div>

            {/* PHRASES */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">💬 Key Phrases for Messages</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <ul className="space-y-1 text-gray-700">
                  <li>• Je suis sorti(e) pour... (I&apos;ve gone out to...)</li>
                  <li>• Je serai de retour à... (I&apos;ll be back at...)</li>
                  <li>• N&apos;oublie pas de... (Don&apos;t forget to...)</li>
                  <li>• Je t&apos;informe que... (I&apos;m informing you that...)</li>
                </ul>
                <ul className="space-y-1 text-gray-700">
                  <li>• Appelle-moi quand... (Call me when...)</li>
                  <li>• Je suis passé(e) chez toi... (I came by...)</li>
                  <li>• ... a téléphoné pour toi. (...called for you.)</li>
                  <li>• Je reviendrai à... (I&apos;ll come back at...)</li>
                </ul>
              </div>
            </div>

            {/* MODEL */}
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">✅ Model Answer — Full Marks</h3>
              <p className="text-sm text-gray-600 mb-2"><strong>Topic:</strong> Vous ne pouvez pas aller au cours de musique. Laissez un message pour le professeur.</p>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`MESSAGE

Date : le 10 novembre 2026
Heure : 9h00

Cher Monsieur Dupont,

Je suis malade aujourd'hui et je ne pourrai pas
venir au cours de musique cet après-midi. Je
reviendrai la semaine prochaine. Excusez-moi
pour cette absence.

Arjun`}
              </div>
              <div className="mt-2 text-xs text-purple-700">
                ✓ Title &quot;MESSAGE&quot; ✓ Date + Time ✓ Greeting ✓ Clear reason ✓ ~35 words ✓ Signature
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============ DIALOGUE SECTION ============ */}
      <div className="card border-2 border-green-200">
        <button
          onClick={() => toggle("dialogue")}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-green-700">
              💬 Le Dialogue (5 Marks)
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Conversation between two people — format, tips & models
            </p>
          </div>
          {expanded === "dialogue" ? (
            <ChevronUp className="w-6 h-6 text-green-700 shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-green-700 shrink-0" />
          )}
        </button>

        {expanded === "dialogue" && (
          <div className="mt-6 space-y-6 border-t pt-6">
            {/* FORMAT */}
            <div>
              <h3 className="font-semibold text-green-700 mb-2">📐 Format Exact</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`[Nom 1] : [Greeting]
[Nom 2] : [Greeting + response]
[Nom 1] : [Question or statement]
[Nom 2] : [Answer/reaction]
[Nom 1] : [Follow-up]
[Nom 2] : [Conclusion/farewell]

→ 5-6 exchanges minimum
→ Use : (colon) after each name
→ Include ?, !, and varied punctuation`}
              </div>
            </div>

            {/* MARKING */}
            <div>
              <h3 className="font-semibold text-green-700 mb-2">📊 Marking Scheme</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded"><strong>Content (2):</strong> Relevant, logical flow</div>
                <div className="bg-green-50 p-2 rounded"><strong>Language (2):</strong> Grammar, vocabulary, variety</div>
                <div className="bg-green-50 p-2 rounded"><strong>Format (0.5):</strong> Name : text structure</div>
                <div className="bg-green-50 p-2 rounded"><strong>Completeness (0.5):</strong> 5-6 exchanges, greeting + farewell</div>
              </div>
            </div>

            {/* STRUCTURE */}
            <div>
              <h3 className="font-semibold text-green-700 mb-2">🪜 Dialogue Structure (Always Follow This)</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span><span><strong>Greeting:</strong> Bonjour / Salut + Comment allez-vous / ça va ?</span></li>
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span><span><strong>Main topic:</strong> Introduce what the conversation is about</span></li>
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span><span><strong>Questions &amp; Answers:</strong> 2-3 exchanges of Q&amp;A on the topic</span></li>
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">4</span><span><strong>Reaction:</strong> Use exclamations — Super ! / Quelle bonne idée ! / D&apos;accord !</span></li>
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">5</span><span><strong>Decision/conclusion:</strong> Agree on something / summarize</span></li>
                <li className="flex gap-2"><span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">6</span><span><strong>Farewell:</strong> Au revoir / À bientôt / À demain / Salut !</span></li>
              </ol>
            </div>

            {/* PHRASES */}
            <div>
              <h3 className="font-semibold text-green-700 mb-2">💬 Useful Dialogue Phrases</h3>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-1">Asking:</p>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li>• Qu&apos;est-ce que tu veux ?</li>
                    <li>• Tu veux venir avec moi ?</li>
                    <li>• À quelle heure ?</li>
                    <li>• C&apos;est combien ?</li>
                    <li>• Quelle taille ?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">Reacting:</p>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li>• Super ! / Génial !</li>
                    <li>• Quelle bonne idée !</li>
                    <li>• Ah bon ? Vraiment ?</li>
                    <li>• D&apos;accord !</li>
                    <li>• Dommage !</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">Accepting/Refusing:</p>
                  <ul className="space-y-0.5 text-gray-700 text-xs">
                    <li>• Oui, avec plaisir !</li>
                    <li>• Bien sûr !</li>
                    <li>• Désolé(e), je ne peux pas.</li>
                    <li>• Je regrette, mais...</li>
                    <li>• Pas de problème !</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MODEL */}
            <div>
              <h3 className="font-semibold text-green-700 mb-2">✅ Model Answer — Full Marks</h3>
              <p className="text-sm text-gray-600 mb-2"><strong>Topic:</strong> Dialogue entre deux amis qui planifient un voyage pendant les vacances.</p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
{`Priya  : Salut Ankit ! Ça va ?
Ankit  : Salut Priya ! Oui, ça va bien. Et toi ?
Priya  : Très bien ! Dis, tu as des projets pour les vacances ?
Ankit  : Pas encore. Pourquoi ?
Priya  : Je voudrais aller à Jaipur. Tu veux venir avec moi ?
Ankit  : Quelle bonne idée ! Quand est-ce qu'on part ?
Priya  : Le 20 mai. On peut prendre le train. C'est pas cher.
Ankit  : Super ! Je vais demander la permission à mes parents.
Priya  : D'accord. Appelle-moi ce soir pour confirmer.
Ankit  : Pas de problème ! À ce soir alors. Salut !`}
              </div>
              <div className="mt-2 text-xs text-green-700">
                ✓ Greeting ✓ 5+ exchanges ✓ Questions used ✓ Reactions ✓ Decision made ✓ Farewell
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============ COMPOSITION SECTION ============ */}
      <div className="card border-2 border-amber-200">
        <button
          onClick={() => toggle("composition")}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-amber-700">
              📄 La Composition / Rédaction (5 Marks)
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Write a paragraph using given clues — format, approach & models
            </p>
          </div>
          {expanded === "composition" ? (
            <ChevronUp className="w-6 h-6 text-amber-700 shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-amber-700 shrink-0" />
          )}
        </button>

        {expanded === "composition" && (
          <div className="mt-6 space-y-6 border-t pt-6">
            {/* FORMAT */}
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">📐 Two Types You May See</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-amber-50 p-3 rounded-lg text-sm">
                  <p className="font-bold">Type 1: Complétez le texte</p>
                  <p className="text-gray-600 mt-1">Given a paragraph with blanks + word bank. Fill in correctly.</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg text-sm">
                  <p className="font-bold">Type 2: Écrivez à l&apos;aide des indications</p>
                  <p className="text-gray-600 mt-1">Given keywords/clues. Write a coherent paragraph (~60-80 words).</p>
                </div>
              </div>
            </div>

            {/* APPROACH */}
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">🪜 How to Write (Step-by-Step)</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span><span>Read ALL the clues first — understand the theme</span></li>
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span><span>Decide the tense: narrating past = passé composé, describing = présent/imparfait</span></li>
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span><span>Write the first sentence using the first clue</span></li>
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">4</span><span>Connect each clue with connectors: d&apos;abord, puis, ensuite, aussi, finalement</span></li>
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">5</span><span>Make sure EVERY clue is used — you lose marks for missing any</span></li>
                <li className="flex gap-2"><span className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">6</span><span>End with a feeling/opinion: C&apos;était formidable ! / J&apos;étais content(e).</span></li>
              </ol>
            </div>

            {/* CONNECTORS */}
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">🔗 Essential Connectors</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {["D'abord (First)", "Puis (Then)", "Ensuite (Next)", "Après (After)", "Aussi (Also)", "Mais (But)", "Parce que (Because)", "Donc (So)", "Finalement (Finally)", "Enfin (At last)"].map((c) => (
                  <span key={c} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">{c}</span>
                ))}
              </div>
            </div>

            {/* MODEL */}
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">✅ Model Answer — Full Marks</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Clues given:</strong> dimanche — se lever tard — petit-déjeuner — parc — jouer au cricket — pique-nique — film — content
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-sm">
                <p>
                  Dimanche dernier, je me suis levé(e) tard à neuf heures.
                  D&apos;abord, j&apos;ai pris mon petit-déjeuner avec ma famille.
                  Ensuite, nous sommes allés au parc. Là-bas, j&apos;ai joué au
                  cricket avec mes amis pendant deux heures. À midi, nous avons
                  fait un pique-nique sous un arbre. L&apos;après-midi, nous avons
                  regardé un film à la maison. J&apos;étais très content(e).
                  C&apos;était un dimanche parfait !
                </p>
              </div>
              <div className="mt-2 text-xs text-amber-700">
                ✓ All 8 clues used ✓ Connectors (D&apos;abord, Ensuite, Là-bas, À midi) ✓ Passé composé ✓ ~75 words ✓ Ends with feeling
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============ QUICK CHECKLIST ============ */}
      <div className="card bg-green-50 border-green-200">
        <h2 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Final Checklist Before Submitting (Exam Day)
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-green-800 mb-2">Letter ✓</p>
            <ul className="space-y-1 text-green-900">
              <li>□ Date in top right corner</li>
              <li>□ Cher/Chère + name</li>
              <li>□ Opening paragraph (how are you + reason)</li>
              <li>□ Main content (4-5 lines)</li>
              <li>□ Closing (question + hope to hear back)</li>
              <li>□ Sign-off (Amicalement) + your name</li>
              <li>□ Word count: ~80 words</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-green-800 mb-2">Message ✓</p>
            <ul className="space-y-1 text-green-900">
              <li>□ Title: MESSAGE</li>
              <li>□ Date : le ...</li>
              <li>□ Heure : ...</li>
              <li>□ Greeting</li>
              <li>□ Clear content (what + why + action needed)</li>
              <li>□ Your name</li>
              <li>□ Word count: 30-40 words</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-green-800 mb-2">Dialogue ✓</p>
            <ul className="space-y-1 text-green-900">
              <li>□ Greeting exchange</li>
              <li>□ 5-6 exchanges minimum</li>
              <li>□ Questions asked</li>
              <li>□ Varied reactions (Super! Ah bon?)</li>
              <li>□ Farewell at end</li>
              <li>□ Correct punctuation (? ! .)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-green-800 mb-2">Composition ✓</p>
            <ul className="space-y-1 text-green-900">
              <li>□ ALL clues/words used</li>
              <li>□ Connectors between sentences</li>
              <li>□ Correct tense throughout</li>
              <li>□ Ends with feeling/opinion</li>
              <li>□ Word count: 60-80 words</li>
              <li>□ No clue left unused</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Link to detailed tutorials */}
      <div className="card text-center">
        <BookOpen className="w-8 h-8 text-french-blue mx-auto mb-2" />
        <h3 className="font-semibold">Want More Practice?</h3>
        <p className="text-sm text-gray-600 mt-1 mb-4">
          See detailed tutorials with 10 years of previous year topics for each writing skill.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/writing/letter" className="btn-primary text-sm">Letter Topics</Link>
          <Link href="/writing/message" className="btn-secondary text-sm">Message Topics</Link>
          <Link href="/writing/dialogue" className="btn-secondary text-sm">Dialogue Topics</Link>
          <Link href="/writing/composition" className="btn-secondary text-sm">Composition Topics</Link>
          <Link href="/writing/previous-year-topics" className="btn-secondary text-sm">All PYQ Topics</Link>
        </div>
      </div>
    </div>
  );
}
