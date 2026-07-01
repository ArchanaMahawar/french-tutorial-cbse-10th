import { getContentItem, getSlugs } from "@/lib/content";
import { MDXContent } from "@/components/ui/MDXContent";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getSlugs("chapters").map((slug) => ({ slug }));
}

export default function ChapterPage({ params }: Props) {
  const item = getContentItem("chapters", params.slug);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/chapters"
        className="inline-flex items-center gap-1 text-sm text-french-blue hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Tous les chapitres
      </Link>

      <h1 className="text-3xl font-bold text-french-blue">{item.meta.title}</h1>

      <article className="prose prose-french max-w-none">
        <MDXContent source={item.content} />
      </article>
    </div>
  );
}
