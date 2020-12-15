import imgemail from '../../imagem/email.jpg';
import imgwhats from '../../imagem/whats.jpg';
import './styles.css';

const Contatos=()=>{
    return(
        <>
        <ul>
            <li>
            <p>Nossos contato: contato@fullstack.com.br </p>
            <img src={imgemail} alt="Email" />
            </li>
            <li>
           <p>Nossa rede social: 1195534-3245 </p>
            <img src={imgwhats} alt="whats" />
            </li>
        </ul>
        </>
    );

}


export default Contatos;