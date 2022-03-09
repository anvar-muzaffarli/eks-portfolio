import React from 'react'
import Typed from 'react-typed';


const Header = () => {
  return (
   <div className='header-wrapper'>
       <div className='main-info'>
           <h1>Bulud xidmətləri üzrə Dəstəkçiniz</h1>

           <Typed
                className='typed-text'
                strings={[
                    'Microsoft Azure Fundamentals',
                    'Microsoft Technology Associate',
                    'Microsoft Certified Trainer',
                    'Microsoft Azure Developing Solutions Associate'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
                   
                </Typed>
                <a href="" className='downloadCV'>CV-mi endir</a>
           </div>
          
       
       </div>
  )
}

export default Header