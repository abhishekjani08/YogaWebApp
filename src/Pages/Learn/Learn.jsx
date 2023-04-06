import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import img1 from "./assets/yoga13.jpg"
import img2 from "./assets/yoga15.jpg"
import img3 from "./assets/yoga19.jpg"
import img4 from "./assets/yoga20.jpg"
import img5 from "./assets/yoga25.jpg"
import img6 from "./assets/yoga232.png"
import "./Learn.css"

const Learn = () => {
  return (
    <div className="learnContainer gap-5">
<div className="rowss">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog1">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog2">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog3">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog4">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog5">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Warrior Pose</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/learn/yog6">
        <button className="btn btn-primary">Start Pose</button>
      </Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};

export default Learn;
