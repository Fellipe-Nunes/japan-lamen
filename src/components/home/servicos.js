import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const ServicosHome = () => {
    return (
        <Servicos>
            <Container className="py-5">
                <h2 className="text-center">Serviços</h2>
                <Row>
                    <Item>Serviço 1</Item>
                    <Item>Serviço 2</Item>
                    <Item>Serviço 3</Item>
                </Row>
            </Container>
        </Servicos>
    )
}

export default ServicosHome


const Servicos = styled.div`
    height: 400px;
    width: 100%;
    color: white;
`
const Item = styled(Col)`
    text-align: center;
    background: ;
    height: 200px;
    margin: 5px;
`
