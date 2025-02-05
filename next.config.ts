// @ts-check
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  // ReactStrictMode: https://ja.react.dev/reference/react/StrictMode
  reactStrictMode: true,

  // 環境変数設定
  env: {
    API_URL: 'https://api.example.com',
  },

  // 外部サーバからのアセット取得: https://nextjs.org/docs/app/api-reference/config/next-config-js/images
  images: {
    loader: 'akamai',
    loaderFile: './hoge/image/akamaiLoader.js',
  },

  // ウェブパック設定
  // webpack: config => {
  //   // サードパーティのライブラリをカスタム設定する
  //   config.resolve.alias['@components'] = path.join(__dirname, 'components');
  //   return config;
  // },

  // リダイレクト設定 古いページのパスから新しいページに飛ばしたい
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
