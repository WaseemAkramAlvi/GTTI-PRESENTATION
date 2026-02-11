
import React from 'react';
import { motion } from 'framer-motion';

interface SlideLayoutProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ id, title, children, className = '', bgImage }) => {
  return (
    <section 
      id={id} 
      className={`snap-slide relative w-full overflow-hidden flex flex-col p-8 md:p-12 lg:p-16 ${className}`}
      style={bgImage ? { 
        backgroundImage: `linear-gradient(rgba(11, 93, 59, 0.85), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 border-l-8 border-[#C9A227] pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B5D3B] drop-shadow-sm">
            {title}
          </h2>
        </motion.div>
      )}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SlideLayout;
