import React from 'react';
import verified from '../assets/verfified.png';

const PopUp = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img src={verified} className="mx-auto mb-4 w-20"/>
        <h4 className="text-lg font-semibold">Gracias por contactarnos. Te responderemos a la brevedad</h4>
      </div>
    </div>
  );
}

export default PopUp;
