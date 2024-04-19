import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
    const handleLogout = () => {
        localStorage.clear();
    };

    if (localStorage) {
        let dataUid = localStorage.getItem("userName");
    }
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            bgColor={"#191919"}
        >
            <Flex>
                <Image mx={10} w={"5%"} src="../src/assets/logo.png" />
                <Link to="/">
                    <Button
                        bg={"transparent"}
                        textColor={"#F8EDFF"}
                        _hover={{ bg: "transparent", borderBottom: "2px" }}
                    >
                        Home
                    </Button>
                </Link>
                <Link to="/Games">
                    <Button
                        bg={"transparent"}
                        textColor={"#F8EDFF"}
                        _hover={{ bg: "transparent", borderBottom: "2px" }}
                    >
                        All Game
                    </Button>
                </Link>
                <Link to="/Favorite">
                    <Button
                        bg={"transparent"}
                        textColor={"#F8EDFF"}
                        _hover={{ bg: "transparent", borderBottom: "2px" }}
                    >
                        Favorite
                    </Button>
                </Link>
                {/* {!localStorage.getItem("accessToken") ? (
        ""
        ) : (
        <Link to="/YourGame">
            <Button
            bg={"transparent"}
            textColor={"#F8EDFF"}
            _hover={{ bg: "transparent", borderBottom: "2px" }}
            >
            My Game
            </Button>
        </Link>
        )} */}
            </Flex>
            <Flex m={3}>
                {!localStorage.getItem("accessToken") ? (
                    <Link to="/Login">
                        <Button
                            mx={10}
                            bg={"transparent"}
                            textColor={"#F8EDFF"}
                            _hover={{ bg: "transparent", borderBottom: "2px" }}
                        >
                            Login
                        </Button>
                    </Link>
                ) : (
                    <>
                        <Button
                            bg={"transparent"}
                            textColor={"#F8EDFF"}
                            _hover={{ bg: "none" }}
                        >
                            Hi {localStorage.getItem("userName")}
                        </Button>
                        <Link to="/Login">
                            <Button
                                mx={10}
                                bg={"transparent"}
                                textColor={"#F8EDFF"}
                                _hover={{ bg: "transparent", borderBottom: "2px" }}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Link>
                    </>
                )}
            </Flex>
        </Flex>
    );
}

export default Navbar;
