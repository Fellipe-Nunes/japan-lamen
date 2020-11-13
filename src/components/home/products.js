import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const ProductsHome = () => {
    return (
        <Servicos>
            <Container className="py-5">
                <h2 className="text-center">Produtos</h2>
                <Row>
                    <Item>Produto 1</Item>
                    <Item>Produto 2</Item>
                    <Item>Produto 3</Item>
                </Row>
            </Container>
        </Servicos>
    )
}

export default ProductsHome


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