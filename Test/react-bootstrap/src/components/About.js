import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {

    render() {

        return (

            <div>
               ABOUT PAGE
                 <Image src="assets/late_night_dt.jpeg" className="header-image" />
                 <Grid>
               <Col  xs={12} sm={8} smOffest={2}>
                  <Image src="assets/open_late.jpeg" className="about-late-night" rounded />
                 <h3>Select Your Zipcode</h3>
            <p>We offer selections in restaurants and bars</p>
             </Col>
            </Grid>
            </div>

        )
    }
}