import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
    return (
        <Container>
           <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 70px);
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    padding : 0 calc(3.5vw + 5px);

    &:before{
        background: url("images/home-background.png") center center / cover 
            no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        inset: 0px;
        opacity: 1px;
        z-index: -1;

    }
    
`  