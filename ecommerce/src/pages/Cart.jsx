import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'


const Container = styled.div``


const Wrapper = styled.div`
    padding: 20px;
`
   



const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`


const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props =>props.type === 'filled' && "none"};
    background-color : ${props =>props.type === 'filled' ? "teal" : "transparent"};
    color:${props => props.type === 'filled' ? "white" : 'black'};
`

const TopTexts = styled.div``


const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin:0 10px;
`


const Bottom = styled.div`
   display: flex;
   justify-content:space-between;
`


const Info = styled.div`
   flex:3;
`


const Summary = styled.div`
   flex:1;
`

const Product = styled.div``


const ProductDetail = styled.div``
    

const Image = styled.img``


const Details = styled.div``


const ProductName = styled.span``


const ProductId = styled.span``


const ProductColor = styled.span``


const ProductSize = styled.span``


const PriceDetail = styled.div``




const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>

                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                    <ProductDetail>
                       <Image src="https://t2g3y2z7.rocketcdn.me/wp-content/uploads/2019/06/4-1.jpg"/>
                       <Details>
                         <ProductName> <b>Product:</b>  Bohemian Beach Dress</ProductName>
                         <ProductId> <b>ID:</b>  80080090060</ProductId>
                         <ProductColor/>
                        <ProductSize> <b>Size:</b> 38 </ProductSize>
                       </Details>
                    </ProductDetail>
                    <PriceDetail>
                       price
                    </PriceDetail>
                </Product>
              </Info>  
              <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart