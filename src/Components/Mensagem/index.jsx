import React from "react";

function Mensagem (){

    const[nome, setNome] = React.useState("");
    const [mensagem, setMensagem] = React.useState("");

    return(

           <div className="container mt-5">
                    <h2>Deixe sua mensagem</h2>    
                    <input type="text" className="form-control" placeholder="nome" value={nome} onChange={(event)=> setNome(event.target.value)}/>
                    <input type="text" className="form-control" placeholder= "mensagem" value={mensagem}/>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                
               
               

            </div>

            );
        }

        
        export default Mensagem;