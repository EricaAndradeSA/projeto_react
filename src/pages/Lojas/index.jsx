import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Stores from '../../Components/Stores';


function Lojas()
{
    return(
    <div className="container-fluid">
            <Header/>
            <h1>Nossas Lojas</h1>
            <hr/>
             <div className="row">
             <Stores/>
             </div>
            <Footer/>
    </div>
    );
}

export default Lojas;
