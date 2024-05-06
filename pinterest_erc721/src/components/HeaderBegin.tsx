import React from "react";
import img_Logo from "../images/img_Logo.png";
interface HeaderBeginProps {
    onLoginClick: () => void;
}

const HeaderBegin: React.FC<HeaderBeginProps> = ({ onLoginClick }) => {
    return (
        <nav className='flex justify-between p-4 font-bold'>
            <div className='flex items-center space-x-2 text-red-600'>
                <img className="w-8" src={img_Logo} alt="Logo" />
                <span>Pinterest</span>
            </div>
            <div className='flex space-x-4 justify-center items-center '>
                <div className='flex space-x-4'>
                    <span>Giới thiệu </span>
                    <span>Doanh nghiệp</span>
                    <span>Blog </span>
                </div>
                <div>
                    <button onClick={onLoginClick} className='bg-red-600 px-4 py-2 font-semibold text-white rounded-full'>Đăng nhập</button>
                </div>
            </div>
        </nav>
    );
}
export default HeaderBegin;
