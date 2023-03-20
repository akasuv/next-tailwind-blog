import ReactMarkdown from "react-markdown";

const getMarkdown = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch markdown");
  }

  return res.text();
};

export default async function Home() {
  const markdown = await getMarkdown(
    "https://github.com/akasuv/next-tailwind-blog/blob/main/README.md"
  );

  return (
    <article className="prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}
