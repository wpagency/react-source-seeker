
import { BlogPost } from "@/types/blog";
import { securityPosts, threatIntelligencePosts, aiResearchPosts } from "./blogPostsCore";
import { designPosts, developmentPosts, marketingPosts } from "./blogPostsContent";

export const blogPosts: BlogPost[] = [
  ...securityPosts,
  ...threatIntelligencePosts,
  ...aiResearchPosts,
  ...designPosts,
  ...developmentPosts,
  ...marketingPosts
];


