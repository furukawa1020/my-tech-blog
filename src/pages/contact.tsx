import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <Layout>
            <h1>お問い合わせ</h1>
            <p>ご質問やご意見がございましたら、以下のフォームからお気軽にご連絡ください。</p>
            <ContactForm />
        </Layout>
    );
};

export default ContactPage;