import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GameId.css";
import { AiFillWindows, AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameById } from "../redux/gameByIdSlice";
import rupiah from "../utils";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";

export const GameId = () => {
    const { id } = useParams();

    const [games, setGames] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/${id}`);

            setGames(response.data);
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    const handleBuy = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/payment/${id}`, {
                headers: {
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
            });
            console.log(data);
            // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
            window.snap.pay(data.transactionToken, {
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    // alert("payment success!");
                    Swal.fire({
                        title: "Success",
                        text: "payment success!",
                        confirmButtonText: "OK",
                    });
                    console.log(result);
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    Swal.fire({
                        title: "Success",
                        text: "waiting your payment!",
                        confirmButtonText: "OK",
                    });
                    console.log(result);
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    // alert("payment failed!");
                    Swal.fire({
                        title: "Success",
                        text: "payment failed!",
                        confirmButtonText: "OK",
                    });
                    console.log(result);
                },
                onClose: function () {
                    Swal.fire({
                        title: "Success",
                        text: "you closed the popup without finishing the payment",
                        confirmButtonText: "OK",
                    });
                    // alert("you closed the popup without finishing the payment");
                },
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try{
            const token = `Bearer ${localStorage.getItem('access_token')}`
            const response = await axios.delete(`http://localhost:3000/${id}`, {
                headers : {
                    "Authorization" : token
                }
            })
            navigate('/')
        }catch(error){
            console.log(error);
            Swal.fire({
                icon: "error",
                title: `Error`
            })
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (id) => {
        try {
            const requestBody = { price, background_image, rating }
            await axios({
                method: "UPDATE",
                url: `http://localhost:3000/${id}`, requestBody,
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                },
            });

            fetchData();

            Swal.fire({
                title: "Good job!",
                text: response.data.message,
                icon: "success",
                timer: 2000,

            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="rmaincontainer">
            <Navbar></Navbar>
            <div className="rcontainer">
                <div className="rLine"></div>
                <p className="rmaintitle">{games.name}</p>
                <div className="roverviewDiv"></div>
                <div className="rmainDiv">
                    <div className="rleftmainDiv">
                        <div id="rgametrailer" className="rgamevideo">
                            <Flex
                                mt={10}
                                backgroundColor="#000"
                                color="white"
                                ml={"7.3%"}
                                mr={"7.3%"}
                                borderRadius="10px"
                                p={4}
                            >
                                <Image src={games.background_image} maxH={304}></Image>
                            </Flex>
                        </div>
                        <div className="rdescriptionDiv">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                                obcaecati repellendus praesentium et eaque officia cupiditate
                                voluptas, beatae deleniti iste inventore, consequatur
                                reprehenderit, fugit rem fuga aut mollitia animi quam!
                            </p>
                        </div>
                        <div className="ropenworld">
                            <p className="rdestitle">{games.name}</p>
                            <p className="rdesdes">
                                Includes {games.name} story mode and online
                                <br />
                                <br />
                                In {games.name} video game, Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Unde reprehenderit accusantium
                                voluptas facere nihil, natus maxime ipsum. Nisi corrupti numquam
                                corporis eligendi, at odit enim nemo accusantium! Expedita, hic
                                officiis.
                                <br />
                                <br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
                                illo? Porro consequuntur voluptates exercitationem accusamus
                                adipisci? Corporis quae assumenda vitae. Magnam ex beatae dolor,
                                asperiores commodi recusandae! Eum, consequatur veniam! Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Tempore
                                aliquam quam magni eius ut iure quisquam vel? Fuga aut
                                provident, nulla consequatur sed, omnis quia numquam blanditiis,
                                quidem temporibus aliquid? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Repellendus iusto officia quas
                                blanditiis, temporibus ex veritatis velit alias nesciunt
                                necessitatibus suscipit officiis aspernatur sapiente nulla
                                aperiam! Maxime iure minus harum. Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Iusto necessitatibus dolor
                                debitis veritatis a repellendus adipisci ut recusandae ex
                                consectetur distinctio commodi, accusantium deserunt saepe natus
                                est libero asperiores quasi.
                            </p>
                        </div>
                        <div className="rfollowDiv">
                            <p className="rfollow">Follow Us</p>
                            <div className="rfollowicons">

                                <div>
                                    <AiFillFacebook className="riconshover" />
                                    <BsInstagram className="riconshover" />
                                    <BsTwitter className="riconshover" />
                                    <BsYoutube className="riconshover" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="rrightmainDiv">
                        <div className="ralldetailprice">
                            <div className="rdpap">
                                <p id="rcalculation" className="rbuyprice">
                                    {rupiah(games.price)}
                                </p>
                            </div>
                        </div>
                        <button
                            style={{ borderRadius: "20px" }}
                            id="raddcart"
                            onClick={handleBuy}
                        >
                            Buy Game
                        </button>
                        <button
                            style={{ borderRadius: "10px" }}
                            id="raddcart"
                            onClick={handleUpdate}
                        >
                            Update Game
                        </button>
                        <button
                            style={{ borderRadius: "10px" }}
                            id="raddcart"
                            onClick={handleDelete}
                        >
                            Delete Game
                        </button>
                        
                        
                        <br />
                        <div>
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Developer</p>
                                <p className="rrightlight">UBISOFT</p>
                            </span>
                            <div className="rrLine" />
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Publisher</p>
                                <p className="rrightlight">UBISOFT</p>
                            </span>
                            <div className="rrLine" />
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Rating</p>
                                <p className="rrightlight">{games.rating}</p>
                            </span>
                            <div className="rrLine" />
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Release Date</p>
                                <p className="rrightlight">{games.released}</p>
                            </span>
                            <div className="rrLine" />
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Platform</p>
                                <AiFillWindows className="rwindowlight" />
                            </span>
                            <div className="rrLine" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
