import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import langJava from "highlight.js/lib/languages/java";
import langGroovy from "highlight.js/lib/languages/groovy";
import langGradle from "highlight.js/lib/languages/gradle";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          languages: {
            java: langJava,
            groovy: langGroovy,
            gradle: langGradle,
          },
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
