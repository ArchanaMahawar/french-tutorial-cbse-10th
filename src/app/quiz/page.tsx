import Link from "next/link";

const quizTopics = [
  { slug: "grammar-tenses", title: "Les Temps (Tenses)", questions: 15 },
  { slug: "grammar-pronouns", title: "Les Pronoms (Pronouns)", questions: 10 },
  { slug: "grammar-adjectives", title: "Les Adjectifs (Adjectives)", questions: 10 },
  { slug: "grammar-negation", title: "La Négation (Negation)", questions: 10 },
  { slug: "vocabulary-ch1-4", title: "Vocabulaire — Leçons 1-4", questions: 20 },
  { slug: "vocabulary-ch5-8", title: "Vocabulaire — Leçons 5-8", questions: 20 },
  { slug: "vocabulary-ch9-12", title: "Vocabulaire — Leçons 9-12", questions: 20 },
  { slug: "comprehension", title: "Compréhension (Reading)", questions: 10 },
];

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          Self-Assessment Quiz
        </h1>
        <p className="text-gray-600 mt-2">
          Test your knowledge with interactive quizzes. Get instant feedback and
          track your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizTopics.map((quiz) => (
          <Link key={quiz.slug} href={`/quiz/${quiz.slug}`} className="card group">
            <h3 className="font-semibold group-hover:text-french-blue transition-colors">
              {quiz.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {quiz.questions} questions
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
