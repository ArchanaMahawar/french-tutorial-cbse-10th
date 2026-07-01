import { getContentList } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export default function ChaptersPage() {
  const chapters = getContentList("chapters");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          Chapitres — Chapter Tutorials
        </h1>
        <p className="text-gray-600 mt-2">
          Study each lesson from <em>Entre Jeunes (Class X)</em> &amp; <em>Setrite French 10</em>.
          Includes vocabulary, key expressions, comprehension questions, and exercises.
          Board exam covers Leçons 2-8 and 10.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((ch) => (
          <Card
            key={ch.slug}
            href={`/chapters/${ch.slug}`}
            title={ch.title}
            description={ch.description}
            badge={`Leçon ${ch.order}`}
          />
        ))}
      </div>

      {chapters.length === 0 && (
        <p className="text-gray-500 italic">
          No chapter content yet. Add MDX files to <code>content/chapters/</code>.
        </p>
      )}
    </div>
  );
}
