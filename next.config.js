module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // 画像のドメインを指定
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // 環境変数の設定
  },
};