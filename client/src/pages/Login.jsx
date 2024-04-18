import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Box,
    Flex,
    Text,
    Input,
    Checkbox,
    Button,
    Image,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export const Login = () => {
   
    const navigate = useNavigate();
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    });

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/login",
                formLogin
            );

            localStorage.setItem("accessToken", "Bearer " + data.accessToken);
            localStorage.setItem("id", data.id);
            localStorage.setItem("email", data.email);
            localStorage.setItem("userName", data.userName);

            navigate("/");

        } catch (error) {
            console.log(error, "loginpage jsx >>>>>>>>>>>>>>>>");
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "OK",
            });
            throw error;
        }
    };

    async function handleCredentialResponse(response) {
        try {
            const { data } = await axios.post(
                "http://localhost:3000/login-google",
                null,
                {
                    headers: {
                        google_token: response.credential,
                    },
                }
            );

            localStorage.setItem("accessToken", "Bearer " + data.accessToken);
            localStorage.setItem("id", data.id);
            localStorage.setItem("email", data.email);
            localStorage.setItem("userName", data.userName);

            navigate("/");
        } catch (error) {
            console.log(error, "login google");
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };

    useEffect(() => {
        google.accounts.id.initialize({
            client_id:
                "510282774877-4vmh1qob0ca4qefmbvfth915h9sq1b0d.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
            theme: "outline",
            size: "large",
        });
    }, []);

    return (
        <Box bgColor="white">
            <Navbar></Navbar>
            <Flex bgColor="Tosca" minH="100vh" align="center" justify="center">
                <Flex
                    flexDirection={"column"}
                    height={600}
                    bgColor="#000"
                    px={40}
                    borderRadius={5}
                    justifyContent={"center"}
                    maxW={"100vh"}
                >
                    <Flex flexDirection={"column"} alignItems={"center"}>
                        <Image src="../src/assets/logo.png" w={"20%"} mb={10}></Image>
                    </Flex>
                    <form onSubmit={handleOnSubmit}>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                            mb={4}
                            textColor={"#F8EDFF"}
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            mb={4}
                            textColor={"#F8EDFF"}
                        />

                        <div
                            className="flex items-center justify-center"
                            style={{ margin: "10px" }}
                            id="buttonDiv"
                        ></div>

                        <Flex align="center" justify="end" mb={4}>
                            <Link to="/forgot-password">
                                <Text color="teal.500" fontSize="sm" textDecoration="underline">
                                    Forgot Your Password
                                </Text>
                            </Link>
                        </Flex>
                        <Button colorScheme="teal" type="submit" width="100%" mb={6}>
                            Sign In
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
                    <Text textAlign="center" color="#ffff" fontSize="sm" mb={4}>
                        Don't Have an Account ?{" "}
                        <Link to="/Register">
                            <Text as="span" textDecoration="underline">
                                Sign Up
                            </Text>
                        </Link>
                    </Text>
                </Flex>
            </Flex>
            <Footer></Footer>
        </Box>
    );
};
