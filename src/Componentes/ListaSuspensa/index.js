import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   // console.log(props.itens)

    const aoSelecionar = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className='lista-suspensa'>
                <label>{props.label}</label>
                <select onChange={aoSelecionar} value={props.valor}>
                <option value="" disabled></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}

                </select>

        </div>
    )
}

export default ListaSuspensa;