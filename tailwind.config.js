/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ← src 配下の全ての JS/JSX/TS/TSX ファイルをスキャン
    "./public/index.html"          // ← index.html も必要に応じて
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#A3CEF1',   // 優しい水色
        softPink: '#F7C6C7',   // 優しいピンク
        softGreen: '#C6E2D6',  // 優しい緑
        softCream: '#FAF7F1', // ← クリーム色を追加
      },
    },
  },
  plugins: [],
}

