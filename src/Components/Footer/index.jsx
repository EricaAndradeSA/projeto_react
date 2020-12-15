import imgfooter from '../../imagem/redes.jpg';
import './styles.css';

const Footer=()=>{
    return(
        <footer id="rodape">
            <p>Nossos contatos</p>
            <img src={imgfooter} alt="Formas de pagamentos" />
            <p>&copy; Recode Pro</p>
        </footer>
    );

}


export default Footer;