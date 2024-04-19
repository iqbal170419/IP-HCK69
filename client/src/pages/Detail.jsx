import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/detailSlice";

function DetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.details.list);
    const genres = useSelector((state) => state.details.genres);

    const handleAdd = async () => {
        try {
            await axios({
                method: "POST",
                url: `http://localhost:3000/favorite/${id}`,
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                },
            });
            Swal.fire({
                title: `Added ${detail.name} To Favorite List`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: error.response.data.message,
                icon: "error",
                timer: 1000,
                showConfirmButton: false,
            });
        }
    };
    console.log(detail, "<<<<");

    useEffect(() => {
        dispatch(fetchDetail(id));
        
    }, [dispatch, id]);

    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-slate-700-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="pict"
                            className="lg:w-2/5 w-full object-cover object-center rounded border border-gray-200"
                            src={detail.imgUrl}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-white tracking-widest font-semibold">
                                Game Invitation
                            </h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">
                                {detail.name}
                            </h1>
                            <div className="flex mb-4 pt-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-white ml-1">
                                        {detail.rating} Rating's
                                    </span>
                                </span>
                            </div>
                            <h1 className="text-2xl pb-2 text-white font-serif">
                                Price :{ }
                            </h1>
                            <p className="leading-relaxed text-white">{detail.synopsis}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex">
                                    <span className="mr-3 text-white font-mono font-bold">
                                        Genres : {genres}
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailPage;
