import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Sistema de Evaluación Estudiantil 'es solo un landing sin funcionalidad'
        </h1>
      </header>
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://example.com/image1.jpg"
              alt="Imagen 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Funcionalidad 1</h2>
            <p className="mt-2">
              Descripción de la funcionalidad 1 del sistema de evaluación
              estudiantil.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://example.com/image2.jpg"
              alt="Imagen 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Funcionalidad 2</h2>
            <p className="mt-2">
              Descripción de la funcionalidad 2 del sistema de evaluación
              estudiantil.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://example.com/image3.jpg"
              alt="Imagen 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">Funcionalidad 3</h2>
            <p className="mt-2">
              Descripción de la funcionalidad 3 del sistema de evaluación
              estudiantil.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
