import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <h1>このブログについて</h1>
            <p>このブログは、知識ゼロから自作OSを作る過程を記録するためのものです。</p>
            <p>著者はAI技術を活用し、皆さんと共に学びながら成長していくことを目指しています。</p>
            <p>ブログでは、プロジェクトの進捗や学んだこと、役立つリソースを共有していきます。</p>
        </Layout>
    );
};

export default About;