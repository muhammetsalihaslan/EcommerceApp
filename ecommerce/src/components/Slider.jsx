import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
  
   position: relative;

`


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:#fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left:${props=> props.direction === "left" && "10px"};
  right:${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity:0.5;
`


const Wrapper = styled.div`
   height: 100%;
`



const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`


const ImgContainer = styled.div`
  height: 100%;
  flex:1;
`


const Image = styled.img`
 height: 80%;
`



const InfoContainer = styled.div`
 flex:1;
 padding: 50px;
`


const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper>
            <Slide>

        <ImgContainer>
          <Image src=""/>
        </ImgContainer>
        <InfoContainer>
           <Title>SUMMER SALE</Title>
           <Desc>DON'T COMPROMİSE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS</Desc>
           <Button>SHOP NOW</Button>

        </InfoContainer>

            </Slide>


        </Wrapper>
        <Arrow  direction="right">
        <ArrowForwardIosOutlinedIcon/>
        </Arrow>

    </Container>
  )
}

export default Slider