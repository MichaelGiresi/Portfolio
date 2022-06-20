import React, {useState, useEffect} from 'react'
import test from '../scss/test/test.css'

const Test = () => {

    const [triangle00, setTriangle00] = useState(true)


    const triangleSwap = () => {

        const t1 = document.getElementById('row0-t0')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t1.classList.add('triangle-true')
            } else if(!triangle00) {
                t1.classList.remove('triangle-true')
            }
        
    } 
    useEffect (() => {
        console.log(triangle00)


    })




// useEffect(() => {

//     if(Test) {
//         if(!triangle00) {
//             setTriangle00(true)
//         }
//     }

// })
    




  return (




    <div className='test'>

        <div className='row0'>
            <div id="row0-t0"className='tri row0-t0 hoverChange triangle-border-white' onClick={() => triangleSwap()}></div>
            <div className='row0-t1 hoverChange triangle-border-white'></div>
            <div className='row0-t2 hoverChange triangle-border-white'></div>
            <div className='row0-t3 hoverChange triangle-border-white'></div>
            <div className='row0-t4 hoverChange triangle-border-white'></div>
            <div className='row0-t5 hoverChange triangle-border-white'></div>
            <div className='row0-t6 hoverChange triangle-border-white'></div>
            <div className='row0-t7 hoverChange triangle-border-white'></div>
            <div className='row0-t8 hoverChange triangle-border-white'></div>
            <div className='row0-t9 hoverChange triangle-border-white'></div>
        </div>

        <div className='row1'>
            <div className='row1-t0 hoverChange triangle-border-black'></div>
            <div className='row1-t1 hoverChange triangle-border-black'></div>
            <div className='row1-t2 hoverChange triangle-border-black'></div>
            <div className='row1-t3 hoverChange triangle-border-black'></div>
            <div className='row1-t4 hoverChange triangle-border-black'></div>
            <div className='row1-t5 hoverChange triangle-border-black'></div>
            <div className='row1-t6 hoverChange triangle-border-black'></div>
            <div className='row1-t7 hoverChange triangle-border-black'></div>
            <div className='row1-t8 hoverChange triangle-border-black'></div>
            <div className='row1-t9 hoverChange triangle-border-black'></div>
        </div>

        <div className='row2'>
            <div className='row2-t0 hoverChange triangle-border-white'></div>
            <div className='row2-t1 hoverChange triangle-border-white'></div>
            <div className='row2-t2 hoverChange triangle-border-white'></div>
            <div className='row2-t3 hoverChange triangle-border-white'></div>
            <div className='row2-t4 hoverChange triangle-border-white'></div>
            <div className='row2-t5 hoverChange triangle-border-white'></div>
            <div className='row2-t6 hoverChange triangle-border-white'></div>
            <div className='row2-t7 hoverChange triangle-border-white'></div>
            <div className='row2-t8 hoverChange triangle-border-white'></div>
            <div className='row2-t9 hoverChange triangle-border-white'></div>
        </div>

        <div className='row3'>
            <div className='row3-t0 hoverChange triangle-border-black'></div>
            <div className='row3-t1 hoverChange triangle-border-black'></div>
            <div className='row3-t2 hoverChange triangle-border-black'></div>
            <div className='row3-t3 hoverChange triangle-border-black'></div>
            <div className='row3-t4 hoverChange triangle-border-black'></div>
            <div className='row3-t5 hoverChange triangle-border-black'></div>
            <div className='row3-t6 hoverChange triangle-border-black'></div>
            <div className='row3-t7 hoverChange triangle-border-black'></div>
            <div className='row3-t8 hoverChange triangle-border-black'></div>
            <div className='row3-t9 hoverChange triangle-border-black'></div>
        </div>

        <div className='row4'>
            <div className='row4-t0 hoverChange triangle-border-white'></div>
            <div className='row4-t1 hoverChange triangle-border-white'></div>
            <div className='row4-t2 hoverChange triangle-border-white'></div>
            <div className='row4-t3 hoverChange triangle-border-white'></div>
            <div className='row4-t4 hoverChange triangle-border-white'></div>
            <div className='row4-t5 hoverChange triangle-border-white'></div>
            <div className='row4-t6 hoverChange triangle-border-white'></div>
            <div className='row4-t7 hoverChange triangle-border-white'></div>
            <div className='row4-t8 hoverChange triangle-border-white'></div>
            <div className='row4-t9 hoverChange triangle-border-white'></div>
        </div>

        <div className='row5'>
            <div className='row5-t0 hoverChange triangle-border-black'></div>
            <div className='row5-t1 hoverChange triangle-border-black'></div>
            <div className='row5-t2 hoverChange triangle-border-black'></div>
            <div className='row5-t3 hoverChange triangle-border-black'></div>
            <div className='row5-t4 hoverChange triangle-border-black'></div>
            <div className='row5-t5 hoverChange triangle-border-black'></div>
            <div className='row5-t6 hoverChange triangle-border-black'></div>
            <div className='row5-t7 hoverChange triangle-border-black'></div>
            <div className='row5-t8 hoverChange triangle-border-black'></div>
            <div className='row5-t9 hoverChange triangle-border-black'></div>
        </div>

        <div className='row6'>
            <div className='row6-t0 hoverChange triangle-border-white'></div>
            <div className='row6-t1 hoverChange triangle-border-white'></div>
            <div className='row6-t2 hoverChange triangle-border-white'></div>
            <div className='row6-t3 hoverChange triangle-border-white'></div>
            <div className='row6-t4 hoverChange triangle-border-white'></div>
            <div className='row6-t5 hoverChange triangle-border-white'></div>
            <div className='row6-t6 hoverChange triangle-border-white'></div>
            <div className='row6-t7 hoverChange triangle-border-white'></div>
            <div className='row6-t8 hoverChange triangle-border-white'></div>
            <div className='row6-t9 hoverChange triangle-border-white'></div>
        </div>

        <div className='row7'>
            <div className='row7-t0 hoverChange triangle-border-black'></div>
            <div className='row7-t1 hoverChange triangle-border-black'></div>
            <div className='row7-t2 hoverChange triangle-border-black'></div>
            <div className='row7-t3 hoverChange triangle-border-black'></div>
            <div className='row7-t4 hoverChange triangle-border-black'></div>
            <div className='row7-t5 hoverChange triangle-border-black'></div>
            <div className='row7-t6 hoverChange triangle-border-black'></div>
            <div className='row7-t7 hoverChange triangle-border-black'></div>
            <div className='row7-t8 hoverChange triangle-border-black'></div>
            <div className='row7-t9 hoverChange triangle-border-black'></div>
        </div>
    

    </div>
  )
}

export default Test