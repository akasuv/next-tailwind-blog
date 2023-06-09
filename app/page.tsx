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
    "https://raw.githubusercontent.com/akasuv/next-tailwind-blog/main/README.md"
  );

  return (
    <article className="prose mx-auto py-8">
      <p className="text-informative600">Hi</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}
