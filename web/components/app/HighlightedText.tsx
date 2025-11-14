// components/app/HighlightedText.tsx
"use client";

import React from 'react';
import * as motion from "motion/react-client";

export const HighlightedText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  
  return (
    <motion.span
      className="relative isolate" // 'isolate' es bueno para el apilamiento
      
      // 1. Aplicamos el fondo CSS en lugar del span absoluto
      style={{
        // Usamos un degradado. Es yellow-300 (FDE047) con opacidad.
        backgroundImage: 'linear-gradient(to right, rgba(253, 224, 71, 0.5), rgba(253, 224, 71, 0.5))',
        backgroundRepeat: 'no-repeat',
        
        // 2. El truco: Animaremos el 'backgroundSize'
        // Empezará en 0% de ancho y 80% de alto
        backgroundSize: '0% 85%',
        
        // 3. Lo posicionamos ligeramente hacia abajo
        backgroundPosition: '0% 70%',
      }}
      
      // 4. 'initial' y 'whileInView' ahora animan el 'backgroundSize'
      initial={{ 
        backgroundSize: "0% 80%" 
      }}
      whileInView={{ 
        backgroundSize: "100% 80%" 
      }}
      
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      
    >
      {children}
    </motion.span>
  );
};