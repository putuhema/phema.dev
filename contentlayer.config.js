import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readTime from "reading-time";

const computedFields = {
  path: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "./projects/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
    url: {
      type: "string",
    },
    repository: {
      type: "string",
      required: true,
    },
    techstack: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

export const Writing = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: "./writing/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    ...computedFields,
    readTime: {
      type: "string",
      resolve: (doc) => readTime(doc.body.raw).text,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Project, Writing],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "vitesse-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
