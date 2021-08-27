import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IMotionAnimationProps {
  children: ReactNode;
}

const MotionAnimation = ({ children }: IMotionAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionAnimation;
