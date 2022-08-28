 import { useEffect, useState } from 'react'


 import React from 'react'
 
 export default function BackToTop() {
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        setBackToTop(true)
    }else {
        setBackToTop(false)
    }
})
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
   return (
     <div>
        {backToTop && (
            <button style={{
                position:"fixed",
                 bottom: "50px",
                 right:"50px",
                 height:"50px",
                 width: "50px",
                 fontSize: "40px",
                 border:"none",
                background:"transparent",
                color:"#7620FF"
            }} onClick={scrollUp}><i class="fa-solid fa-circle-arrow-up"></i></button>
        )}
     </div>
   )
 }
 