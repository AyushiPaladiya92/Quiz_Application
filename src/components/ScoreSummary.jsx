import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz, userAnswers } = location.state;

  const score = quiz.questions.reduce((acc, question, index) => {
    return acc + (question.correctAnswer === userAnswers[index] ? 1 : 0);
  }, 0);

  const percentage = (score / quiz.questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Your Score: {score} / {quiz.questions.length} ({percentage.toFixed(2)}%)
        </h2>
        <div className="space-y-4">
          {quiz.questions.map((question, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold">{question.text}</p>
              <p className="text-green-600">
                Correct Answer: {question.options[question.correctAnswer]}
              </p>
              <p
                className={
                  question.correctAnswer === userAnswers[index]
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                Your Answer: {question.options[userAnswers[index]]}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors duration-300"
        >
          Back to Quiz List
        </button>
      </div>
    </div>
  );
};

export default ScoreSummary;