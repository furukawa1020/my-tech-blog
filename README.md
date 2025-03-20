# README.md

# My Tech Blog

このプロジェクトは、週刊知識ゼロから作る自作OSの世界withAIに関するブログです。ブログでは、最新の投稿、写真、動画、連絡先情報を提供し、Netlifyを使用してデプロイします。

## 構成

- **src/components**: ブログの各コンポーネントを含むディレクトリ
  - `Header.tsx`: ヘッダーコンポーネント
  - `Footer.tsx`: フッターコンポーネント
  - `Layout.tsx`: ページレイアウトコンポーネント
  - `PostCard.tsx`: 投稿カードコンポーネント
  - `ContactForm.tsx`: 連絡先フォームコンポーネント

- **src/pages**: 各ページを定義するディレクトリ
  - `index.tsx`: ホームページ
  - `posts/[...slug].tsx`: 動的投稿ページ
  - `about.tsx`: ブログの「About」ページ
  - `contact.tsx`: ブログの「Contact」ページ

- **src/posts**: ブログ投稿を含むディレクトリ
  - `sample-post.mdx`: サンプル投稿

- **src/styles**: スタイルシートを含むディレクトリ
  - `globals.css`: グローバルスタイル

- **public/assets**: 静的アセット（画像、動画など）

## セットアップ手順

1. リポジトリをクローンします。
2. 依存関係をインストールします。
   ```bash
   npm install
   ```
3. 開発サーバーを起動します。
   ```bash
   npm run dev
   ```
4. ブラウザで `http://localhost:3000` にアクセスします。

## デプロイ

このプロジェクトはNetlifyを使用してデプロイされます。Netlifyの設定は `netlify.toml` に記載されています。

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。