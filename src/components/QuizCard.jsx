import React from 'react';

const QuizCard = ({ quiz, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <img src={quiz.image} alt={quiz.title} className="w-full h-75 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <button
          onClick={() => onSelect(quiz.id)}
          className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-500 transition-colors duration-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;