import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import { useState } from "react";


function FormPage(){

    let [nome, setNome]=useState();
    let [telefone, setTelefone]=useState();
    let [assunto, setAssunto]=useState();
    let [mensagem, setMensagem]=useState();
    const [isLoading, setLoading] = useState(false);
    const [mostrarLabel, setMostrarLabel] = useState(false);



    const handleClick = () => {  
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setMostrarLabel(true);
        }, 500);
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

            <div className="card mb-5 mx-3">

                    <div className="card-header h4">Formulário</div>

                    <div className="card-body mt-2">
                     <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                        <label><b>Nome:</b></label>                  
                            <input className="form-control"
                                type="text"
                                maxLength={50}
                                placeholder="Insira seu nome!"
                                value={nome}
                                onChange={printNome} />                        
                         </div>

                        <div className="col-sm-12 col-lg-6">
                        <label><b>Telefone:</b></label>                  
                            <input className="form-control"
                                type="number"
                                maxLength={50}
                                placeholder="Insira seu telefone!"
                                value={telefone}
                                onChange={printTelefone} />                        
                         </div>

                        <div className="col-sm-12 col-lg-6 mt-2">
                        <label><b>Idade:</b></label>                  
                            <input className="form-control"
                                type="number"
                                placeholder="Insira sua idade aqui!"
                                value={assunto}
                                onChange={printAssunto} />                        
                         </div>

                         <div className="col-sm-12 col-lg-6 mt-2">
                        <label><b>Email:</b></label>                  
                            <input className="form-control"
                                type="text"
                                maxLength={150}
                                placeholder="Insira seu email aqui!"
                                value={mensagem}
                                onChange={printMensagem} />                        
                         </div>
                        <Row className="justify-content-md-center mt-4">
                        <Button 
                            className="w-50"
                            disabled={isLoading || !nome || !telefone|| !mensagem ||!assunto}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Enviando…' : 'Enviar'}
                        </Button></Row><br/>

                        <div className="col-12 mt-4">
                        {mostrarLabel &&  <Alert variant="success">Formulário Enviado com Sucesso!</Alert> }   
                       
                    </div>
            </div>
            </div>
            </div>
        
        </div>
    );
}

export default FormPage;