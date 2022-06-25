import React, {useState, useEffect} from 'react'
import test from '../scss/test/test.css'


// Ten audio Samples - Ten combinations of triangles.

const Test = () => {

    const [triangle00, setTriangle00] = useState(true)
    const [sound, setSound] = useState(false)


    const triangleSwap0 = () => {

        const t0 = document.getElementById('row0-t0')
        const t1 = document.getElementById('row0-t4')
        const t2 = document.getElementById('row1-t3')
        const t3 = document.getElementById('row1-t7')
        const t4 = document.getElementById('row3-t5')
        const t5 = document.getElementById('row4-t6')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    }
    
    const triangleSwap1 = () => {

        const t0 = document.getElementById('row0-t1')
        const t1 = document.getElementById('row2-t3')
        const t2 = document.getElementById('row7-t5')
        const t3 = document.getElementById('row3-t3')
        const t4 = document.getElementById('row6-t8')
        const t5 = document.getElementById('row0-t8')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    }
    
    const triangleSwap2 = () => {

        const t0 = document.getElementById('row7-t8')
        const t1 = document.getElementById('row3-t0')
        const t2 = document.getElementById('row4-t9')
        const t3 = document.getElementById('row7-t2')
        const t4 = document.getElementById('row2-t1')
        const t5 = document.getElementById('row1-t9')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap3 = () => {

        const t0 = document.getElementById('row3-t9')
        const t1 = document.getElementById('row1-t5')
        const t2 = document.getElementById('row2-t3')
        const t3 = document.getElementById('row5-t5')
        const t4 = document.getElementById('row5-t8')
        const t5 = document.getElementById('row7-t9')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap4 = () => {

        const t0 = document.getElementById('row5-t1')
        const t1 = document.getElementById('row6-t3')
        const t2 = document.getElementById('row6-t6')
        const t3 = document.getElementById('row4-t0')
        const t4 = document.getElementById('row2-t8')
        const t5 = document.getElementById('row0-t9')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap5 = () => {

        const t0 = document.getElementById('row4-t3')
        const t1 = document.getElementById('row3-t6')
        const t2 = document.getElementById('row7-t6')
        const t3 = document.getElementById('row1-t0')
        const t4 = document.getElementById('row1-t8')
        const t5 = document.getElementById('row0-t2')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap6 = () => {

        const t0 = document.getElementById('row5-t3')
        const t1 = document.getElementById('row4-t5')
        const t2 = document.getElementById('row5-t9')
        const t3 = document.getElementById('row0-t5')
        const t4 = document.getElementById('row5-t1')
        const t5 = document.getElementById('row2-t6')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap7 = () => {

        const t0 = document.getElementById('row5-t4')
        const t1 = document.getElementById('row1-t6')
        const t2 = document.getElementById('row2-t5')
        const t3 = document.getElementById('row4-t7')
        const t4 = document.getElementById('row6-t0')
        const t5 = document.getElementById('row6-t9')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap8 = () => {

        const t0 = document.getElementById('row1-t1')
        const t1 = document.getElementById('row3-t8')
        const t2 = document.getElementById('row6-t4')
        const t3 = document.getElementById('row7-t7')
        const t4 = document.getElementById('row4-t2')
        const t5 = document.getElementById('row0-t7')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    const triangleSwap9 = () => {

        const t0 = document.getElementById('row5-t1')
        const t1 = document.getElementById('row6-t3')
        const t2 = document.getElementById('row6-t6')
        const t3 = document.getElementById('row4-t0')
        const t4 = document.getElementById('row2-t8')
        const t5 = document.getElementById('row0-t9')


            if(!triangle00) {
                setTriangle00(true)
            } else {
                setTriangle00(false)
            }

            if(triangle00) {
                t0.classList.add('triangle-true')
                t1.classList.add('triangle-true')
                t2.classList.add('triangle-true')
                t3.classList.add('triangle-true')
                t4.classList.add('triangle-true')
                t5.classList.add('triangle-true')
            } else if(!triangle00) {
                t0.classList.remove('triangle-true')
                t1.classList.remove('triangle-true')
                t2.classList.remove('triangle-true')
                t3.classList.remove('triangle-true')
                t4.classList.remove('triangle-true')
                t5.classList.remove('triangle-true')
            }
        
    } 

    



  return (




    <div className='test'>

        <div className='row0'>
            <div id="row0-t0"className='tri row0-t0 hoverChange triangle-border-white' onClick={() => triangleSwap0()}></div>
            <div id="row0-t1" className='row0-t1 hoverChange triangle-border-white' onClick={() => triangleSwap1()}></div>
            <div id="row0-t2" className='row0-t2 hoverChange triangle-border-white' onClick={() => triangleSwap5()}></div>
            <div className='row0-t3 hoverChange triangle-border-white'></div>
            <div id="row0-t4" className='row0-t4 hoverChange triangle-border-white' onClick={() => triangleSwap0()}></div>
            <div id="row0-t5" className='row0-t5 hoverChange triangle-border-white' onClick={() => triangleSwap6()}></div>
            <div className='row0-t6 hoverChange triangle-border-white' ></div>
            <div id="row0-t7" className='row0-t7 hoverChange triangle-border-white' onClick={() => triangleSwap8()}></div>
            <div id="row0-t8" className='row0-t8 hoverChange triangle-border-white' onClick={() => triangleSwap1()}></div>
            <div id="row0-t9" className='row0-t9 hoverChange triangle-border-white' onClick={() => triangleSwap4()}></div>
        </div>

        <div className='row1'>
            <div id="row1-t0" className='row1-t0 hoverChange triangle-border-black' onClick={() => triangleSwap5()}></div>
            <div id="row1-t1" className='row1-t1 hoverChange triangle-border-black' onClick={() => triangleSwap8()}></div>
            <div className='row1-t2 hoverChange triangle-border-black'></div>
            <div id="row1-t3" className='row1-t3 hoverChange triangle-border-black' onClick={() => triangleSwap0()}></div>
            <div className='row1-t4 hoverChange triangle-border-black'></div>
            <div id="row1-t5" className='row1-t5 hoverChange triangle-border-black' onClick={() => triangleSwap3()}></div>
            <div id="row1-t6" className='row1-t6 hoverChange triangle-border-black' onClick={() => triangleSwap7()}></div>
            <div id="row1-t7" className='row1-t7 hoverChange triangle-border-black' onClick={() => triangleSwap0()}></div>
            <div id="row1-t8" className='row1-t8 hoverChange triangle-border-black' onClick={() => triangleSwap5()}></div>
            <div id="row1-t9" className='row1-t9 hoverChange triangle-border-black' onClick={() => triangleSwap2()}></div>
        </div>

        <div className='row2'>
            <div className='row2-t0 hoverChange triangle-border-white'></div>
            <div id="row2-t1" className='row2-t1 hoverChange triangle-border-white' onClick={() => triangleSwap2()}></div>
            <div className='row2-t2 hoverChange triangle-border-white'></div>
            <div id="row2-t3" className='row2-t3 hoverChange triangle-border-white' onClick={() => triangleSwap3()}></div>
            <div id="row2-t3" className='row2-t4 hoverChange triangle-border-white' onClick={() => triangleSwap1()}></div>
            <div id="row2-t5" className='row2-t5 hoverChange triangle-border-white' onClick={() => triangleSwap7()}></div>
            <div id="row2-t6" className='row2-t6 hoverChange triangle-border-white' onClick={() => triangleSwap6()}></div>
            <div className='row2-t7 hoverChange triangle-border-white'></div>
            <div id="row2-t8" className='row2-t8 hoverChange triangle-border-white' onClick={() => triangleSwap4()}></div>
            <div className='row2-t9 hoverChange triangle-border-white'></div>
        </div>

        <div className='row3'>
            <div id="row3-t0" className='row3-t0 hoverChange triangle-border-black' onClick={() => triangleSwap2()}></div>
            <div className='row3-t1 hoverChange triangle-border-black'></div>
            <div className='row3-t2 hoverChange triangle-border-black'></div>
            <div id="row3-t3" className='row3-t3 hoverChange triangle-border-black' onClick={() => triangleSwap1()}></div>
            <div className='row3-t4 hoverChange triangle-border-black'></div>
            <div id="row3-t5" className='row3-t5 hoverChange triangle-border-black' onClick={() => triangleSwap0()}></div>
            <div id="row3-t6" className='row3-t6 hoverChange triangle-border-black' onClick={() => triangleSwap5()}></div>
            <div className='row3-t7 hoverChange triangle-border-black'></div>
            <div id="row3-t8" className='row3-t8 hoverChange triangle-border-black' onClick={() => triangleSwap8()}></div>
            <div id="row3-t9" className='row3-t9 hoverChange triangle-border-black' onClick={() => triangleSwap3()}></div>
        </div>

        <div className='row4'>
            <div id="row4-t0" className='row4-t0 hoverChange triangle-border-white' onClick={() => triangleSwap4()}></div>
            <div className='row4-t1 hoverChange triangle-border-white'></div>
            <div id="row4-t2" className='row4-t2 hoverChange triangle-border-white' onClick={() => triangleSwap8()}></div>
            <div id="row4-t3" className='row4-t3 hoverChange triangle-border-white' onClick={() => triangleSwap5()}></div>
            <div className='row4-t4 hoverChange triangle-border-white'></div>
            <div id="row4-t5" className='row4-t5 hoverChange triangle-border-white' onClick={() => triangleSwap6()}></div>
            <div id="row4-t6" className='row4-t6 hoverChange triangle-border-white' onClick={() => triangleSwap0()}></div>
            <div id="row4-t7" className='row4-t7 hoverChange triangle-border-white' onClick={() => triangleSwap7()}></div>
            <div className='row4-t8 hoverChange triangle-border-white'></div>
            <div id="row4-t9" className='row4-t9 hoverChange triangle-border-white' onClick={() => triangleSwap2()}></div>
        </div>

        <div className='row5'>
            <div className='row5-t0 hoverChange triangle-border-black'></div>
            <div id="row5-t1" className='row5-t1 hoverChange triangle-border-black' onClick={() => triangleSwap4()}></div>
            <div id="row5-t1" className='row5-t2 hoverChange triangle-border-black' onClick={() => triangleSwap6()}></div>
            <div id="row5-t3" className='row5-t3 hoverChange triangle-border-black' onClick={() => triangleSwap6()}></div>
            <div id="row5-t4" className='row5-t4 hoverChange triangle-border-black' onClick={() => triangleSwap7()}></div>
            <div id="row5-t5" className='row5-t5 hoverChange triangle-border-black' onClick={() => triangleSwap3()}></div>
            <div className='row5-t6 hoverChange triangle-border-black'></div>
            <div className='row5-t7 hoverChange triangle-border-black'></div>
            <div id="row5-t8" className='row5-t8 hoverChange triangle-border-black' onClick={() => triangleSwap3()}></div>
            <div id="row5-t9" className='row5-t9 hoverChange triangle-border-black' onClick={() => triangleSwap6()}></div>
        </div>

        <div className='row6'>
            <div id="row6-t0" className='row6-t0 hoverChange triangle-border-white' onClick={() => triangleSwap7()}></div>
            <div className='row6-t1 hoverChange triangle-border-white'></div>
            <div className='row6-t2 hoverChange triangle-border-white'></div>
            <div id="row6-t3" className='row6-t3 hoverChange triangle-border-white' onClick={() => triangleSwap4()}></div>
            <div id="row6-t4" className='row6-t4 hoverChange triangle-border-white' onClick={() => triangleSwap8()}></div>
            <div className='row6-t5 hoverChange triangle-border-white'></div>
            <div id="row6-t6" className='row6-t6 hoverChange triangle-border-white' onClick={() => triangleSwap4()}></div>
            <div className='row6-t7 hoverChange triangle-border-white'></div>
            <div id="row6-t8" className='row6-t8 hoverChange triangle-border-white' onClick={() => triangleSwap1()}></div>
            <div id="row6-t9" className='row6-t9 hoverChange triangle-border-white' onClick={() => triangleSwap7()}></div>
        </div>

        <div className='row7'>
            <div className='row7-t0 hoverChange triangle-border-black'></div>
            <div className='row7-t1 hoverChange triangle-border-black'></div>
            <div id="row7-t2" className='row7-t2 hoverChange triangle-border-black' onClick={() => triangleSwap2()}></div>
            <div className='row7-t3 hoverChange triangle-border-black'></div>
            <div className='row7-t4 hoverChange triangle-border-black'></div>
            <div id="row7-t5" className='row7-t5 hoverChange triangle-border-black' onClick={() => triangleSwap1()}></div>
            <div id="row7-t6" className='row7-t6 hoverChange triangle-border-black' onClick={() => triangleSwap5()}></div>
            <div id="row7-t7" className='row7-t7 hoverChange triangle-border-black' onClick={() => triangleSwap8()}></div>
            <div id="row7-t8" className='row7-t8 hoverChange triangle-border-black' onClick={() => triangleSwap2()}></div>
            <div id="row7-t9" className='row7-t9 hoverChange triangle-border-black' onClick={() => triangleSwap3()}></div>
        </div>
    

    </div>
  )
}

export default Test