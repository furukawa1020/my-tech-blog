import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/api';

const Home = ({ posts }) => {
  return (
    <Layout>
      <h1>私のテクノロジーブログ</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;