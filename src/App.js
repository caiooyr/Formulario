import { useState } from 'react';
import Banner from './Componentes/Banner';
import { Formulario } from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';


function App() {


  const times = [
    {
      id: crypto.randomUUID(),
      nome: 'Pedagógica',
      corDeFundo: '#5b9bd5',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Administrativa',
      corDeFundo: '#e7e6e6',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Instrutores',
      corDeFundo: '#5b9bd5',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Coordenação',
      corDeFundo: '#e7e6e6',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Discentes',
      corDeFundo: '#5b9bd5',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome) }
       key={time.id}
       nome={time.nome} 
       corDeFundo={time.corDeFundo}/>)}
    
      <Rodape/>
    </div>
  );
}

export default App;
