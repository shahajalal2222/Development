import React from 'react';
import { logo } from "../assets/images/index";
import Container from './Container';
import SearchInput from './searchInput';
import { HiOutlineMenu } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import { headerNavigation } from '../constants';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="border-b border-slate-300 sticky top-0 z-50">
      <Container className="py-7 flex items-center gap-x-3 md:gap-x-7 justify-between">
        <Link to={'/'}>
        <img src={logo} alt="logo" className="w-20" />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7
             test-sm uppercase font-medium text-ligtText">
          {
            headerNavigation?.map((item)=>(
              <NavLink key={item?.title} 
              to={item?.link}
              className="hover:text-black hoverEffect 
              cursor-pointer relative group overflow-hidden"> {item?.title}
              <span className="absolute bottom-0 left-0 inline-block
              w-full h-px bg-black -translate-x-[100%] group-hover:translate-x-0
              hoverEffect"/></NavLink>
            ))}
          <Link to={'/cart'} className="text-2xl hover:text-primary hoverEffect 
          relative group">
            <IoMdCard />
            <span className="absolute -right-2 -top-1 w-3.5 h-3.5
            rounded-full text-[9px] bg-gray-400 group-hover:bg-black text-white flex 
            items-center justify-center hoverEffect">0</span>
          </Link>
          <Link to={'/signin'} className="text-xl hover:primary hoverEffect">
            <FaUserAlt />
          </Link>
        </div>
        <button className="text-2xl text-lightText hover:text-primary md:hidden 
            hoverEffect">
          <HiOutlineMenu />
        </button>
      </Container>
    </div>
  )
}

export default Header;
