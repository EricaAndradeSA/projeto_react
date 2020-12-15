import  Header from '../../Components/Header';
import  Footer from '../../Components/Footer';
import  Categorias from '../../Components/Categorias';
import CardProducts from '../../Components/CardProducts';



const Produtos = ()=>   
{
    return(
        <div className="container-fluid">
            <Header/>
            
            <h1>Produtos</h1>
            <hr/>
             <div className="row">
                 <div className="col-3"><Categorias/></div>
                 <div className="col-9"><CardProducts/></div>   
             </div>

            <Footer/>
        </div>
        

    );

}

export default Produtos;