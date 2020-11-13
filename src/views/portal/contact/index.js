import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
export default () => {
    return (
        <Contact>
            <TitlePage title="Contato" sub="Veja Nossos Contatos" />
            <Container>
                <Row>
                    <Info md={4}></Info>
                    <Form md={8}></Form>
                </Row>
            </Container>
        </Contact>
    )
}


const Contact = styled.div`
    display:block;
    height: 500px;
`

const Info = styled(Col)`
    width: 100%;
    height: 300px
`
const Form = styled(Col)`
    width: 100%;
    height: 300px
`





