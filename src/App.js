import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Yasmin Portfolio",
      headerLink: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Yasmin's Portfolio",
        subTitle: "Landing my first job!",
        text: "Checkout my projects"
      },

      about: {
         title: "About",
      },
      contact: {
        title: "Contacts",
      }
    }
  }
  render () {
      return (
      <Router>
        <Container fluid={true}>



        </Container>


      </Router>
    );

  }
  
}

export default App;
