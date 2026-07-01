import { getContentList } from "@/lib/content";
import { Card } from "@/components/ui/Card";

export default function PapersPage() {
  const papers = getContentList("papers");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-french-blue">
          Sample Papers — CBSE Pattern
        </h1>
        <p className="text-gray-600 mt-2">
          Practice with full-length 80-mark sample papers following the CBSE
          board exam pattern. Each paper includes a marking scheme and model
          answers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {papers.map((p) => (
          <Card
            key={p.slug}
            href={`/papers/${p.slug}`}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>

      {papers.length === 0 && (
        <p className="text-gray-500 italic">
          No sample papers yet. Add MDX files to{" "}
          <code>content/papers/</code>.
        </p>
      )}
    </div>
  );
}
