"use client";

import { useState } from "react";
import { FileText, ExternalLink, Calendar, Download } from "lucide-react";

interface PaperLink {
  label: string;
  url: string;
  type: "pdf" | "external";
}

interface PaperInfo {
  year: number;
  title: string;
  description: string;
  marks: string;
  sections: string[];
  links: PaperLink[];
}

const papers: PaperInfo[] = [
  {
    year: 2025,
    title: "CBSE Class 10 French Board Paper 2025",
    description: "Latest board exam — 50% competency-based questions, updated pattern.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "Question Paper + Answer Key (Scribd)", url: "https://www.scribd.com/document/896268206/CBSE-Class-10-French-Public-Exam-2025-Question-Paper-With-Answer-Key-Marking-Scheme-PDF-Download-1", type: "external" },
      { label: "CBSE Official Papers Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
      { label: "SaveMyExams — Board Paper", url: "https://www.savemyexams.com/class-10/french/cbse/past-papers/board-exam-paper/", type: "external" },
    ],
  },
  {
    year: 2024,
    title: "CBSE Class 10 French Board Paper 2024",
    description: "Board exam with MCQs and competency-based questions. Multiple sets available.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "Question Paper Set 3 (Scribd PDF)", url: "https://www.scribd.com/document/760559058/CBSE-Class-10-French-Question-Paper-2024-3", type: "pdf" },
      { label: "CBSE Official Papers Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
      { label: "JagranJosh — All Sets PDF", url: "https://www.jagranjosh.com/articles/cbse-class-10-previous-year-question-papers-all-subjects-pdf-download-1800005279-1", type: "external" },
      { label: "SaveMyExams — Past Papers", url: "https://www.savemyexams.com/class-10/french/cbse/past-papers/", type: "external" },
    ],
  },
  {
    year: 2023,
    title: "CBSE Class 10 French Board Paper 2023",
    description: "Return to full 80-mark exam post-pandemic. Standard 4-section format.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "Question Paper Set 4 (Scribd PDF)", url: "https://www.scribd.com/document/700234584/class-10-french-cbse-qp-2023", type: "pdf" },
      { label: "CareerIndia — All Years", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "SaveMyExams — 2023 Paper", url: "https://www.savemyexams.com/class-10/french/cbse/past-papers/board-exam-paper/", type: "external" },
    ],
  },
  {
    year: 2022,
    title: "CBSE Class 10 French Board Paper 2022 (Term 2)",
    description: "Split-year format: Term 1 (MCQ 40 marks) + Term 2 (Subjective 40 marks).",
    marks: "40 Marks (Term 2) | 2 Hours",
    sections: ["Compréhension (5)", "Écriture (10)", "Grammaire (15)", "Textbook (10)"],
    links: [
      { label: "CareerIndia — 2022 Papers", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Papers Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
      { label: "SaveMyExams — Past Papers", url: "https://www.savemyexams.com/class-10/french/cbse/past-papers/", type: "external" },
    ],
  },
  {
    year: 2021,
    title: "CBSE Class 10 French Board Paper 2021",
    description: "COVID year — optional board exam. Reduced syllabus (30% deleted).",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "CareerIndia — 2021 Paper", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
    ],
  },
  {
    year: 2020,
    title: "CBSE Class 10 French Board Paper 2020",
    description: "Full board exam held before COVID lockdown. Standard 80-mark format.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "French Class 10 Paper (Scribd PDF)", url: "https://www.scribd.com/document/664573382/French-Class-10-paper", type: "pdf" },
      { label: "CareerIndia — 2020 Paper", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "JagranJosh — Previous Papers", url: "https://www.jagranjosh.com/articles/cbse-class-10-previous-year-question-papers-all-subjects-pdf-download-1800005279-1", type: "external" },
    ],
  },
  {
    year: 2019,
    title: "CBSE Class 10 French Board Paper 2019",
    description: "Standard 80-mark paper. Good for practice with traditional question format.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "CareerIndia — 2019 Paper", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
      { label: "SaveMyExams — Past Papers", url: "https://www.savemyexams.com/class-10/french/cbse/past-papers/", type: "external" },
    ],
  },
  {
    year: 2018,
    title: "CBSE Class 10 French Board Paper 2018",
    description: "First year of mandatory board exams (reintroduced). Standard pattern.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "CareerIndia — 2018 Paper", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
    ],
  },
  {
    year: 2017,
    title: "CBSE Class 10 French Paper 2017 (SA-II)",
    description: "School-level exam year. 80-mark subjective paper format.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "CareerIndia — 2017 Paper", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
    ],
  },
  {
    year: 2016,
    title: "CBSE Class 10 French Paper 2016 (SA-II)",
    description: "School-based assessment year. 80-mark SA-II format paper.",
    marks: "80 Marks | 3 Hours",
    sections: ["Compréhension (10)", "Écriture (20)", "Grammaire (30)", "Textbook (20)"],
    links: [
      { label: "CareerIndia — All Years", url: "http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html", type: "external" },
      { label: "CBSE Official Portal", url: "https://www.cbse.gov.in/cbsenew/question-paper.html", type: "external" },
    ],
  },
];

