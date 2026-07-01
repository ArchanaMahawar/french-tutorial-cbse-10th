"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";

interface LetterInfo {
  letter: string;
  frenchName: string;
  pronunciation: string;
  example: string;
  exampleMeaning: string;
}

const alphabet: LetterInfo[] = [
  { letter: "A", frenchName: "a", pronunciation: "ah", example: "Ami", exampleMeaning: "Friend" },
  { letter: "B", frenchName: "bé", pronunciation: "bay", example: "Bonjour", exampleMeaning: "Hello" },
  { letter: "C", frenchName: "cé", pronunciation: "say", example: "Chat", exampleMeaning: "Cat" },
  { letter: "D", frenchName: "dé", pronunciation: "day", example: "Danse", exampleMeaning: "Dance" },
  { letter: "E", frenchName: "e", pronunciation: "euh (like 'uh')", example: "École", exampleMeaning: "School" },
  { letter: "F", frenchName: "effe", pronunciation: "eff", example: "Fleur", exampleMeaning: "Flower" },
  { letter: "G", frenchName: "gé", pronunciation: "zhay", example: "Garçon", exampleMeaning: "Boy" },
  { letter: "H", frenchName: "ache", pronunciation: "ahsh", example: "Homme", exampleMeaning: "Man" },
  { letter: "I", frenchName: "i", pronunciation: "ee", example: "Île", exampleMeaning: "Island" },
  { letter: "J", frenchName: "ji", pronunciation: "zhee", example: "Jardin", exampleMeaning: "Garden" },
  { letter: "K", frenchName: "ka", pronunciation: "kah", example: "Kilo", exampleMeaning: "Kilogram" },
  { letter: "L", frenchName: "elle", pronunciation: "ell", example: "Livre", exampleMeaning: "Book" },
  { letter: "M", frenchName: "emme", pronunciation: "em", example: "Maison", exampleMeaning: "House" },
  { letter: "N", frenchName: "enne", pronunciation: "en", example: "Nature", exampleMeaning: "Nature" },
  { letter: "O", frenchName: "o", pronunciation: "oh", example: "Orange", exampleMeaning: "Orange" },
  { letter: "P", frenchName: "pé", pronunciation: "pay", example: "Paris", exampleMeaning: "Paris" },
  { letter: "Q", frenchName: "ku", pronunciation: "koo", example: "Question", exampleMeaning: "Question" },
  { letter: "R", frenchName: "erre", pronunciation: "air", example: "Rouge", exampleMeaning: "Red" },
  { letter: "S", frenchName: "esse", pronunciation: "ess", example: "Soleil", exampleMeaning: "Sun" },
  { letter: "T", frenchName: "té", pronunciation: "tay", example: "Table", exampleMeaning: "Table" },
  { letter: "U", frenchName: "u", pronunciation: "oo (lips rounded)", example: "Université", exampleMeaning: "University" },
  { letter: "V", frenchName: "vé", pronunciation: "vay", example: "Vélo", exampleMeaning: "Bicycle" },
  { letter: "W", frenchName: "double-vé", pronunciation: "doo-bluh-vay", example: "Wagon", exampleMeaning: "Wagon" },
  { letter: "X", frenchName: "ixe", pronunciation: "eeks", example: "Xylophone", exampleMeaning: "Xylophone" },
  { letter: "Y", frenchName: "i grec", pronunciation: "ee-grek", example: "Yaourt", exampleMeaning: "Yogurt" },
  { letter: "Z", frenchName: "zède", pronunciation: "zed", example: "Zéro", exampleMeaning: "Zero" },
];

type Tab = "french" | "comparison";

