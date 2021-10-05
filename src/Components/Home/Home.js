import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import './Home.css';
import Courses from '../Courses/Courses';


const Home = () => {
    const [primeMinisters, setPrimeMinister] = useState([]);

    useEffect(() => {
        fetch('./minister.JSON')
            .then(res => res.json())
            .then(data => setPrimeMinister(data))
    }, [])

    // Handle invitation
    const [invitation, setInvitation] = useState([]);
    const handleInvitation = (primeMinister) => {
        const newInvitation = [...invitation, primeMinister];
        setInvitation(newInvitation);
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    {/* All Prime Ministers */}
                    <div className="col-md-3">
                        {/* Single Prime Minister */}
                        <div className="pt-0 ps-2">
                            {
                                primeMinisters.map(primeMinister => <Courses
                                    key={primeMinister.id}
                                    primeMinister={primeMinister}
                                ></Courses>
                                )
                            }
                        </div>
                    </div>
                    {/* <div className="col-md-3">
                    { Invitation Cart  }
                    <Cart invitation={invitation}></Cart>   
                </div>               */}
                </div>
            </div>

        </div>
    );
};
// return (
//     <div className="home-section">
//         <div className="conatiner">
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://hbu-files.wpmucdn.com/uploads/sites/83/2021/05/Great-Texts-major.jpg"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h2 className="">Enroll Today On Our Academic Programs.</h2>
//                         <p>Learn From Our Special And Award Winning Teachers Around The World. </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://www.sfu.ca/content/sfu/grc/research/publications/2020/jcr:content/main_content/textimage/image.img.640.medium.jpg/1593050509560.jpg"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                         <h2 className="">Enroll Today On Our Computer Programs.</h2>
//                         <p className="">Learn From Our Special And Award Winning Teachers Around The World. </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://i2.wp.com/www.bookstoprisoners.net/wp-content/uploads/2018/02/science-fiction.png?fit=1200%2C400&ssl=1"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h2 className="">Enroll Today On Our Language Programs.</h2>
//                         <p className="">Learn From Our Special And Award Winning Teachers Around The World. </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </div>

//     </div>

// );
// };

export default Home;