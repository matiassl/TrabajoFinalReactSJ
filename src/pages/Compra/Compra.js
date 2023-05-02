import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./Compra.css";

//Componentes
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

//Context
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../components/firebase/firebaseConfig";

const Compra = () => {
    const { items, setItems } = useContext(ItemsContext);
    const [estado, setEstado] = useState(false)
    const [show, setShow] = useState(false);
    const [docId, setDocId] = useState(null);


    const handleClose = () => setShow(false);
    const [formData, setFormData] = useState({
        nombre: "",
        direccion: "",
        email: "",
        emailConfirmacion: "",
        mensaje: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    let mensaje = "";
    const handleSubmit = (event) => {
        event.preventDefault();
        let errores = false;
        if (formData.nombre.length < 6) {
            mensaje = "Ingrese un nombre válido (mínimo 6 caracteres) <br>";
            errores = true;
        }
        if (formData.direccion.length < 10) {
            mensaje = mensaje + "Ingrese una dirección válida (mínimo 10 caracteres)<br>";
            errores = true;
        }
        if (formData.email !== formData.emailConfirmacion) {
            mensaje = mensaje + "Los campos de correo electrónico no coinciden";
            errores = true;
        }
        if (errores) {
            setFormData({ ...formData, mensaje });
            setShow(true);
        }
        else {
            const pedido = {
                fecha: new Date(),
                productos: items.map(item => ({ id: item.id, titulo: item.Titulo, cantidad: item.cantidad }))
            };

            const guardarPedido = async () => {
                try {
                    const docRef = await addDoc(collection(db, "ordenes"), pedido);
                    console.log("Pedido guardado con ID:", docRef.id);
                    setDocId(docRef.id); 
                    setItems([])
                } catch (error) {
                    console.error("Error al guardar el pedido: ", error);
                }
                
            };            
            guardarPedido();
            setEstado(true);
        }
    };

    return (
        <>      
        <div className="titulo-pagina py-2">
            <h3>Carrito </h3>
        </div>
            <div className="contenedor">
                {estado ? (
                    <div className="box">
                        <div className="titulo">
                            <h2>Estado de Pedido</h2>
                        </div>
                        <Alert variant="success" className="alert">
                            Pedido realizado con exito: <b>Orden : {docId}</b>
                        </Alert>
                    </div>
                ) : (
                    <div>
                        <div className="titulo">
                            <h2>Complete formulario para finalizar</h2>
                        </div>
                        <div
                            className="modal show"
                            style={{ display: "block", position: "initial" }}
                        >
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Datos incorrectos</Modal.Title>
                                </Modal.Header>
                                <Modal.Body dangerouslySetInnerHTML={{ __html: formData.mensaje }} />

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="formulario">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="input my-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese nombre"
                                        name="nombre"
                                        id="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="input my-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese direccion de envio"
                                        name="direccion"
                                        id="direccion"
                                        value={formData.direccion}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="input my-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingrese email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="input my-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingrese nuevamente email"
                                        name="emailConfirmacion"
                                        id="emailconfirmacion"
                                        value={formData.emailConfirmacion}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="input">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}
export default Compra;