export default function AlphabetPage() {
  const [activeTab, setActiveTab] = useState<Tab>("french");
  const [selectedLetter, setSelectedLetter] = useState<LetterInfo | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          🔤 L'Alphabet Français — The French Alphabet
        </h1>
        <p className="text-gray-600 mt-2">
          Learn how each letter is pronounced in French compared to English.
          Click on any letter to see details.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        <button
          onClick={() => setActiveTab("french")}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "french"
              ? "border-french-blue text-french-blue"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          French Alphabet
        </button>
        <button
          onClick={() => setActiveTab("comparison")}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "comparison"
              ? "border-french-blue text-french-blue"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          French vs English Comparison
        </button>
      </div>

      {/* French Alphabet Tab */}
      {activeTab === "french" && (
        <div className="space-y-6">
          {/* Letter Grid */}
          <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 gap-2">
            {alphabet.map((item) => (
              <button
                key={item.letter}
                onClick={() => setSelectedLetter(item)}
                className={`w-12 h-12 rounded-lg border-2 font-bold text-lg flex items-center justify-center transition-all ${
                  selectedLetter?.letter === item.letter
                    ? "border-french-blue bg-blue-100 text-french-blue scale-110"
                    : "border-gray-200 hover:border-french-blue hover:bg-blue-50 text-gray-800"
                }`}
              >
                {item.letter}
              </button>
            ))}
          </div>

          {/* Selected Letter Detail */}
          {selectedLetter && (
            <div className="card bg-blue-50 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-bold text-french-blue">
                  {selectedLetter.letter}
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase">French Name</span>
                    <p className="text-lg font-semibold">{selectedLetter.frenchName}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase">Pronunciation</span>
                    <p className="text-lg flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-french-blue" />
                      <span className="italic">{selectedLetter.pronunciation}</span>
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase">Example Word</span>
                    <p className="text-lg">
                      <strong>{selectedLetter.example}</strong>
                      <span className="text-gray-500 ml-2">({selectedLetter.exampleMeaning})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!selectedLetter && (
            <p className="text-center text-gray-500 italic py-4">
              👆 Click on any letter above to see its French pronunciation
            </p>
          )}

          {/* Full list */}
          <div className="card">
            <h3 className="font-semibold text-french-blue mb-3">Complete French Alphabet</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {alphabet.map((item) => (
                <div key={item.letter} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                  <span className="w-8 h-8 bg-french-blue text-white rounded flex items-center justify-center font-bold text-sm">
                    {item.letter}
                  </span>
                  <div>
                    <span className="font-medium">{item.frenchName}</span>
                    <span className="text-gray-500 ml-2">[{item.pronunciation}]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison Tab */}
      {activeTab === "comparison" && (
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold text-french-blue mb-4">
              French vs English — Letter Pronunciation Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-french-blue">
                    <th className="text-left py-2 px-3">Letter</th>
                    <th className="text-left py-2 px-3">English Name</th>
                    <th className="text-left py-2 px-3">French Name</th>
                    <th className="text-left py-2 px-3">French Sound</th>
                    <th className="text-left py-2 px-3">Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.letter} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-3 font-bold text-french-blue">{row.letter}</td>
                      <td className="py-2 px-3">{row.english}</td>
                      <td className="py-2 px-3 font-medium">{row.french}</td>
                      <td className="py-2 px-3 italic text-gray-600">{row.sound}</td>
                      <td className="py-2 px-3 text-xs text-gray-700">{row.difference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key differences note */}
          <div className="card bg-amber-50 border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2">⚠️ Letters That Sound Very Different</h3>
            <ul className="space-y-1 text-sm text-amber-900">
              <li><strong>E</strong> — English: "ee" | French: "euh" (like a short "uh")</li>
              <li><strong>G</strong> — English: "jee" | French: "zhay" (soft "zh" sound)</li>
              <li><strong>H</strong> — English: "aitch" | French: "ahsh" (H is always silent in French words)</li>
              <li><strong>I</strong> — English: "eye" | French: "ee" (like English E)</li>
              <li><strong>J</strong> — English: "jay" | French: "zhee" (like "s" in "measure")</li>
              <li><strong>R</strong> — English: "ar" | French: "air" (guttural, from the throat)</li>
              <li><strong>U</strong> — English: "you" | French: "oo" (purse lips tightly)</li>
              <li><strong>W</strong> — English: "double-u" | French: "double-vé"</li>
              <li><strong>Y</strong> — English: "why" | French: "ee-grek" (Greek i)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const comparisonData = [
  { letter: "A", english: "ay", french: "a", sound: "ah", difference: "Same basic sound" },
  { letter: "B", english: "bee", french: "bé", sound: "bay", difference: "Similar" },
  { letter: "C", english: "see", french: "cé", sound: "say", difference: "Similar" },
  { letter: "D", english: "dee", french: "dé", sound: "day", difference: "Similar" },
  { letter: "E", english: "ee", french: "e", sound: "euh", difference: "Very different! French E = 'uh'" },
  { letter: "F", english: "eff", french: "effe", sound: "eff", difference: "Same" },
  { letter: "G", english: "jee", french: "gé", sound: "zhay", difference: "Different! French = soft 'zh'" },
  { letter: "H", english: "aitch", french: "ache", sound: "ahsh", difference: "H is silent in French words" },
  { letter: "I", english: "eye", french: "i", sound: "ee", difference: "Very different! French I = 'ee'" },
  { letter: "J", english: "jay", french: "ji", sound: "zhee", difference: "Different! French J = 'zh'" },
  { letter: "K", english: "kay", french: "ka", sound: "kah", difference: "Similar" },
  { letter: "L", english: "ell", french: "elle", sound: "ell", difference: "Same" },
  { letter: "M", english: "em", french: "emme", sound: "em", difference: "Same" },
  { letter: "N", english: "en", french: "enne", sound: "en", difference: "Same" },
  { letter: "O", english: "oh", french: "o", sound: "oh", difference: "Same" },
  { letter: "P", english: "pee", french: "pé", sound: "pay", difference: "Similar" },
  { letter: "Q", english: "cue", french: "ku", sound: "koo", difference: "Similar" },
  { letter: "R", english: "ar", french: "erre", sound: "air", difference: "Very different! Guttural R" },
  { letter: "S", english: "ess", french: "esse", sound: "ess", difference: "Same" },
  { letter: "T", english: "tee", french: "té", sound: "tay", difference: "Similar" },
  { letter: "U", english: "you", french: "u", sound: "oo (lips rounded)", difference: "Very different! Round lips" },
  { letter: "V", english: "vee", french: "vé", sound: "vay", difference: "Similar" },
  { letter: "W", english: "double-u", french: "double-vé", sound: "doo-bluh-vay", difference: "Different name" },
  { letter: "X", english: "ex", french: "ixe", sound: "eeks", difference: "Similar" },
  { letter: "Y", english: "why", french: "i grec", sound: "ee-grek", difference: "Very different! 'Greek i'" },
  { letter: "Z", english: "zee/zed", french: "zède", sound: "zed", difference: "Similar to British English" },
];
