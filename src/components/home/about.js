
import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import AboutImg from '../../assets/images/about.jpg'

const AboutHome = () => {
    return (
        <About>
            <Row>
                <Col>
                    <img src={AboutImg} alt="Sobre a Japan Lamen" />
                </Col>
                <Col>
                    <div className="description">
                        <h1>Sobre Nós</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto enim, nulla nesciunt temporibus impedit. Reiciendis itaque recusandae aspernatur obcaecati facilis. Sunt veritatis molestiae quia, minima aperiam libero ex accusantium.</p>
                    </div>
                </Col>
            </Row>

        </About>
    )
}

export default AboutHome


const About = styled.div`
    width: 100%;
    background: #000;
    color: #fff;
    min-height: 500px;

    .description{
        padding: 90px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    img{
        max-height: 600px;
    }
`