import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ContentMeta {
  slug: string;
  title: string;
  order: number;
  description?: string;
  tags?: string[];
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

/**
 * Get all content items from a subdirectory of /content.
 */
export function getContentList(section: string): ContentMeta[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || filename.replace(/\.mdx$/, ""),
        order: data.order ?? 99,
        description: data.description,
        tags: data.tags,
      };
    })
    .sort((a, b) => a.order - b.order);
}

/**
 * Get a single content item by section and slug.
 */
export function getContentItem(section: string, slug: string): ContentItem | null {
  const filePath = path.join(contentDir, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || slug,
      order: data.order ?? 99,
      description: data.description,
      tags: data.tags,
    },
    content,
  };
}

/**
 * Get all slugs for a section (used by generateStaticParams).
 */
export function getSlugs(section: string): string[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
