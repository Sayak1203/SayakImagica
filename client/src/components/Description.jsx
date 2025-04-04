import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
        <p className='text-gray-500 mb-8 '>Turn your Imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg' alt="" />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4 '>Introducing the AI-powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Say goodbye to stock images and hello to imagination! SayakImagica lets you transform your words into stunning visuals using cutting-edge AI. Whether you're a designer, student, content creator, or just feeling creative — type your idea, and our AI will bring it to life instantly.</p>
                <p className='text-gray-600 mb-4'>From futuristic landscapes to fantasy characters, create high-quality, unique images in seconds. No design skills needed — just your imagination.</p>
                <p className='text-gray-600'>Let your words paint the picture. Try SayakImagica today and turn your thoughts into art!</p>
            </div>
        </div>



    </motion.div>
  )
}

export default Description