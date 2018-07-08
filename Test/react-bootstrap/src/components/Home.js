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
        <p>This is a Restaurant App that will give  suggestions for Late Night Restaurants </p>
        <Link to="/about">
            <Button bsStyle="primary">Login</Button>
            </Link>

            </Jumbotron>
            <Image src="assets/late_night_dt.jpeg" className="header-image" />
            <Row className="show-grid text-center">
              <Col sx={12} sm={4} className="container-wrapper">
                 <Image src="assets/burger.jpeg" circle className="profile-pic" />
                 <h3>Buy Quick Bites</h3>
                  <p>These options are Fast Food based</p>
               </Col>
            <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/gourmet1.jpeg" circle className="profile-pic" />
            <h3>Give Me Gourmet</h3>
            <p>If you want more of a home cooked feel</p>
           </Col>

            <Col sx={12} sm={4} className="container-wrapper">
            <Image src="assets/tapas3.jpeg" circle className="profile-pic" />
            <h3>Try Some Tapas</h3>
            <p>Here you can choose light options</p>
           </Col>
              </Row>

        </Grid>

        )

    }

}