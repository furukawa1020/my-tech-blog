import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <h1>週刊知識ゼロから作る自作OSの世界withAI</h1>
            <nav>
                <ul>
                    <li><Link href="/">ホーム</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;