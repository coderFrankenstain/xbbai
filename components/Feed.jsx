"use client";
import React, { useEffect, useState } from "react";
import ToolCard from "./ToolCard";
const CardList = ({ data, handleClick }) => {
  return (
    <div
      className="
     tools_layout"
    >
      {data.map((post) => (
        <ToolCard
          key={post.id}
          post={post}
          handleClick={handleClick}
        ></ToolCard>
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/tool", { method: "GET" });
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <CardList data={posts} handleClick={() => {}}></CardList>
    </section>
  );
};

export default Feed;
