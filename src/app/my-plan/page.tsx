"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Brain, CheckCircle, Circle, ArrowRight } from "lucide-react";

// All available chapters
const allChapters = [
  { slug: "lecon-0", title: "Leçon 0 — Révision", order: 0 },
  { slug: "lecon-1", title: "Leçon 1 — Retrouvons nos amis", order: 1 },
  { slug: "lecon-2", title: "Leçon 2 — À Paris", order: 2 },
  { slug: "lecon-3", title: "Leçon 3 — Le Monde des Jeunes", order: 3 },
  { slug: "lecon-4", title: "Leçon 4 — La Vie Quotidienne", order: 4 },
  { slug: "lecon-5", title: "Leçon 5 — La Santé", order: 5 },
  { slug: "lecon-6", title: "Leçon 6 — Les Achats", order: 6 },
  { slug: "lecon-7", title: "Leçon 7 — Les Voyages", order: 7 },
  { slug: "lecon-8", title: "Leçon 8 — La France et ses régions", order: 8 },
  { slug: "lecon-9", title: "Leçon 9 — Les Médias", order: 9 },
  { slug: "lecon-10", title: "Leçon 10 — L'Environnement", order: 10 },
  { slug: "lecon-11", title: "Leçon 11 — Le Monde du Travail", order: 11 },
  { slug: "lecon-12", title: "Leçon 12 — Fêtes et Traditions", order: 12 },
];

// All available assessments
const allAssessments = [
  { slug: "grammar-tenses", title: "Les Temps (Tenses)", category: "Grammar" },
  { slug: "grammar-pronouns", title: "Les Pronoms (Pronouns)", category: "Grammar" },
  { slug: "grammar-adjectives", title: "Les Adjectifs (Adjectives)", category: "Grammar" },
  { slug: "grammar-negation", title: "La Négation (Negation)", category: "Grammar" },
  { slug: "vocabulary-ch1-4", title: "Vocabulaire — Leçons 1-4", category: "Vocabulary" },
  { slug: "vocabulary-ch5-8", title: "Vocabulaire — Leçons 5-8", category: "Vocabulary" },
  { slug: "vocabulary-ch9-12", title: "Vocabulaire — Leçons 9-12", category: "Vocabulary" },
  { slug: "comprehension", title: "Compréhension (Reading)", category: "Reading" },
];

const STORAGE_KEY = "cbse-french-study-plan";

interface StudyPlan {
  selectedChapters: string[];
  selectedAssessments: string[];
}

export default function MyPlanPage() {
  const [plan, setPlan] = useState<StudyPlan>({
    selectedChapters: [],
    selectedAssessments: [],
  });
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setPlan(JSON.parse(saved));
      } catch {}
    }
    setLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    }
  }, [plan, loaded]);

  function toggleChapter(slug: string) {
    setPlan((prev) => ({
      ...prev,
      selectedChapters: prev.selectedChapters.includes(slug)
        ? prev.selectedChapters.filter((s) => s !== slug)
        : [...prev.selectedChapters, slug],
    }));
  }

  function toggleAssessment(slug: string) {
    setPlan((prev) => ({
      ...prev,
      selectedAssessments: prev.selectedAssessments.includes(slug)
        ? prev.selectedAssessments.filter((s) => s !== slug)
        : [...prev.selectedAssessments, slug],
    }));
  }

  function selectAllChapters() {
    setPlan((prev) => ({
      ...prev,
      selectedChapters: allChapters.map((c) => c.slug),
    }));
  }

  function clearAllChapters() {
    setPlan((prev) => ({ ...prev, selectedChapters: [] }));
  }

  function selectAllAssessments() {
    setPlan((prev) => ({
      ...prev,
      selectedAssessments: allAssessments.map((a) => a.slug),
    }));
  }

  function clearAllAssessments() {
    setPlan((prev) => ({ ...prev, selectedAssessments: [] }));
  }

  if (!loaded) {
    return (
      <div className="text-center py-20 text-gray-500">Loading your study plan...</div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          📚 My Study Plan
        </h1>
        <p className="text-gray-600 mt-2">
          Select the chapters you want to study and the assessments you want to
          take. Your selections are saved automatically.
        </p>
      </div>

      {/* Summary bar */}
      {(plan.selectedChapters.length > 0 || plan.selectedAssessments.length > 0) && (
        <div className="card bg-green-50 border-green-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium text-green-800">
                Your plan: {plan.selectedChapters.length} chapter{plan.selectedChapters.length !== 1 ? "s" : ""} &
                {" "}{plan.selectedAssessments.length} assessment{plan.selectedAssessments.length !== 1 ? "s" : ""}
              </p>
              <p className="text-sm text-green-700 mt-1">
                Ready to start? Click the links below to begin studying.
              </p>
            </div>
            <Link href="#my-selected" className="btn-primary text-sm">
              View My Selection <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}

      {/* Chapter Selection */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-french-blue" />
            Select Chapters to Study
          </h2>
          <div className="flex gap-2">
            <button
              onClick={selectAllChapters}
              className="text-xs px-3 py-1 rounded border border-french-blue text-french-blue hover:bg-blue-50 transition-colors"
            >
              Select All
            </button>
            <button
              onClick={clearAllChapters}
              className="text-xs px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allChapters.map((chapter) => {
            const isSelected = plan.selectedChapters.includes(chapter.slug);
            return (
              <button
                key={chapter.slug}
                onClick={() => toggleChapter(chapter.slug)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-french-blue bg-blue-50 shadow-sm"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isSelected ? (
                    <CheckCircle className="w-5 h-5 text-french-blue shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="text-xs font-medium text-gray-500">
                      Leçon {chapter.order}
                    </span>
                    <p className="font-medium text-sm">{chapter.title}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Assessment Selection */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Brain className="w-5 h-5 text-amber-700" />
            Select Assessments to Take
          </h2>
          <div className="flex gap-2">
            <button
              onClick={selectAllAssessments}
              className="text-xs px-3 py-1 rounded border border-french-blue text-french-blue hover:bg-blue-50 transition-colors"
            >
              Select All
            </button>
            <button
              onClick={clearAllAssessments}
              className="text-xs px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allAssessments.map((assessment) => {
            const isSelected = plan.selectedAssessments.includes(assessment.slug);
            return (
              <button
                key={assessment.slug}
                onClick={() => toggleAssessment(assessment.slug)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-amber-500 bg-amber-50 shadow-sm"
                    : "border-gray-200 hover:border-amber-300 hover:bg-amber-50/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isSelected ? (
                    <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="text-xs font-medium text-gray-500">
                      {assessment.category}
                    </span>
                    <p className="font-medium text-sm">{assessment.title}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* My Selected Items — Quick Links */}
      {(plan.selectedChapters.length > 0 || plan.selectedAssessments.length > 0) && (
        <section id="my-selected" className="space-y-6">
          <h2 className="text-xl font-semibold text-french-blue border-b pb-2">
            🎯 My Selected Study Items
          </h2>

          {plan.selectedChapters.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Chapters to Study ({plan.selectedChapters.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {allChapters
                  .filter((c) => plan.selectedChapters.includes(c.slug))
                  .map((chapter) => (
                    <Link
                      key={chapter.slug}
                      href={`/chapters/${chapter.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-french-blue shrink-0" />
                      <span className="font-medium">{chapter.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {plan.selectedAssessments.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" /> Assessments to Take ({plan.selectedAssessments.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {allAssessments
                  .filter((a) => plan.selectedAssessments.includes(a.slug))
                  .map((assessment) => (
                    <Link
                      key={assessment.slug}
                      href={`/quiz/${assessment.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-medium">{assessment.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
