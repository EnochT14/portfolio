import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  summary: string;
  image?: string;
};

type Post = {
  source: string;
  metadata: Metadata;
  slug: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: frontmatter } = matter(source);
  const content = await markdownToHTML(rawContent);
  const summary = frontmatter.summary ?? frontmatter.description ?? "";
  const metadata = {
    ...frontmatter,
    summary,
    description: summary,
  } as Metadata;
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

export async function getBlogPostMetadata() {
  const contentDir = path.join(process.cwd(), "content");
  return getMDXFiles(contentDir).map((file) => {
    const slug = path.basename(file, path.extname(file));
    const { data: metadata } = matter(
      fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf-8")
    );
    return { metadata, slug };
  });
}
