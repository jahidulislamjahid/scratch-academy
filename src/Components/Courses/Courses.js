import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './courses.css'

const Courses = () => {
    return (
        <div className="col-md-4 p-2 text-center">
            <div className="card h-100 ms-auto card-border">
                <div className="text-center">
                    <img src="" height="200" className="rounded p-2" />
                </div>
                <div className="card-body">
                    <h6>Name :</h6>
                    <p>Age : </p>
                    <p>Gender : </p>
                    <h6>Head of : </h6>
                    <h6>Country : </h6>
                    <h6>Salary : <small></small></h6>
                </div>
            </div>
        </div>
        // <div className="main-section">
        //     <div className="container my-5">
        //         <div className="row">
        //             <div className="col-md-4">
        //                 <Card style={{ width: '18rem' }}>
        //                     <Card.Img variant="top" src={image} />
        //                     <Card.Body>
        //                         <Card.Title>{name}</Card.Title>
        //                         <Card.Text>
        //                             Some quick example text to build on the card title and make up the bulk of
        //                             the card's content.
        //                         </Card.Text>
        //                         <Button variant="primary">Go somewhere</Button>
        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </div>

        //         {/* <h1>Our All Professional Courses.</h1> */}
        //     </div>
        // </div>

    );
};

export default Courses;