"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // index of correct option
  explanation?: string;
}

interface QuizEngineProps {
  title: string;
  questions: QuizQuestion[];
}

export function QuizEngine({ title, questions }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isCorrect = selected === current.correct;

  function handleSelect(index: number) {
    if (answered[currentIndex]) return;
    setSelected(index);
    const updated = [...answered];
    updated[currentIndex] = true;
    setAnswered(updated);
    if (index === current.correct) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-french-blue">{title} — Résultat</h2>
        <div className="card">
          <p className="text-4xl font-bold">
            {score}/{questions.length}
          </p>
          <p className="text-lg text-gray-600 mt-2">{percentage}% correct</p>
          <div className="mt-4">
            {percentage >= 80 && (
              <p className="text-green-700 font-medium">🎉 Excellent ! Très bien !</p>
            )}
            {percentage >= 50 && percentage < 80 && (
              <p className="text-amber-700 font-medium">👍 Bon travail ! Keep practicing.</p>
            )}
            {percentage < 50 && (
              <p className="text-red-700 font-medium">📖 Révisez encore une fois. You can do it!</p>
            )}
          </div>
        </div>
        <button onClick={handleRestart} className="btn-primary">
          <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-french-blue">{title}</h2>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-french-blue h-2 rounded-full transition-all"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="card">
        <p className="font-medium text-lg mb-4">{current.question}</p>

        <div className="space-y-2">
          {current.options.map((option, idx) => {
            let style =
              "border rounded-lg p-3 cursor-pointer transition-colors text-left w-full";

            if (answered[currentIndex]) {
              if (idx === current.correct) {
                style += " bg-green-50 border-green-500 text-green-800";
              } else if (idx === selected && !isCorrect) {
                style += " bg-red-50 border-red-400 text-red-800";
              } else {
                style += " border-gray-200 text-gray-500";
              }
            } else {
              style +=
                idx === selected
                  ? " border-french-blue bg-blue-50"
                  : " border-gray-200 hover:border-french-blue hover:bg-blue-50";
            }

            return (
              <button
                key={idx}
                className={style}
                onClick={() => handleSelect(idx)}
                disabled={answered[currentIndex]}
              >
                <span className="flex items-center gap-2">
                  {answered[currentIndex] && idx === current.correct && (
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  )}
                  {answered[currentIndex] &&
                    idx === selected &&
                    !isCorrect &&
                    idx !== current.correct && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered[currentIndex] && current.explanation && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-900">
            <strong>Explication :</strong> {current.explanation}
          </div>
        )}
      </div>

      {/* Next button */}
      {answered[currentIndex] && (
        <button onClick={handleNext} className="btn-primary">
          {isLast ? "Voir le résultat" : "Question suivante →"}
        </button>
      )}
    </div>
  );
}
