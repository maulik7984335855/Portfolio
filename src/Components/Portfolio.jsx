import React from 'react';
import java from '../../public/java.png';
import python from '../../public/python.webp';
import mongoDb from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';



const Portfolio = () => {

    const cardItem = [
        {
            id:1,
            logo:mongoDb,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"express"
        },
        {
            id:3,
            logo:reactjs,
            name:"React js"
        },
        {
            id:4,
            logo:nodejs,
            name:"Node js"
        },
        {
            id:5,
            logo:python,
            name:"Python"
        },
        {
            id:6,
            logo:java,
            name:"Java"
        },
    ]

  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl  container mx-auto px-4 mx:px-20 mt-10'>
        <div>
            <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
            <span className='underline font-semibold'>Featured projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {cardItem.map(({id,logo,name})=>{
                    return(
                        <>
                            <div key="id" className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                                <img src={logo} alt={name} className='w-[120px] h-[120px] p-1 rounded-full border-[2px ]' />
                                <div>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, porro.</p>
                                </div>
                                <div className='space-x-3 justify-around px-6 py-3'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 font-bold py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white px-4 font-bold py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    
    </div>
    </>

  )
}

export default Portfolio