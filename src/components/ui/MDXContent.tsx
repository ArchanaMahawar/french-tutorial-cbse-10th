import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

const components = {
  // Custom components available inside MDX files
  Vocab: ({ word, meaning }: { word: string; meaning: string }) => (
    <span className="inline-block bg-blue-50 border border-blue-200 rounded px-2 py-0.5 text-sm mr-2 mb-1">
      <strong>{word}</strong> — {meaning}
    </span>
  ),
  Tip: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4 rounded-r">
      <p className="font-medium text-amber-800 text-sm">💡 Tip</p>
      <div className="text-sm text-amber-900 mt-1">{children}</div>
    </div>
  ),
  ExamNote: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-red-50 border-l-4 border-french-red p-4 my-4 rounded-r">
      <p className="font-medium text-red-800 text-sm">📝 Important for Exam</p>
      <div className="text-sm text-red-900 mt-1">{children}</div>
    </div>
  ),
};

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={components} />;
}
