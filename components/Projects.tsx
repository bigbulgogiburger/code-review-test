export default function Projects() {
  const projects = [
    {
      title: '혁신적인 웹 플랫폼',
      description: '사용자 경험을 개선하는 모던 웹 애플리케이션',
      tags: ['React', 'Next.js', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI 기반 솔루션',
      description: '머신러닝을 활용한 스마트 자동화 시스템',
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '모바일 앱',
      description: '크로스 플랫폼 모바일 애플리케이션 개발',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '오픈소스 프로젝트',
      description: '개발자 커뮤니티를 위한 유용한 도구',
      tags: ['JavaScript', 'Node.js', 'CLI'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 text-gray-900 dark:text-white">프로젝트</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              ></div>
              <div className="p-8">
                <h3 className="text-2xl mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
