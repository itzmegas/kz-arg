"use client";

import { useQueryPosts } from "@/api";

interface PostListProps {}
const PostList = ({}: PostListProps) => {
  const { data } = useQueryPosts({});
  console.log("🚀 ~ PostList ~ data:", data);
  return <div></div>;
};

export default PostList;
