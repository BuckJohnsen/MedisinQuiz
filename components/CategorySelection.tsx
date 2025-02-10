import { motion } from "framer-motion";

interface CategorySelectionProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategorySelection = ({
  categories,
  onSelectCategory,
}: CategorySelectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-50"
          onClick={() => onSelectCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategorySelection;
