"use client";

import { useState, useEffect } from "react";
import CategorySelection from "../components/CategorySelection";
import Flashcard from "../components/Flashcard";
import type { IFlashCard } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import shuffleArray from "@/lib/shuffle";

const Home = () => {
  const [flashcards, setFlashcards] = useState<IFlashCard[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<IFlashCard[]>([]);

  useEffect(() => {
    import("../data/flashcards.json").then((data) => {
      setFlashcards(data.default);
    });
  }, []);

  const categories = Array.from(
    new Set(flashcards.map((card) => card.category))
  );

  const handleCategorySelect = (category: string) => {
    const categoryCards = flashcards.filter(
      (card) => card.category === category
    );
    setShuffledCards(shuffleArray(categoryCards));
    setSelectedCategory(category);
    setCurrentCardIndex(0);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentCardIndex(0);
    setShuffledCards([]);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full relative"
      >
        {selectedCategory && (
          <motion.button
            className="absolute top-4 left-4 text-neutral-500 hover:text-neutral-700 transition-colors duration-300"
            onClick={handleBackToCategories}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={24} />
          </motion.button>
        )}
        <h1 className="text-4xl font-bold text-center mb-8 text-neutral-800">
          Flashcard System
        </h1>
        <AnimatePresence mode="wait">
          {selectedCategory ? (
            <motion.div
              key="flashcard"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Flashcard
                flashcard={shuffledCards[currentCardIndex]}
                onNext={handleNextCard}
                currentIndex={currentCardIndex + 1}
                totalCards={shuffledCards.length}
              />
            </motion.div>
          ) : (
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CategorySelection
                categories={categories}
                onSelectCategory={handleCategorySelect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Home;
