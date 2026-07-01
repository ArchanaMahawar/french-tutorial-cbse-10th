import { quizData } from "@/lib/quiz-data";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(quizData).map((slug) => ({ slug }));
}

export default function QuizDetailPage({ params }: Props) {
  const quiz = quizData[params.slug];
  if (!quiz) notFound();

  return (
    <div className="space-y-6">
      <Link
        href="/quiz"
        className="inline-flex items-center gap-1 text-sm text-french-blue hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> All Quizzes
      </Link>

      <QuizEngine title={quiz.title} questions={quiz.questions} />
    </div>
  );
}
