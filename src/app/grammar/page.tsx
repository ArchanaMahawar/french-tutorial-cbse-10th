import { getContentList } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export default function GrammarPage() {
  const topics = getContentList("grammar");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          Grammaire — Grammar Tutorials
        </h1>
        <p className="text-gray-600 mt-2">
          Master French grammar for CBSE exams: tenses, pronouns, adjectives,
          negation, question formation, and more. This section carries 30 marks
          in the board exam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t) => (
          <Card
            key={t.slug}
            href={`/grammar/${t.slug}`}
            title={t.title}
            description={t.description}
          />
        ))}
      </div>

      {topics.length === 0 && (
        <p className="text-gray-500 italic">
          No grammar content yet. Add MDX files to{" "}
          <code>content/grammar/</code>.
        </p>
      )}
    </div>
  );
}
