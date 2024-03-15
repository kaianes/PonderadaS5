import "./style.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default function App() {
  const [restaurantes, setRestaurantes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/restaurantes');
      setRestaurantes(response.data.restaurantes);
    }
    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 pb-12 mt-4">
      <h1 className="font-bold text-center text-3xl">
        Go Eat!
      </h1>
      <p className="text-center">
        Aqui estão os restaurantes do banco de dados:
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 -mt-2">
        {restaurantes &&
          restaurantes.map((restaurante) => (
            <Card
              titulo={restaurante.nome}
              descricao={restaurante.culinaria}
            />
          ))}
      </div>
    </section>

  );
}

