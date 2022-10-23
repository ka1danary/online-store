import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <BrandBar/>
                    <DeviceList></DeviceList>
                </Col>
            </Row>

        </Container>
    );
};

export default Shop;