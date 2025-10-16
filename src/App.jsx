import { useEffect, useState } from 'react'

export default function App() {
  const [tempoFaltante, setTempoFaltante] = useState(0);
  const [textoContagem, setTextoContagem] = useState('');

  useEffect(() => {
    const inicializarTempoFaltante = () => {
      const diaFormatura = new Date(2025, 11, 15, 19, 0, 0);
      const diaAtual = new Date();
      const tempoFaltanteInicial = diaFormatura - diaAtual;
      if (tempoFaltanteInicial > 0) {
        setTempoFaltante(tempoFaltanteInicial);
      }
    };

    inicializarTempoFaltante();

    const intervalo = setInterval(() => {
    setTempoFaltante((prevTempoFaltante) => {
      if (prevTempoFaltante <= 0) {
        clearInterval(intervalo);
        setTextoContagem('Parabéns, chegou o grande dia da nossa formatura!');
        return 0;
      }
      return prevTempoFaltante - 1000;
    });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); 

  useEffect(() => {
    const fazerContagem = () => {

      const meses = Math.floor(tempoFaltante / (1000 * 60 * 60 * 24 * 30));
      const dias = Math.floor((tempoFaltante % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoFaltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoFaltante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoFaltante % (1000 * 60)) / (1000));

      if (tempoFaltante <= 0) {
        return;
      }

      setTextoContagem(`${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`);
    };

    fazerContagem();
  }, [tempoFaltante]);

  return (
    <>
      <h1>Pedro Rossini Lanutti de Moraes - INFO 6B</h1>
      <h3>{textoContagem}</h3>
      <p>
        Após a formatura meu próximo passo será começar a faculdade de Ciência da Computação. Estou empolgado para aprender mais sobre tecnologia, 
        programação e desenvolver habilidades que me preparem para a carreira na área de TI. Além dos estudos, também pretendo continuar jogando Valorant, 
        um dos meus passatempos favoritos. O jogo não só me ajuda a relaxar, mas também a melhorar minhas habilidades estratégicas e de trabalho em equipe. 
        Acredito que, ao equilibrar a faculdade com meu amor por Valorant, poderei alcançar meus objetivos profissionais e pessoais com mais motivação e foco.
      </p>
      <img src="/images/crisManchester.jpg"/>
      <img src="/images/crisReal.webp"/>
      <img src="/images/crisPortugal.jpg"/>
      <img src="/images/crisJuventus.jpg"/>
    </>
  );
}