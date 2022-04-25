import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { getPublishedBlogItems } from '../Services/DataService';



export default function BlogPageExample() {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(async () => {
        let publishedItems = await getPublishedBlogItems();
        setBlogItems(publishedItems);
    }, [])

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    {
                        blogItems.map((item, i) => {
                            return (
                                <>
                                    {
                                        i % 2 == 0
                                            ?
                                            <>
                                                <Row key={i}>
                                                    <Col md={6}>
                                                        <Row>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <h2>{item.title}</h2>
                                                            </Col>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <Row>
                                                                    <Col md={6} className="d-flex justify-content-center">
                                                                        <h3>{item.publisherName}</h3>
                                                                    </Col>
                                                                    <Col md={6} className="d-flex justify-content-center">
                                                                        <h4>{item.date} </h4>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <img src={item.image} width='350px' height='200px' />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md={6} className="d-flex justify-content-center">
                                                        <h3>{item.description} </h3>
                                                    </Col>
                                                </Row>
                                            </>
                                            :
                                            <>
                                                <Row key={i}>
                                                    <Col md={6} className="d-flex justify-content-center">
                                                        <h3>{item.description} </h3>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Row>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <h2>{item.title}</h2>
                                                            </Col>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <Row>
                                                                    <Col md={6} className="d-flex justify-content-center">
                                                                        <h3>{item.publisherName}</h3>
                                                                    </Col>
                                                                    <Col md={6} className="d-flex justify-content-center">
                                                                        <h4>{item.date} </h4>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={12} className="d-flex justify-content-center">
                                                                <img src={item.image} width='350px' height='200px' />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </>
                                    }
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
