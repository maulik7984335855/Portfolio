import React from 'react';
import html from '../../public/html.png';
import javascript from '../../public/javascript.png';
import css from '../../public/css.jpg';
import oracle from '../../public/oracle.png';
import java from '../../public/java.png';
import spring from '../../public/spring.png';
import springBoot from '../../public/springBoot.jpg'


const Experience = () => {

    const cardItem = [
        {
            id:1,
            logo:html,
            name:"Html"
        },
        {
            id:2,
            logo:javascript,
            name:"javascript"
        },
        {
            id:3,
            logo:css,
            name:"Css"
        },
        {
            id:4,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:5,
            logo:spring,
            name:"Spring"
        },
        {
            id:6,
            logo:java,
            name:"Java"
        },
        {
            id:7,
            logo:springBoot,
            name:"Spring Boot"
        },
    ]

  return (
    <>
    <div name="Experience" className='max-w-screen-2xl  container mx-auto px-4 mx:px-20 my-16'>
        <div>
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <span className='underline font-semibold'>I am fresher in this technologies</span>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {cardItem.map(({id,logo,name})=>{
                    return(
                        <>
                            <div key={id} className='flex items-center justify-center flex-col border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'>
                                <img src={logo} alt={name} className='w-[150px]   rounded-full ' />
                                <div>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                  
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

export default Experience