import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

function FormPage(){

    let [nome, setNome]=useState();
    let [telefone, setTelefone]=useState();
    let [assunto, setAssunto]=useState();
    let [mensagem, setMensagem]=useState();
    const [isLoading, setLoading] = useState(false);
    const [mostrarLabel, setMostrarLabel] = useState(false);



    const handleClick = () => {
        setMostrarLabel(true);
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    };


    const printNome = (elemento) => {
        setNome(elemento.target.value);
    };

    const printTelefone = (elemento) => {
        setTelefone(elemento.target.value);
    };

    const printAssunto = (elemento) => {
        setAssunto(elemento.target.value);
    };

    const printMensagem = (elemento) => {
        setMensagem(elemento.target.value);
    };


    return(

        <div className="pt-4">

            <div className="card mb-3 mx-3">

                    <div className="card-header h4">Formulário</div>

                    <div className="card-body mt-2">
                     <div className="row align-items-center">
                        <div className="col-sm-12 col-md-4">
                        <label><b>Nome:</b></label>                  
                            <input className="form-control"
                                type="text"
                                maxLength={50}
                                placeholder="Insira seu nome!"
                                value={nome}
                                onChange={printNome} />                        
                         </div>

                        <div className="col-sm-12 col-md-4">
                        <label><b>Telefone:</b></label>                  
                            <input className="form-control"
                                type="number"
                                maxLength={50}
                                placeholder="Insira seu telefone!"
                                value={telefone}
                                onChange={printTelefone} />                        
                         </div>

                        <div className="col-sm-12 col-md-4">
                        <label><b>Assunto:</b></label>                  
                            <input className="form-control"
                                type="text"
                                maxLength={150}
                                placeholder="Insira um assunto de sua preferência"
                                value={assunto}
                                onChange={printAssunto} />                        
                         </div>

                         <div className="col-sm-12 col-md-4">
                        <label><b>Mensagem:</b></label>                  
                            <input className="form-control"
                                type="text"
                                maxLength={150}
                                placeholder="Insira uma mensagem aqui!"
                                value={mensagem}
                                onChange={printMensagem} />                        
                         </div>
                         <div className="col-sm-12 col-md-4 mt-4">
                        <Button
                            disabled={isLoading || !nome || !telefone}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Calculando…' : 'Calcular'}
                        </Button></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                        {mostrarLabel &&  <Alert>Formulário Enviado</Alert> }   
                       
                    </div>
            </div>
            </div>
            </div>
        
        </div>
    );
}

export default FormPage;