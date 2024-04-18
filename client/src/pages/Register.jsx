import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Text, Input, Checkbox, Button, Image, } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2"

export const Register = () => {
    const [register, setRegister] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setRegister({
            ...register,
            [name]: value,
        });
        console.log(register);
    };

    const handleSumbit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios({
                url: "http://localhost:3000/register",
                method: "POST",
                data: register,
            });

            navigate("/login");
        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <Box bgColor={"#e9d01d"}>
            <Navbar></Navbar>
            <Flex bgColor="Teal" minH="100vh" align="center" justify="center">
                <Flex
                    flexDirection={"column"}
                    height={600}
                    bgColor="#202020"
                    px={40}
                    borderRadius={5}
                    justifyContent={"center"}
                    maxW={"100vh"}
                >
                    <Flex flexDirection={"column"} alignItems={"center"}>
                        <Image src="../src/assets/logo.png" w={"20%"} mb={10}></Image>
                    </Flex>
                    <form onSubmit={handleSumbit}>
                        <Input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="user name"
                            onChange={handleInput}
                            mb={4}
                            textColor={"#F8EDFF"}
                        />
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            onChange={handleInput}
                            mb={4}
                            textColor={"#F8EDFF"}
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleInput}
                            mb={4}
                            textColor={"#F8EDFF"}
                        />
                        <Flex align="center" justify="end" mb={4}>
                            <Link to="/forgot-password">
                                <Text color="teal.500" fontSize="sm" textDecoration="underline">
                                    Forgot Your Password
                                </Text>
                            </Link>
                        </Flex>
                        <Button colorScheme="teal" type="submit" width="100%" mb={6}>
                            REGISTER NOW
                        </Button>
                        <Text
                            textAlign="center"
                            color="#f1f1f1"
                            textDecoration="underline"
                            mb={6}
                        >
                            Privacy Policy
                        </Text>
                    </form>
                    <Text textAlign="center" color="#f4f4f480" fontSize="sm" mb={4}>
                        Have an Account ?{" "}
                        <Link to="/Login">
                            <Text as="span" textDecoration="underline">
                                Sign In
                            </Text>
                        </Link>
                    </Text>
                </Flex>
            </Flex>
            <Footer></Footer>
        </Box>
    );
};
