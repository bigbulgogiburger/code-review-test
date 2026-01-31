export default function TechStack() {
  const technologies = [
    {
      category: '프론트엔드',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: '백엔드',
      skills: ['Node.js', 'Python', 'Java', 'Express', 'Django'],
    },
    {
      category: '데이터베이스',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    },
    {
      category: '도구 & 기타',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 text-gray-900 dark:text-white">기술 스택</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl mb-4 text-blue-600 dark:text-blue-400">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
