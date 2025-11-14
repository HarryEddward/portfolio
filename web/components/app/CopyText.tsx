import { ReactNode, useState } from "react";
import * as motion from "motion/react-client";
import { FiCheck, FiCopy } from "react-icons/fi";
import { AnimatePresence } from "motion/react";

interface CopyTextProps {
  children: string | ReactNode;
}

const CopyText: React.FC<CopyTextProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1200); // Duración del efecto
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="inline-flex items-center gap-2 cursor-pointer select-none relative" onClick={handleCopy}>
      <span>{children}</span>

      {/* Contenedor de icono con posición relativa */}
      <div className="relative w-5 h-5">
        {/* Ícono de copiar */}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: copied ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 text-gray-400 flex items-center justify-center"
        >
          <FiCopy size={20} />
        </motion.span>

        {/* Ícono de check */}
        <AnimatePresence>
          {copied && (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="absolute inset-0 text-green-500 flex items-center justify-center"
            >
              <FiCheck size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CopyText;
