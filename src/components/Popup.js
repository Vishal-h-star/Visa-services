import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const Popup = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (

        <>
            <div >
               <p onClick={handleShow}>show popup</p>
            </div>
            <Modal
             show={show} onHide={handleShow}
                // {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Popup