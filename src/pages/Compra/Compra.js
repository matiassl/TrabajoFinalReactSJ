import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Compra.css";
import Alert from 'react-bootstrap/Alert';


const Compra = () => {

    const [estado, setEstado] = useState(false);
    const [validacion, setValidacion] = useState(false);
    //   {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}

    // const handleOnChange = () => {
    //     if(email ){

    //     }
    // }

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    // Aquí puede agregar código para enviar los datos del formulario
    // setEstado(true);
    // }
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailConfirmChange = (event) => {
        setEmailConfirm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === emailConfirm) {
            alert('igual')
        } else {
            alert(' no igual');
        }
    };
    return (
        <div className="contenedor">
            {
                estado ?
                    <div className="box">
                        <div className="titulo">
                            <h2>todo ok</h2>
                        </div>
                        <Alert variant="success" className="alert">
                            Pedido realizado con exito: <b>Orden N° 2545</b>
                        </Alert>
                    </div> :
                    <div>
                        <div className="titulo">
                            <h2>Complete formulario para finalizar</h2>
                        </div>

                        <div className="formulario">

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="input my-3" >
                                    <Form.Control type="text" placeholder="Ingrese nombre" id="nombre" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="input my-3" >
                                    <Form.Control type="text" placeholder="Ingrese direccion de envio" id="direccion" required onChange={handleEmailChange} />
                                </Form.Group>

                                <Form.Group className="input my-3" >
                                    <Form.Control type="email" placeholder="Ingrese email" id="email" required onChange={handleEmailConfirmChange} />
                                </Form.Group>

                                <Form.Group className="input my-3" >
                                    <Form.Control type="email" placeholder="Ingrese nuevamente email" id="validar-email" required />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="input">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </div>

            }



        </div>
    )
}

export default Compra;