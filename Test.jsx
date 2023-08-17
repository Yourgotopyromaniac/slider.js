import { useState } from "react"
import { motion } from "framer-motion";

const test = () => {

  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className='bg-[#ffffff] w-screen h-screen text-[#051010] text-[20px] flex items-center justify-center'>


        <div className='w-[50%] h-[60%] border z-[0] border-[#051010] relative bg-white'>

            {/*Forms*/}
            <motion.div animate={isOpen ? {x: '100%', opacity: 0}: {}} transition={{duration: 0.5}} className='absolute top-0 opacity-100 left-0 bg-white h-full w-1/2 z-[2] flex flex-col items-center justify-center gap-4'>
                <input type='text' placeholder='email' className='border-[#ba2525] p-2 border outline-none'/>
                <input type='text' placeholder='password'className='border-[#ba2525] p-2 border outline-none'/>
                <button className='border border-[#ba2525] p-2 w-[40%]'>sign in</button>
                <p>don't have an account? <span onClick={()=> setIsOpen(!isOpen)} className='underline text-[#ba2525]'>sign up</span></p>
            </motion.div>
            <motion.div animate={isOpen ? {x: '100%', zIndex: 2, opacity: 1}: {}} transition={{duration: 0.5}} className='absolute top-0 left-0 z-[0] opacity-0 bg-white h-full w-1/2 flex flex-col items-center justify-center gap-4'>
                <input type='text' placeholder='choose username' className='border-[#ba2525] p-2 border outline-none'/>
                <input type='text' placeholder='email' className='border-[#ba2525] p-2 border outline-none'/>
                <input type='text' placeholder='password'className='border-[#ba2525] p-2 border outline-none'/>
                <button className='border border-[#ba2525] p-2 w-[40%]'>sign up</button>
                <p>already have an account? <span onClick={()=> setIsOpen(!isOpen)} className='underline text-[#ba2525]'>sign in</span></p>
            </motion.div>

            {/*Overlays*/}
            <motion.div animate={isOpen ? {x: '-100%', zIndex: 2}: {}} transition={{duration: 0.5}} className='w-1/2 h-full absolute z-[4] text-white right-0 top-0 testimag2 flex flex-col items-center justify-center gap-4'>
            </motion.div>
            <motion.div animate={isOpen ? {x: '-100%', zIndex: 3}: {}} transition={{duration: 0.5}} className='w-1/2 h-full absolute z-[1] testimag1 right-0 top-0 flex flex-col items-center justify-center gap-4'>
            </motion.div>
        </div>
    </div>
  )
}

export default test