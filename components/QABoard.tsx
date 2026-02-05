'use client';

import { useState } from 'react';

interface Question {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  content: string;
  author: string;
  createdAt: string;
}

export default function QABoard() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      title: 'Next.js에서 API 라우트를 어떻게 만드나요?',
      content: 'Next.js의 app 디렉토리에서 API 라우트를 설정하는 방법을 알고 싶습니다.',
      author: '사용자1',
      createdAt: '2024-01-30',
      answers: [
        {
          id: 1,
          content: 'app/api 디렉토리에 route.ts 파일을 생성하면 됩니다.',
          author: '답변자1',
          createdAt: '2024-01-30',
        },
      ],
    },
    {
      id: 2,
      title: 'TypeScript로 React 컴포넌트를 어떻게 타입핑하나요?',
      content: 'React 컴포넌트에 TypeScript 타입을 적용하는 베스트 프랙티스를 알고 싶습니다.',
      author: '사용자2',
      createdAt: '2024-01-29',
      answers: [],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [newAnswer, setNewAnswer] = useState('');

  const handleAskQuestion = () => {
    if (newQuestionTitle.trim() && newQuestion.trim()) {
      const question: Question = {
        id: Math.max(...questions.map(q => q.id), 0) + 1,
        title: newQuestionTitle,
        content: newQuestion,
        author: '새 사용자',
        createdAt: new Date().toISOString().split('T')[0],
        answers: [],
      };
      setQuestions([question, ...questions]);
      setNewQuestion('');
      setNewQuestionTitle('');
    }
  };

  const handleAddAnswer = (questionId: number) => {
    if (newAnswer.trim()) {
      setQuestions(
        questions.map(q => {
          if (q.id === questionId) {
            return {
              ...q,
              answers: [
                ...q.answers,
                {
                  id: Math.max(...q.answers.map(a => a.id), 0) + 1,
                  content: newAnswer,
                  author: '답변자',
                  createdAt: new Date().toISOString().split('T')[0],
                },
              ],
            };
          }
          return q;
        })
      );
      setNewAnswer('');
      setExpandedQuestion(null);
    }
  };

  return (
    <section
      id="qa-board"
      className="min-h-screen py-16 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Q&A 게시판
        </h2>

        {/* 질문 작성 섹션 */}
        <div className="mb-8 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            질문하기
          </h3>
          <input
            type="text"
            placeholder="질문 제목을 입력하세요"
            value={newQuestionTitle}
            onChange={(e) => setNewQuestionTitle(e.target.value)}
            className="w-full p-3 mb-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            data-testid="question-title-input"
          />
          <textarea
            placeholder="질문 내용을 입력하세요"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="w-full p-3 mb-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={4}
            data-testid="question-content-textarea"
          />
          <button
            onClick={handleAskQuestion}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
            data-testid="ask-question-button"
          >
            질문 올리기
          </button>
        </div>

        {/* 질문 목록 */}
        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              data-testid={`question-${question.id}`}
            >
              <div
                className="cursor-pointer"
                onClick={() =>
                  setExpandedQuestion(
                    expandedQuestion === question.id ? null : question.id
                  )
                }
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {question.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {question.content}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{question.author}</span>
                  <span>{question.createdAt}</span>
                </div>
                <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                  답변: {question.answers.length}개
                </div>
              </div>

              {/* 확장된 답변 섹션 */}
              {expandedQuestion === question.id && (
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                  <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                    답변 ({question.answers.length})
                  </h4>

                  {/* 기존 답변 표시 */}
                  {question.answers.map((answer) => (
                    <div
                      key={answer.id}
                      className="p-4 mb-4 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600"
                      data-testid={`answer-${question.id}-${answer.id}`}
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {answer.content}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {answer.author} · {answer.createdAt}
                      </div>
                    </div>
                  ))}

                  {/* 답변 작성 */}
                  <div className="mt-4">
                    <textarea
                      placeholder="답변을 입력하세요"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      className="w-full p-3 mb-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      rows={3}
                      data-testid={`answer-input-${question.id}`}
                    />
                    <button
                      onClick={() => handleAddAnswer(question.id)}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-bold"
                      data-testid={`submit-answer-button-${question.id}`}
                    >
                      답변 등록
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
