import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Contatos from '../../Components/Contatos';
import Mensagem from '../../Components/Mensagem';

function Contato()
{
    return(
    <div className="container-fluid">
            <Header/>
            <h1>Nossas Lojas</h1>
            <hr/>
             <div className="row">
             <Contatos/>
             <hr/>
             <Mensagem/>
             </div>
            <Footer/>
    </div>
    );
}

export default Contato;