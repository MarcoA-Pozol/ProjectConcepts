import React from 'react';

const SurvivalCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      {/* 
        - p-6: Padding
        - md:max-w-md: En pantallas medianas el ancho es limitado (Responsividad)
        - animate-fade-in: Animación del plugin de Midu
      */}
      <div className="bg-amber-50 p-6 rounded-lg border-4 border-double border-stone-800 shadow-2xl 
                      max-w-xs md:max-w-md animate-fade-in-up">
        
        <h2 className="text-2xl font-bold text-stone-900 mb-2 font-serif">
          Estado de Cordura
        </h2>
        
        <p className="text-stone-700 text-sm md:text-base">
          Cuidado con la oscuridad... Wilson necesita fuego pronto.
        </p>

        {/* Ejemplo de interactividad y responsividad en el botón */}
        <button className="mt-4 w-full md:w-auto px-4 py-2 bg-red-800 text-white rounded 
                           hover:bg-red-700 transition-colors animate-pulse-slow">
          Encender Antorcha
        </button>
      </div>
    </div>
  );
};

export default SurvivalCard;
