export default function Profile() {
  return (
    <section id="profile" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 text-gray-900 dark:text-white">프로필</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 dark:text-white mb-3">소개</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  안녕하세요! 편도훈입니다. 저는 열정적인 프로그래머로서 새로운 기술을 배우고
                  혁신적인 솔루션을 만드는 것을 좋아합니다. 코드를 통해 세상을 더 나은 곳으로
                  만들기 위해 노력하고 있습니다.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    전문 분야
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      풀스택 개발
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      웹 애플리케이션 개발
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      모바일 앱 개발
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    관심사
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      오픈소스 기여
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      최신 기술 트렌드
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      커뮤니티 활동
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
