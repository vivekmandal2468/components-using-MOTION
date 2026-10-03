
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const buttonItems = [
  { title: "Home", href: "" },
  { title: "About", href: "" },
  { title: "Contact", href: "" },
  { title: "Login", href: "" },
];

const ButtonGlide = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-20 flex justify-center">
      <nav
        onMouseLeave={() => setHovered(null)}
        className="flex items-center gap-1 rounded-full bg-neutral-100 p-1.5 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
      >
        {buttonItems.map((item, idx) => (
          <Link
            key={item.title}
            to={item.href}
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-xs font-medium transition-colors"
          >
            {/* Sliding Background Capsule */}
            {hovered === idx && (
              <motion.div
                layoutId="hover-pill"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white"
              />
            )}

            {/* Label */}
            <span
              className={`relative z-10 block transition-colors duration-150 ${
                hovered === idx
                  ? "text-white dark:text-neutral-900"
                  : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ButtonGlide;
