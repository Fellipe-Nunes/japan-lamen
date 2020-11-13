import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return (
        <Service>
            <TitlePage title="Serviços" sub="Obtenha informações de nossos serviços." />
            <Container>
                <Row>
                    <ServiceItem>First, but unordered</ServiceItem>
                    <ServiceItem>Second, but last</ServiceItem>
                    <ServiceItem>Third, but second</ServiceItem>
                </Row>
            </Container>

        </Service>
    )
}


const Service = styled.div`
    display:block;
    height: 500px;
    color: white
`


const ServiceItem = styled(Col)`
    background: #38393D;
    height: 200px;
    margin: 10px;
    width: 20%;
`


