import React from 'react';
import './Notfound.css'
import { Button } from 'react-bootstrap';

const Notfound = () => {
    const goBack = () => {
        window.history.go(-1);
    }
    return (
        <div className="notfound-section">
            <h2 className="text-danger fw-bold mt-5 pt-5"> Sorry! The Page You Are Looking For Cannot Be Reached.</h2>
            <Button onClick={goBack}>Go Back</Button>
        </div>
    );
};

export default Notfound;