import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return (
        <Product>
            <TitlePage title="Cardápio" sub="Conheça nosso cardápio" />

            <Container>
                <TabBox defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        Alack! what pover
                     </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Alack! what poverty my Muse brings forth, That having such a scope
                </Tab>
                    <Tab eventKey="contact" title="Contact">
                        Alack! what poverty my Muse brings forth, That having such a scope to show her pride, The argument, all bare, is of more worth Than when it hath my added praise beside! O! blame me not, if I no more can write! Look in your glass, and there appears a face That over-goes my blunt invention quite, Dulling my lines, and doing me disgrace. Were it not sinful then, striving to mend, To mar the subject that before was well?
                </Tab>
                </TabBox>
            </Container>
        </Product>
    )
}


const Product = styled.div`
    display:block;
    height: 500px;

    .tab-content{
        background: #eee !important;
    }
`

const TabBox = styled(Tabs)`
    background: #fff;

`