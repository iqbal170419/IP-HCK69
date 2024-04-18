import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PopularCards from '../components/PopularCards'
import Card from '../components/Card'
import PosterCard from "../components/PosterCard";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Filter from "../components/filter4"

const Home = () => {
    return (
        <Box bgColor={"#0000"}>
            <Navbar></Navbar>
            <h6 style={{ fontSize: '5rem', textAlign: "center", fontWeight: 'bold', color: '#333', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>GAMETROPOLIS</h6>

            <PopularCards></PopularCards>

            <Flex justifyContent={"center"}>
                <Card3></Card3>
                <Card2></Card2>
                <Card></Card>
                <Filter />

            </Flex>
            <PosterCard></PosterCard>
            <Footer></Footer>
        </Box>
    );
}

export default Home