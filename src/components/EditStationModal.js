import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditStationModal extends Component {
    // constructor(props){
    //     super(props);
    // }
   

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://'+process.env.REACT_APP_API_HOST+':60601/station/'+event.target._ID.value, {
        // fetch('http://192.168.1.34:8080/station/'+event.target._ID.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                stationId: event.target.StationID.value,
                stationName: event.target.StationName.value,
                stationLogo: event.target.StationLogo.value
            })
        })
           .then(() => {
                alert('Successfuly Edited Station ');
                window.location.reload();
             })
            .catch(function (error) {
                console.log("Error Found : " + error);
            });
    }
    render() {
        return (
            
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Station
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit} >
                                {/* passing hiden element just to use the event attribute when passing will figure out better way */}
                                <Form.Group as={Row} controlId="_ID" style={{display: 'none'}} >
                                        
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                name="_ID"
                                                required
                                                disabled
                                                defaultValue={this.props.st_id}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="StationID">
                                        <Form.Label>Station ID    : </Form.Label>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                name="StationID"
                                                required
                                                disabled
                                                defaultValue={this.props.stid}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="StationName">
                                        <Form.Label>Station Name : </Form.Label>
                                        <Col><Form.Control
                                            type="text"
                                            name="StationName"
                                            required
                                            defaultValue={this.props.stname}
                                        />
                                        </Col>
                                    </Form.Group>

                                     <Form.Group as={Row} controlId="StationLogo">
                                        <Form.Label>Station Logo : </Form.Label>
                                        <Col><Form.Control
                                            type="text"
                                            name="StationLogo"
                                            required
                                            defaultValue={this.props.stlogo}
                                        />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Station
            </Button>
                                    </Form.Group>
                                </Form>

                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}