export default function PreviousPapersPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredPapers = selectedYear
    ? papers.filter((p) => p.year === selectedYear)
    : papers;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          📄 Previous Year Board Papers (2016–2025)
        </h1>
        <p className="text-gray-600 mt-2">
          Download and practice with last 10 years of CBSE Class 10 French board
          exam question papers with PDF links and answer keys.
        </p>
      </div>

      {/* Tips Card */}
      <div className="card bg-green-50 border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">💡 How to Use Previous Papers</h3>
        <ul className="text-sm text-green-900 space-y-1">
          <li>• Set a timer for 3 hours and attempt the paper without any help</li>
          <li>• Check your answers against the marking scheme</li>
          <li>• Note which sections you lose marks in — focus revision there</li>
          <li>• Start with recent papers (2023–2025) as they follow the latest pattern</li>
          <li>• Papers before 2022 follow a slightly different pattern but grammar questions remain similar</li>
        </ul>
      </div>

      {/* Year Filter */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-gray-600">Filter by year:</span>
        <button
          onClick={() => setSelectedYear(null)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedYear === null
              ? "bg-french-blue text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {papers.map((p) => (
          <button
            key={p.year}
            onClick={() => setSelectedYear(p.year)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedYear === p.year
                ? "bg-french-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {p.year}
          </button>
        ))}
      </div>

      {/* Papers List */}
      <div className="space-y-4">
        {filteredPapers.map((paper) => (
          <div key={paper.year} className="card hover:shadow-md transition-shadow">
            <div className="space-y-3">
              {/* Title row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-french-blue" />
                    <span className="text-sm font-bold text-french-blue">{paper.year}</span>
                    <span className="text-xs bg-blue-100 text-french-blue px-2 py-0.5 rounded">
                      {paper.marks}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{paper.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{paper.description}</p>
                </div>
              </div>

              {/* Sections */}
              <div className="flex flex-wrap gap-2">
                {paper.sections.map((section, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {section}
                  </span>
                ))}
              </div>

              {/* Download Links */}
              <div className="border-t pt-3">
                <p className="text-xs font-medium text-gray-500 uppercase mb-2">
                  📥 Download / View Links
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                        link.type === "pdf"
                          ? "bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                          : "bg-blue-50 border-blue-200 text-french-blue hover:bg-blue-100"
                      }`}
                    >
                      {link.type === "pdf" ? (
                        <Download className="w-3.5 h-3.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="card bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-french-blue mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          More Resources for Previous Papers
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <a
            href="https://www.cbse.gov.in/cbsenew/question-paper.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
          >
            <ExternalLink className="w-4 h-4 text-french-blue shrink-0" />
            <div>
              <p className="font-medium">CBSE Official Website</p>
              <p className="text-xs text-gray-500">cbse.gov.in — Official question papers</p>
            </div>
          </a>
          <a
            href="https://www.savemyexams.com/class-10/french/cbse/past-papers/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
          >
            <ExternalLink className="w-4 h-4 text-french-blue shrink-0" />
            <div>
              <p className="font-medium">SaveMyExams</p>
              <p className="text-xs text-gray-500">Past papers with mark schemes</p>
            </div>
          </a>
          <a
            href="http://www4.careerindia.com/cbse-class-10-french-question-papers-sq24.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
          >
            <ExternalLink className="w-4 h-4 text-french-blue shrink-0" />
            <div>
              <p className="font-medium">CareerIndia</p>
              <p className="text-xs text-gray-500">All years — free PDF download</p>
            </div>
          </a>
          <a
            href="https://www.jagranjosh.com/articles/cbse-class-10-previous-year-question-papers-all-subjects-pdf-download-1800005279-1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow"
          >
            <ExternalLink className="w-4 h-4 text-french-blue shrink-0" />
            <div>
              <p className="font-medium">JagranJosh</p>
              <p className="text-xs text-gray-500">2020–2025 papers with solutions</p>
            </div>
          </a>
        </div>
      </div>

      {/* Pattern Timeline */}
      <div className="card">
        <h3 className="font-semibold text-french-blue mb-4">📅 Exam Pattern Changes Over the Years</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2025-26</span>
            <p>80 marks, 50% competency-based, 20% MCQ, 30% short/long answer. 3 hours.</p>
          </div>
          <div className="flex gap-3 border-t pt-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2023-24</span>
            <p>Single full paper (80 marks). Standard 4-section format. 3 hours.</p>
          </div>
          <div className="flex gap-3 border-t pt-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2021-22</span>
            <p>Split into Term 1 (MCQ, 40 marks) + Term 2 (Subjective, 40 marks). 90 min each.</p>
          </div>
          <div className="flex gap-3 border-t pt-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2020-21</span>
            <p>COVID year — optional exam. Reduced syllabus (30% deleted). 80 marks, 3 hours.</p>
          </div>
          <div className="flex gap-3 border-t pt-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2018-20</span>
            <p>Mandatory board exams reintroduced. Full 80-mark paper, standard format.</p>
          </div>
          <div className="flex gap-3 border-t pt-3">
            <span className="font-bold text-french-blue w-20 shrink-0">2016-17</span>
            <p>School-based assessment (SA-II). Same structure, school-level administration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
