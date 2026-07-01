import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description?: string;
  badge?: string;
}

export function Card({ href, title, description, badge }: CardProps) {
  return (
    <Link href={href} className="card group">
      {badge && (
        <span className="inline-block text-xs font-medium bg-blue-100 text-french-blue px-2 py-0.5 rounded mb-2">
          {badge}
        </span>
      )}
      <h3 className="font-semibold group-hover:text-french-blue transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
    </Link>
  );
}
