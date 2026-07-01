import Link from "next/link";
import { BookOpen, PenLine, Languages, FileText, Brain, ClipboardList } from "lucide-react";

const sections = [
  {
    href: "/chapters",
    icon: BookOpen,
    title: "Chapitres (Chapters)",
    description: "Lesson-wise tutorials from Entre Jeunes textbook — Leçon 0 to 12",
    color: "text-french-blue",
  },
  {
    href: "/grammar",
    icon: Languages,
    title: "Grammaire (Grammar)",
    description: "Tenses, pronouns, adjectives, negation, question formation and more",
    color: "text-green-700",
  },
  {
    href: "/writing",
    icon: PenLine,
    title: "Écriture (Writing)",
    description: "Informal letters, messages, dialogues, and composition practice",
    color: "text-purple-700",
  },
  {
    href: "/papers",
    icon: FileText,
    title: "Sample Papers",
    description: "CBSE-pattern 80-mark papers with marking scheme and answer keys",
    color: "text-french-red",
  },
  {
    href: "/quiz",
    icon: Brain,
    title: "Self-Assessment Quiz",
    description: "Test yourself with MCQs, fill-in-the-blanks, and short answers",
    color: "text-amber-700",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-french-blue mb-4">
          Bienvenue ! Welcome!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your complete self-study portal for{" "}
          <strong>CBSE Class 10 French</strong> (Code 018). Learn chapter by
          chapter, practice grammar and writing, and test yourself with
          board-pattern sample papers.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Based on the prescribed textbook:{" "}
          <em>Entre Jeunes (Class X)</em> &amp; <em>Setrite French 10</em> — CBSE 2025-26
        </p>
      </section>

      {/* Study Plan CTA */}
      <section className="card bg-gradient-to-r from-french-blue to-blue-800 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <ClipboardList className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="text-lg font-semibold">Create Your Study Plan</h2>
              <p className="text-blue-100 text-sm mt-1">
                Pick the chapters you want to study and assessments you want to take.
                Your plan is saved automatically.
              </p>
            </div>
          </div>
          <Link
            href="/my-plan"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-french-blue font-medium hover:bg-blue-50 transition-colors shrink-0"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* Section cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href} className="card group">
              <Icon className={`w-8 h-8 mb-3 ${section.color}`} />
              <h2 className="text-lg font-semibold mb-1 group-hover:text-french-blue transition-colors">
                {section.title}
              </h2>
              <p className="text-sm text-gray-600">{section.description}</p>
            </Link>
          );
        })}
      </section>

      {/* Exam info */}
      <section className="card bg-blue-50 border-blue-200">
        <h2 className="text-lg font-semibold text-french-blue mb-3">
          📋 CBSE Exam Pattern — French (Code 018)
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-1">Written Exam — 80 Marks</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Section A: Compréhension (Reading) — 10 marks</li>
              <li>Section B: Écriture (Writing) — 20 marks</li>
              <li>Section C: Grammaire (Grammar) — 30 marks</li>
              <li>Section D: Textbook Questions — 20 marks</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-1">Internal Assessment — 20 Marks</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Listening — 5 marks</li>
              <li>Speaking — 5 marks</li>
              <li>Project / Assignment — 10 marks</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
