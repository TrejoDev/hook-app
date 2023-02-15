import { useEffect, useState } from "react"


export const Message = () => {

    const [cords, setCords] = useState({ x:0 , y:0 })


    useEffect(() => {

        const onMouseMove = ( {x, y} ) => {
            //const cords = { x, y };
            setCords({ x, y })
            console.log( cords );
        }
      
        window.addEventListener('mousemove', onMouseMove );
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove )
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify(cords) } {/* JSON.stringify para convertir el objeto a string */}
    </>
  )
}
