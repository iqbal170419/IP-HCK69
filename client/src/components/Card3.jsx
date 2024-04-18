import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gameSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card3 = () => {
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
            width="20%"
            padding="0px 3px"
            backgroundColor="Black"
            color="white"
            borderRadius="10px"
            p={4}
        >
            <Text textAlign="center" mt={3}>
                Adventure
            </Text>
            <Box>
                {games &&
                    games
                        .filter((item, i) => i >= 23 && i < 26)
                        .map((el) => (
                            <Flex
                                key={el.id}
                                flexDirection="column"
                                alignContent="center"
                                bg="Black"
                                borderRadius="md"
                                overflow="hidden"
                                mb={4}
                            >
                                <Flex width="100%" alignItems="center">
                                    <Link to={"/Games/" + el.id}>
                                        <Image
                                            w="70%"
                                            minH={130}
                                            variant="top"
                                            borderRadius="md"
                                            src={el.background_image}
                                            m="0 auto"
                                        />
                                    </Link>
                                </Flex>
                                <Text textAlign="center" fontSize="lg" p={2} color="LemonZest">
                                    {el.name}
                                </Text>
                            </Flex>
                        ))}
            </Box>
        </Box>
    );
};

export default Card3;
