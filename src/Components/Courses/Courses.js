import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './courses.css'

const Courses = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* <h1>Our All Professional Courses.</h1> */}
        </div>
    );
};

export default Courses;