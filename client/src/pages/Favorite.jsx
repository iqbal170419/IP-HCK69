import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "../redux/favSlicec";

const Favorite = () => {
   
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.list);



    const deleteData = async (id) => {
        try {
            await axios({
                method: "DELETE",
                url: `http://localhost:3000/favorite/${id}`,
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                },
            });

            dispatch(fetchFav())

            favorites.map((el) => {
                Swal.fire({
                    title: `${el.Letter.title} Deleted From Your Favorites`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(fetchFav())
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
            />
            <div className="flex flex-wrap mt-16 justify-center">
                <div className="w-full max-w-full px-32 mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            {/* card header */}
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span className="mr-3 font-semibold text-3xl">
                                        Game Invitatiton
                                    </span>
                                    
                                </h3>
                            </div>
                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start min-w-[175px]">
                                                    Background Image
                                                </th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">
                                                    Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {favorites &&
                                                favorites.map((item) => (
                                                    <tr className="border-b border-dashed last:border-b-0">
                                                        <td className="p-3 pl-0">
                                                            <div className="flex items-center">
                                                                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                    <img
                                                                        src={item.Letter.imgUrl}
                                                                        className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col justify-start">
                                                                    <Link>
                                                                        <h1 className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                                                            {item.Letter.name}
                                                                        </h1>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        
                                                        <td className="p-3 pr-12 text-end">
                                                            <Link to={`/edit-fav/${item.Letter.id}`}>
                                                                <button
                                                                    // onClick={handleLogout}
                                                                    className="bg-yellow-400 text-gray-200 border border-gray-300 p-2 mr-2 rounded-xl hover:bg-yellow-600 hover:text-gray-100"
                                                                >
                                                                    Edit
                                                                </button>
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                
                                                                    deleteData(item.id);
                                                                }}
                                                                className="bg-red-600 text-gray-200 border border-gray-300 p-2 rounded-xl hover:bg-red-800 hover:text-gray-100"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorite;
