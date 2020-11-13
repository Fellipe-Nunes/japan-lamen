
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const InfoHome = () => {
    return (
        <Info>
            <Container>
                <Row>
                    <Col>
                        <ItemInfo>
                            <h4>(21) 1111-0000</h4>
                        </ItemInfo>
                    </Col>
                    <Col><ItemInfo>
                        <h4>(21) 2222-0000</h4>
                    </ItemInfo>
                    </Col>
                    <Col>
                        <ItemInfo>
                            <h4>(21) 3333-0000</h4>
                        </ItemInfo>
                    </Col>
                </Row>
            </Container>
        </Info>
    )
}

export default InfoHome


const Info = styled.div`
    width: 100%;
`

const ItemInfo = styled.div`
    color: white;
    width: 100%;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items: center;
`