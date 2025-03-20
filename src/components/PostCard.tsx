import React from 'react';

interface PostCardProps {
    title: string;
    summary: string;
    slug: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, summary, slug }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <a href={`/posts/${slug}`} className="read-more">続きを読む</a>
        </div>
    );
};

export default PostCard;