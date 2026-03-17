"use client";

import type { ArticleSection } from "@/lib/gakusaiArticles";

interface ArticleTableOfContentsProps {
  sections: ArticleSection[];
}

export function ArticleTableOfContents({ sections }: ArticleTableOfContentsProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex flex-col items-start text-left">
      <p className="mb-5 text-sm font-medium tracking-wider text-white/90">
        目次
      </p>
      <ul className="flex flex-col items-start space-y-3 list-none pl-0">
        {sections.map((section) => (
          <li key={section.id} className="text-left">
            <button
              type="button"
              onClick={() => handleClick(section.id)}
              className="text-left text-base text-white transition-colors hover:text-white/90 hover:underline"
            >
              {section.heading}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
