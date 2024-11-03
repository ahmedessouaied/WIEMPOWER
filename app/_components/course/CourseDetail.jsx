import React, { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  CheckCircle,
  XCircle,
  RefreshCcw,
  Trophy
} from 'lucide-react';

const BasicAddition = () => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState({ num1: 3, num2: 4 });
  const [showCelebration, setShowCelebration] = useState(false);
  const [viewingLesson, setViewingLesson] = useState(true);

  const lessonContent = `
    Welcome to Basic Addition! In this lesson, we’ll explore what addition is, why it’s important, and how to master it with simple examples. 
    Addition is one of the fundamental operations in mathematics and is used to calculate the total of two or more numbers combined together.

    ### What is Addition?
    Addition is the process of bringing two or more numbers together to make a larger number. It's represented by the plus sign (+).
    For example, if you have 2 apples and you get 3 more apples, you would add them together (2 + 3) to find out you now have 5 apples in total.

    ### Why Learn Addition?
    Addition is used in many everyday situations: from counting items, like apples or toys, to solving complex problems in science, finance, and technology.
    Learning how to add is the first step to understanding more advanced math concepts, so mastering it is essential.

    ### How to Add Numbers
    Adding numbers is straightforward! Just combine the values of each number. 
    Here are some quick examples to help you understand:
      - 1 + 1 = 2
      - 2 + 3 = 5
      - 4 + 5 = 9

    ### Examples to Try:
      - What is 6 + 4?
      - Can you figure out 7 + 3?
    
    After learning these basics, try the exercises below to test your skills! Remember: practice makes perfect!
  `;

  const generateNewProblem = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCurrentProblem({ num1, num2 });
    setAnswer('');
    setFeedback('');
  };

  const checkAnswer = () => {
    const correctAnswer = currentProblem.num1 + currentProblem.num2;
    const userAnswer = parseInt(answer);

    if (userAnswer === correctAnswer) {
      setFeedback('correct');
      setScore(score + 1);
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        generateNewProblem();
      }, 1500);
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-pink-200 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-pink-600" />
          </button>
          <h1 className="text-3xl font-bold text-pink-800">Basic Addition</h1>
        </div>

        {/* Toggle Button for Course and Exercise */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setViewingLesson(!viewingLesson)}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
          >
            {viewingLesson ? 'Go to Exercises' : 'View Lesson'}
          </button>
        </div>

        {/* Course Details Section */}
        {viewingLesson ? (
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Course Details</h2>
            <p className="text-pink-700 text-lg whitespace-pre-line">{lessonContent}</p>
          </div>
        ) : (
          <>
            {/* Progress Section */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-pink-800">Your Progress</h2>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-pink-500" />
                  <span className="text-pink-600">Score: {score}</span>
                </div>
              </div>
            </div>

            {/* Learning Section */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-pink-800 mb-6">Let's Practice!</h2>
              
              {/* Problem Display */}
              <div className="flex items-center justify-center gap-4 text-4xl font-bold mb-8">
                <span className="text-pink-600">{currentProblem.num1}</span>
                <Plus className="w-8 h-8 text-pink-400" />
                <span className="text-pink-600">{currentProblem.num2}</span>
                <span className="text-pink-400">=</span>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-24 h-16 text-center border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none"
                  placeholder="?"
                />
              </div>

              {/* Feedback Display */}
              {feedback && (
                <div className={`flex items-center justify-center gap-2 mb-6 ${
                  feedback === 'correct' ? 'text-pink-500' : 'text-red-500'
                }`}>
                  {feedback === 'correct' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <XCircle className="w-6 h-6" />
                  )}
                  <span className="text-lg font-medium">
                    {feedback === 'correct' ? 'Great job!' : 'Try again!'}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={checkAnswer}
                  className="px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors"
                >
                  Check Answer
                </button>
                <button
                  onClick={generateNewProblem}
                  className="px-6 py-3 bg-pink-200 text-pink-700 rounded-lg font-medium hover:bg-pink-300 transition-colors flex items-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5" />
                  New Problem
                </button>
              </div>
            </div>

            {/* Visual Aid Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-pink-800 mb-4">Visual Aid</h2>
              <div className="flex justify-center gap-8">
                {/* First Number Dots */}
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(currentProblem.num1)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-pink-500"></div>
                  ))}
                </div>
                <Plus className="w-6 h-6 text-pink-400 self-center" />
                {/* Second Number Dots */}
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(currentProblem.num2)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-pink-300"></div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Celebration Overlay */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 text-center">
              <Trophy className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pink-800">Excellent!</h3>
              <p className="text-pink-600">Keep up the great work!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicAddition;
