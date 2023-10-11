import "./Rodape.css"
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
const Rodape = () =>{
    return (
            <footer className="rodape">
                <ul className="socialList">
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                    <li>
                        <FaTwitter/>
                    </li>
                </ul>
                <img className="img" src='/imagens/senaiLogo.png' alt="senai"/> 
                <p className="copyRight">Desenvolvido por Caio Bao Amandio</p>
            </footer>
    )
}

export default Rodape;
