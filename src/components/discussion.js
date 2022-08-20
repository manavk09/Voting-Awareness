import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import React, { useEffect, useState } from "react";
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Discussion Post</Form.Label>
                        <Form.Control type="title" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discussion Post</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
function MyVerticallyCenteredModalReply(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reply
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Reply</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
function Discussion() {
    const [modalShowPost, setModalShowPost] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <h1> New Post</h1>
            <>
                <Button variant="primary" onClick={() => setModalShowPost(true)}>
                    Create A New Post
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShowPost}
                    onHide={() => setModalShowPost(false)}
                />
            </>
            <h1> All current posts</h1>
            <div className="card">
                <div className="card-header">
                    Post one
                </div>
                <div className="card-body">
                    <img src={'logo512.png'} style={{ float: 'left', borderRadius: '25px', height:'100px', width:'100px'}} />
                    <h5 className="card-title" >Post title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Reply
                        </Button>
                        <MyVerticallyCenteredModalReply
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Post one
                </div>
                <div className="card-body">
                    <img src={'logo512.png'} style={{ float: 'left', borderRadius: '25px', height:'100px', width:'100px'}} />
                    <h5 className="card-title" >Post title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Reply
                        </Button>
                        <MyVerticallyCenteredModalReply
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Post one
                </div>
                <div className="card-body">
                    <img src={'logo512.png'} style={{ float: 'left', borderRadius: '25px', height:'100px', width:'100px'}} />
                    <h5 className="card-title" >Post title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Reply
                        </Button>
                        <MyVerticallyCenteredModalReply
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                </div>
            </div>
            <div className="card" >
                <div className="card-header">
                    Post one
                </div>
                <div className="card-body">
                    <img src={'logo512.png'} style={{ float: 'left', borderRadius: '25px', height:'100px', width:'100px'}} />
                    <h5 className="card-title" >Post title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Reply
                        </Button>
                        <MyVerticallyCenteredModalReply
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                </div>
            </div>
        </div>
    );
}
export default Discussion;