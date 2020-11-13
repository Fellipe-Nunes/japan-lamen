
import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col, Button } from 'react-bootstrap'
import Img1 from '../../assets/images/bg_1.png'
import Img2 from '../../assets/images/bg_2.png'

const BannerHome = () => {
    return (
        <Banner>
            <div className="bg">
                <BannerItem>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Img1} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Classic Lamen</h2>
                                    <div className="mb-4 desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore accusamus ea repellat quisquam.</div>
                                    <Button variant="danger">Comprar</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Img2} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">House Lamen </h2>
                                    <div className="mb-4 desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore accusamus ea repellat quisquam.</div>
                                    <Button variant="danger">Comprar</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </BannerItem>
            </div>
        </Banner>
    )
}

export default BannerHome


const Banner = styled.div`
    display: ${props => props.hidden === true ? 'none' : 'block'};
    height: 500px;
    width: 100%;
    background-size: 60% 100%;
    overflow: hidden;

    .bg{
        background: #0003;
        height: 500px;
    }
`

const BannerItem = styled.div`
    color: #fff
`