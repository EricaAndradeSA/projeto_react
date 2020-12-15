import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Home from '../../Components/Home';


function Phome()
{
    return(
        <div className="container-fluid">
             <Header/>
             <div className="row">
             <div className="col-3"><Home/></div>  
            </div>

            <Footer/>
         </div>
    
    );

}


export default Phome;