"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IFlashCard } from "../types";

interface FlashcardProps {
  flashcard: IFlashCard;
  onNext: () => void;
  currentIndex: number;
  totalCards: number;
}

const Flashcard = ({
  flashcard,
  onNext,
  currentIndex,
  totalCards,
}: FlashcardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsFlipped(true);
  };

  const handleNextClick = () => {
    setSelectedAnswer(null);
    setIsFlipped(false);
    onNext();
  };

  return (
    <div>
      <div className="text-neutral-600 text-sm mb-2 text-right">
        Card {currentIndex} of {totalCards}
      </div>
      <motion.div
        className="bg-neutral-100 rounded-xl p-6 mb-6 h-64 flex items-center justify-center shadow-md"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.h2
              key="question"
              className="text-2xl font-semibold text-center text-neutral-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {flashcard.question}
            </motion.h2>
          ) : (
            <motion.div
              key="answer"
              className="text-2xl font-semibold text-center text-neutral-800"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 180 }}
              exit={{ opacity: 0, rotateY: 180 }}
            >
              {flashcard.correct_answer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {flashcard.answers.map((answer, index) => (
          <motion.button
            key={index}
            className={`py-3 px-4 rounded-lg transition duration-300 ${
              selectedAnswer
                ? answer === flashcard.correct_answer
                  ? "bg-green-500 text-white"
                  : answer === selectedAnswer
                  ? "bg-red-500 text-white"
                  : "bg-neutral-200 text-neutral-500"
                : "bg-neutral-200 hover:bg-neutral-300 text-neutral-800"
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {answer}
          </motion.button>
        ))}
      </div>
      <div className="flex justify-end">
        <motion.button
          className="bg-neutral-700 hover:bg-neutral-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          onClick={handleNextClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next Question
        </motion.button>
      </div>
    </div>
  );
};

export default Flashcard;
