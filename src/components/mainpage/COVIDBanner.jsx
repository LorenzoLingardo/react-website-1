import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

const CovidBanner = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="ff-sans-cond bg-accent fs-300 text-dark">
            <div>
                <i class="fas fa-info-circle"></i>
                The safety of our visitors and volunteers is important to us. For information about our COVID-19 policies, click<Button className="modalBtn" style={{"text-decoration": "none", "font-size": "var(--fs-300)"}} onClick={handleShow} variant="link">here</Button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} id="covidModal">
                <Modal.Header closeButton>
                    <Modal.Title>COVID Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>COVID Info!</Modal.Body>
            </Modal>
        </div>
    )
}

export default CovidBanner;