import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {

    render() {
        return (

            <Grid>
            <Jumbotron>
            <h2>Welcome to LastCall</h2>
        <p>This is a Restaurant App which gives suggestions for Late Night Restaurants </p>
        <Link to="/about">
            <Button bsStyle="primary">About</Button>
            </Link>

            </Jumbotron>
            <Row className="show-grid text-center">
              <Col sx={12} sm={4} className="container-wrapper">
                 <Image src="assets/night_lights" circle className="profile-pic" />
                 <h3>Hungry</h3>
                  <p>We can help you with that</p>
               </Col>
            <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/night_lights" circle className="profile-pic" />
            <h3>Hungry</h3>
            <p>We can help you with that</p>
           </Col>

            <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/night_lights" circle className="profile-pic" />
            <h3>Hungry</h3>
            <p>We can help you with that</p>
           </Col>
              </Row>

        </Grid>

        )

    }

}