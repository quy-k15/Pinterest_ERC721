import React from "react";
import HeaderBegin from "../components/HeaderBegin";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../store/loginSlice";
import { RootState } from "../store/store";
import img_dish1 from "../images/img_dish1.png"
import img_dish2 from "../images/img_dish2.png"
import img_dish3 from "../images/img_dish3.png"
import img_dish4 from "../images/img_dish4.png"
import "../styles/fonts.css";

const BeginPage: React.FC = () => {
    const isLoginOpen = useSelector((state: RootState) => state.login.isOpen);
    const dispatch = useDispatch();
    return (
        <div className="w-full mx-auto my-2 overflow-hidden">
            <HeaderBegin onLoginClick={() => dispatch(toggleLogin())} />
            <Login open={isLoginOpen} handleOpen={() => dispatch(toggleLogin())} />

            <div className=" h-screen overflow-hidden font-custom">
                <div className="flex flex-col justify-center pt-12 mt-12">
                    <div className="flex justify-center font-bold text-6xl">
                        Xem vật phẩm tiếp theo
                    </div>
                    <div className="flex justify-center font-semibold text-5xl text-green-800 mt-4">
                        Thịnh hành trong trò chơi
                    </div>
                    <div className="flex justify-center  space-x-2 py-12">
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-green-800 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-4">
                    <div className="flex flex-col space-y-4 transform -translate-y-24">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=12"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=13"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform -translate-y">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=15"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=16"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform translate-y-24">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=25"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=26"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform translate-y-48">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=35"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=36"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform translate-y-24">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=42"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=43"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform -translate-y">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=55"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=56"
                            alt="img_item"
                        ></img>
                    </div>
                    <div className="flex flex-col space-y-4 transform -translate-y-24">
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=65"
                            alt="img_item"
                        ></img>
                        <img
                            className="rounded-lg h-96"
                            src="https://picsum.photos/400/800?random=66"
                            alt="img_item"
                        ></img>
                    </div>
                </div>
                <div className="flex justify-center absolute inset-x-0 bottom-2">
                    <div className="bg-green-800 h-12 w-12 rounded-full flex justify-center items-center shadow-sm animate-bounce">
                        <svg fill="none" viewBox="0 0 24 24 " stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className="h-screen overflow-hidden font-custom flex my-auto"
                style={{ backgroundColor: "#FFFD92" }}
            >
                <div className="flex-1  flex ">
                    <a className="block mx-auto my-auto" style={{width:'537px', height:'611px'}}>
                        <div className="relative">
                        
                            <div  className="absolute top-0 right-5 w-44">
                                <img src={img_dish2} alt="Description of dish 2"></img>
                            </div>
                            <div  className="absolute top-40 left-0 w-52">
                                <img src={img_dish3} alt="Description of dish 3"></img>
                            </div>
                            <div  className="absolute bottom-0 right-0 w-40">
                                <img src={img_dish4} alt="Description of dish 4"></img>
                            </div>
                            <div className="absolute top-24 left-1/3 w-72">
                                <img src={img_dish1} alt="Description of dish 1"></img>
                            </div>
                        </div>

                    </a>
                </div>
                <div className="flex-1 flex justify-center items-center " style={{ color: '#E003BD' }}>
                    <div className="w-full h-1/2  ">
                        <h1 className="flex justify-center font-bold text-6xl">
                            Tìm kiếm ý tưởng
                        </h1>
                        <p className="flex w-1/2 justify-center mx-auto my-7 text-xl font-Medium">
                            Bạn muốn thử điều gì tiếp theo? Hãy nghĩ về ý tưởng bạn yêu
                            thích—như &quot;bữa tối với món gà dễ làm&quot;—và xem bạn tìm thấy gì.
                        </p>
                        <button className="flex justify-center mx-auto rounded-full px-4 py-3 text-gray-100 font-bold text-lg" style={{ backgroundColor: '#E60023' }}>Khám phá</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BeginPage;
