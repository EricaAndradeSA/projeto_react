import {useState, useEffect} from 'react';



 function CardProducts(){
    const [products, setProducts] = useState([])
       
        useEffect(function(){
            async function getData(){
            const url = "http://localhost/projetoeletro/backend/";
            const response = await fetch(url)
            const dados = await response.json()

            setProducts(dados);
        }
            getData() 
        }, [])

        function click(element){
            if (element.width === 180)
            element.width = 120;
            else
            element.width = 180;
        }

    return(
    <>

       <div className="row">
        {products.map((item)=>{
            return (
    
                <div key={item.idproduto} className="col-3 box_produtos" id={item.categoria}>     
                    <img src={"http://localhost/projetoeletro/eletro/src/"+item.imagem} width="120px" onClick={(event)=>click(event.target)} alt={item.descricao}/>
                    <br/>
                    <div className="descricao">{item.descricao}</div>
                    <hr/>
                    <div className="descricao">R$ <strike>{item.preco}</strike></div>
                    <div className="preco">R$ {item.preco_final}</div>
                    </div>

                        
            )
        })}
    </div>

         
    </>

    );

}


export default CardProducts;