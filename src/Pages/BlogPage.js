import React from 'react';
import '../App.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import blog1 from '../Photos/blog1.jpg';
import blog2 from '../Photos/blog2.jpg';
import blog3 from '../Photos/blog3.jpg';


export default function BlogPage() {
    return (
        <Container>

            <Carousel className='mt-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={blog1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={blog2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={blog3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className='mt-3'>
                <Col>
                    <Row>
                        <h1 className='text-center'>Title</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Publish Name</h4>
                        </Col>
                        <Col>
                            <h4>Date</h4>
                        </Col>
                    </Row>
                    <Row>
                        <img src={blog2} />
                    </Row>
                </Col>
                <Col>
                    <p className='text-center mt-5'>Description</p>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col>
                    <p className='text-center mt-5'>Description</p>
                </Col>
                <Col>
                    <Row>
                        <h1 className='text-center'>Title</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Publish Name</h4>
                        </Col>
                        <Col>
                            <h4>Date</h4>
                        </Col>
                    </Row>
                    <Row>
                        <img src={blog3} />
                    </Row>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col>
                    <Row>
                        <h1 className='text-center'>Title</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Publish Name</h4>
                        </Col>
                        <Col>
                            <h4>Date</h4>
                        </Col>
                    </Row>
                    <Row>
                        <img src={blog1} />
                    </Row>
                </Col>
                <Col>
                    <p className='text-center mt-5'>Description</p>
                </Col>
            </Row>

            <Row className='mt-3 mb-5'>
                <Col>
                    <p className='text-center mt-5'>Description</p>
                </Col>
                <Col>
                    <Row>
                        <h1 className='text-center'>Title</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Publish Name</h4>
                        </Col>
                        <Col>
                            <h4>Date</h4>
                        </Col>
                    </Row>
                    <Row>
                        <img src={blog3} />
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
