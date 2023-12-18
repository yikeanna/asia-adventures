import React, { useState } from 'react';
import qAndAData from '../../data/q&a.json';
import './QuestionsAnswers.css'; // Import your CSS file

const QuestionAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`question-container ${isOpen ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <h4>{question}</h4>
      <div className="arrow-indicator">▶</div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const QuestionsAnswers = () => {
  const questions = qAndAData.map((qa, index) => (
    <QuestionAnswer
      key={index}
      question={qa.question}
      answer={qa.answer}
    />
  ));

  return (
    <div>
      <h2>Questions and Answers</h2>
      {questions}
    </div>
  );
};

export default QuestionsAnswers;
