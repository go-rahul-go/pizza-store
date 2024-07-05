import { NavLink } from "react-router-dom"
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
const ani = {
    start: {
        x: "-100vw"
    },
    end: {
        x: 0,
        transition: { duration: 0.8 }
    },
    leave:{
        x:"-100vw"
    }
}
const Nav = ({ changeTheme, theme }) => {
    const themeColor = useContext(ThemeContext);
    const [hover, hoverOption] = useState(theme + " theme");
    const [showMobMenu, changeMobMenu] = useState(false)
    const [mobMenuHeight,changeMobMenuHeight]=useState(0)
   
    const handleChangeTheme = () => {
        theme === "light" ? changeTheme("dark") : changeTheme("light");



    }
    useEffect(()=>{
        changeMobMenuHeight(document.body.scrollHeight)
        console.log(document.body.scrollHeight)
    },[])
    return (
        <nav className={theme == "light" ? "nav border-gray-400" : "nav bg-navDarkBg text-gray-200 border-gray-700"}>
            <div className={"mob-menu lg:mob-menu-hide"} onClick={() => changeMobMenu(!showMobMenu)}>
                <MdMenu className={showMobMenu?"hidden":"visible text-2xl"}/>
                <IoClose className={showMobMenu?"visible text-2xl":"hidden"}/>
            </div>
            <div className='h-[60px]  flex justify-center items-center '>
                <p className='font-semibold text-2xl uppercase'>project pizza </p>
            </div>

            <ul className="nav-links-hide lg:nav-links">
                <li>
                    <NavLink>home</NavLink>
                </li>
                <li> <NavLink>menu</NavLink></li>
                <li> <NavLink>recipes</NavLink></li>
                <li> <NavLink>contact</NavLink></li>
                <li className={theme === "light" ? "p-1 bg-blue-400 rounded" : "p-1 bg-orangeBg rounded"}><NavLink>login</NavLink></li>

            </ul>
            <div className="w-[40px] h-[40px]  grid place-items-center circle theme-btn" onClick={handleChangeTheme} title={theme}>
                {theme === "light" ? <FiSun className="text-xl theme-btn" /> : <FaRegMoon className="text-xl theme-btn" />}
            </div>
            <AnimatePresence>
                <motion.div className={showMobMenu ? "mob-nav-links" : "mob-nav-links-hide lg:mob-nav-links-hide"} variants={ani} initial="start" animate={showMobMenu ? "end" : "start"} exit="leave" key={showMobMenu} style={{height:mobMenuHeight}}>
                    <NavLink>home</NavLink>
                    <NavLink>menu</NavLink>
                    <NavLink>receipes</NavLink>
                    <NavLink>login</NavLink>
                </motion.div>
            </AnimatePresence>


        </nav>
    )
}

export default Nav