import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Phome from'./pages/Phome';
import Produtos from './pages/Produtos';
import Lojas from './pages/Lojas';
import Contato from './pages/Contato';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Phome}/>
                <Route path="/produtos" component={Produtos}/>
                <Route path="/lojas" component={Lojas}/>
                <Route path="/Contato" component={Contato}/>
                
            </Switch>
        
        </BrowserRouter>
    );

}

export default Routes;