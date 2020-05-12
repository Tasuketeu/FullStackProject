import React from 'react';
import ReactDOM from 'react-dom';

import Select from 'react-select';
import { Navbar, Nav, NavItem, Container, Row, Col, FormGroup, InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import { Portfolio } from './Portfolio';

class PortfolioContainer extends React.Component {

    componentDidMount() {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <Portfolio
        {...this.props}
    />
    }

}

export default PortfolioContainer;