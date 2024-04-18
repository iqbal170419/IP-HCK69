import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import rupiah from "../utils";

const SingleCard = ({ data }) => {
    return (
        <Box
            bg="#000" // Teal color
            color="#fff" // White text color
            textAlign="left"
            textDecoration="none"
            fontFamily="Brutal, sans-serif"
            maxH={320}
            m={3}
            p={3}
            borderRadius={10}
            transition="all 0.3s ease-in-out"
            cursor="pointer"
            opacity="1"
            _hover={{ opacity: 0.7 }}
        >
            <Box>
                <Image
                    src={data.background_image}
                    alt={data.name}
                    width="100%"
                    minHeight="200"
                    objectFit="cover"
                    borderRadius={10}
                />
            </Box>
            <Box mt={2}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg">{data.name}</Text>
                    <Text fontSize="lg">{rupiah(data.price)}</Text>
                </Flex>
                <Flex justifyContent="flex-end">
                    <Link to={`/Games/${data.id}`}>
                        <Text fontSize="sm" color="#fff" textDecoration="underline">
                            View More...
                        </Text>
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default SingleCard;
