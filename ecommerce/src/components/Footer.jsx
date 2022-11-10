import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Container = styled.div`
   display: flex;


`


const Left = styled.div`
   flex: 1; 
   display: flex;
   flex-direction: column;
   padding: 20px;
  
`


const Logo = styled.h1`
   
`
const Desc = styled.p`
   margin:20px 0px;
`
const SocialContainer = styled.div`
   display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color:#${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   transition: all 0.5s ease;

   &:hover{
     transform: scale(1.1);
   }
`


const Center = styled.div`
   flex: 1; 
   padding: 20px;
`

const Title = styled.h3`
   margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
`


const ListItem = styled.li``
    


const Right = styled.div`
   flex:1;
   padding: 20px;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BrandWay</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem consequuntur, doloribus doloremque iure praesentium exercitationem quae iste non earum, neque est itaque facere quod eius a recusandae voluptate facilis similique odio suscipit delectus error repellat vel? Ducimus at nisi qui obcaecati provident libero, distinctio magnam. Nulla error autem sint.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
    </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
            
        </List>
      </Center>
      <Right></Right>
    </Container>
  )
}

export default Footer