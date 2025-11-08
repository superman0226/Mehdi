/** @type {import('tailwindcss').Config} */
module.exports = {
  // 确保这里指向您的 HTML 文件，以便 Tailwind 知道哪些样式被使用
  content: [
    "./index.html",
    // 如果您有其他 .js 文件中使用 Tailwind 类名，也请添加进来
    "./articles.js", 
  ],
  theme: {
    extend: {
      // 保持您原有的自定义主题色
      colors: {
        primary: '#1070ff',
        accent: '#10b981',
      }
    },
  },
  plugins: [],
}