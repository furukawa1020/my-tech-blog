import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import React from 'react';

const PostPage = ({ content }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`);
  const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;

  return {
    props: {
      content,
    },
  };
};

export default PostPage;