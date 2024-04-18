import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

const SingleCardMyGame = ({ data }) => {
    const { Game } = data;
    return (
        <Box
            className="container"
            backgroundColor="#008080" // Teal color
            color="#fff" // White text color
            textAlign="left"
            fontFamily="Brutal, sans-serif"
            m={5}
            p={4} // Padding
            borderRadius={10} // Border radius
            width={"20%"}
        >
            <Link to={`/Games/${Game.id}`}>
                <Box
                    className="aimg"
                    width="100%"
                    height="72%"
                    borderRadius={10} // Border radius
                    overflow="hidden" // Hide overflow content
                >
                    <Image
                        src={Game.background_image}
                        alt="err"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Link>
            <Box className="atitle" mt={3}>
                <Text mt={2} fontSize="lg">
                    {Game.name}
                </Text>
                <Text mt={2}>{data.status}</Text>
            </Box>
        </Box>
    );
};

export default SingleCardMyGame;
