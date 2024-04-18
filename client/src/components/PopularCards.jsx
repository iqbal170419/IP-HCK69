import React, { useEffect } from "react";
import { Box, Flex, Image, Text, Button, Grid } from "@chakra-ui/react";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import { Link } from "react-router-dom";
import rupiah from "../utils";
import Swal from "sweetalert2";

const PopularCards = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.data);
    const status = useSelector((state) => state.games.status);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (status === "idle") {
                    await dispatch(fetchGames());
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                Swal.fire({
                    title: "Error!",
                    text: error,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        };

        fetchData();
    }, [status, dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>Error loading data</div>;
    }

    return (
        <Box
            ml={"7.3%"}
            mr={"7.3%"}
            backgroundColor="Teal"
            borderRadius="10px"
            p={4}
        >
            <Flex justifyContent="space-between" alignItems="center" p={2}>
                <Text color="white" mr={3} fontSize="lg">
                    Most Popular
                </Text>
                <Flex>
                    <MdOutlineArrowBackIos
                        type="button"
                        color="white"
                        backgroundColor="dark"
                        rounded="md"
                    />
                    <MdOutlineArrowForwardIos
                        type="button"
                        color="white"
                        backgroundColor="dark"
                        rounded="md"
                    />
                </Flex>
            </Flex>
            <Flex gap="10px" p={4}>
                {games &&
                    games
                        .filter((item, i) => i >= 15 && i < 20)
                        .map((el) => (
                            <Box
                                key={el.id}
                                bg="#121212"
                                borderRadius="10px"
                                overflow="hidden"
                                transition="all 0.3s ease-in-out"
                                cursor="pointer"
                                opacity="1"
                                _hover={{ opacity: 0.7 }}
                            >
                                <Link to={"/Games/" + el.id}>
                                    <Image
                                        minH={230}
                                        minW={110}
                                        maxW={220}
                                        variant="top"
                                        type="button"
                                        borderRadius="10px 10px 0 0"
                                        src={el.background_image}
                                    />
                                </Link>
                                <Box p={4}>
                                    <Link to={"/Games/" + el.id}>
                                        <Text textColor="#F8EDFF" fontSize="lg">
                                            {el.name}
                                        </Text>
                                    </Link>
                                    <Text textColor="#F8EDFF">{rupiah(el.price)}</Text>
                                </Box>
                            </Box>
                        ))}
            </Flex>
        </Box>
    );
};

export default PopularCards;
