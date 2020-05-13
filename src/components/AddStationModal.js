import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddStationModal extends Component {
    // constructor(props){
    //     super(props);
    // }

    handleSubmit(event) {
        event.preventDefault();
         fetch('http://'+process.env.REACT_APP_API_HOST+':60601/station/', {     
    //  fetch('http://192.168.1.34:8080/station/', {
            method: 'POST',
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
            .then(response => response.json())
            .then(data => {
                alert('Successfuly Added Station ');
                window.location.reload();
                // this.props.history.push("/stations");
                // this.addModalShow=false; // props.onHide; 
            },
                (error) => {
                    alert('Failed')
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
                        Add Statoin
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group as={Row} controlId="StationID">
                                        <Form.Label>Station ID    : </Form.Label>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                name="StationID"
                                                required
                                                placeholder="StationID"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="StationName">
                                        <Form.Label>Station Name : </Form.Label>
                                        <Col><Form.Control
                                            type="text"
                                            name="StationName"
                                            required
                                            placeholder="St. Name"
                                        />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="StationLogo">
                                        <Form.Label>Station Logo : </Form.Label>
                                        <Col><Form.Control
                                            type="text"
                                            name="StationLogo"
                                            required
                                            placeholder="St. Logo"
                                        />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Station
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