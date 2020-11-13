import React from 'react'
import styled from 'styled-components'
// import { FaBeer } from 'react-icons/fa';

import Banner from '../../../components/home/banner'
import Info from '../../../components/home/info'
import About from '../../../components/home/about'
import Servicos from '../../../components/home/servicos'
import Products from '../../../components/home/products'


const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Info />
            <About />
            <Servicos />
            <Products />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
`