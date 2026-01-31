export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-2xl animate-tick-glow">
            편
          </div>
        </div>
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-tick-pulse">
          편도훈
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-tick-bounce">
          프로그래머 | 개발자 | 창의적인 문제 해결사
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#profile"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl animate-tick-pulse"
          >
            더 알아보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition animate-tick-bounce"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
