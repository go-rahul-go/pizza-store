import React, { useContext } from 'react'
import { pizzaData } from '../Data'
import { ThemeContext } from '../App'

const PizzaMenu = () => {
    const theme = useContext(ThemeContext)
    return (
        <section className={theme==="light"?"p-5 menu-container":" p-5 bg-gray-900  menu-container"}>
            <div className='grid mob-pizza-menu md:grid-cols-2 lg:grid-cols-4'>
                
            {
                pizzaData.map((pizza, index) => {
                    return (
            <div className={theme==="light"?" mob-pizza-card  lg:pizza-card":" mob-pizza-card dark-mob-pizza-card text-gray-200 lg:pizza-card lg:dark-pizza-card"} key={index}>
                                <div className='h-[65%]  overflow-hidden'>
                                    <img src={pizza.url} alt="" className='w-[100%] h-[100%] object-contain'/>
                                </div>  
                                <div className='py-2 px-2'>
                                    <h2 className='capitalize font-bold text-xs md:text-2xl lg:text-xl '>{pizza.title}</h2>
                                    <p className={theme==="light"?"text-blue-400 text-lg font-bold md:text-2xl lg:text-xl":"text-orange-400 text-lg font-bold md:text-2xl lg:text-xl"}>{`$${pizza.price}`}</p>
                                </div>
                            </div>
                    )
                    })
            }
            </div>
        </section>
    )
}

export default PizzaMenu