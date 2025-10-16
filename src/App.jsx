import { useEffect, useState } from 'react'

export default function App() {
  const [tempoFaltante, setTempoFaltante] = useState('');
  const [textoContagem, setTextoContagem] = useState('');

  useEffect(() => {
    const inicializarTempoFaltante = () => {
      const diaFormatura = new Date(2025, 11, 15, 19, 0, 0);
      const diaAtual = new Date();
      const tempoFaltanteInicial = diaFormatura - diaAtual;
      setTempoFaltante(tempoFaltanteInicial);
    };

    inicializarTempoFaltante();

    const intervalo = setInterval(() => {
      setTempoFaltante((prevTempoFaltante) => prevTempoFaltante - 1000);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [])

  useEffect(() => {
    const fazerContagem = () => {

      const meses = Math.floor(tempoFaltante / (1000 * 60 * 60 * 24 * 30));
      const dias = Math.floor((tempoFaltante % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoFaltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoFaltante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoFaltante % (1000 * 60)) / (1000));

      setTextoContagem(`${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`);
    };

    fazerContagem();
  }, [tempoFaltante]);

  return (
    <>
      <h1>Pedro Rossini Lanutti de Moraes - INFO 6B</h1>
      <h3>Contagem: {textoContagem}</h3>
    </>
  );
}