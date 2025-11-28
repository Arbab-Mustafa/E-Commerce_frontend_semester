import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos ut perspiciatis dolore ducimus dolorem quae nihil, voluptate rerum sit possimus ipsam quos? Dolores quo ullam deserunt recusandae, corrupti consectetur unde id libero inventore perspiciatis sed ea architecto maiores ratione dolore quam accusamus vero nostrum repellendus eligendi neque iste quia?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias dignissimos incidunt magni voluptatum sint quisquam rem aperiam eius pariatur? Sit repudiandae iure laudantium facere repellendus quaerat, tenetur reprehenderit veniam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem fugiat asperiores porro beatae amet omnis repellat neque placeat tempora, eligendi consequatur tempore nulla nesciunt ratione quo. Molestiae, velit quia!</p>
        </div>
      </div>

      <div className="text-xl py-4">
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta rerum explicabo alias numquam et pariatur minus suscipit? Voluptas commodi doloremque assumenda sed deserunt nostrum minus, numquam exercitationem provident reprehenderit.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta rerum explicabo alias numquam et pariatur minus suscipit? Voluptas commodi doloremque assumenda sed deserunt nostrum minus, numquam exercitationem provident reprehenderit.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta rerum explicabo alias numquam et pariatur minus suscipit? Voluptas commodi doloremque assumenda sed deserunt nostrum minus, numquam exercitationem provident reprehenderit.</p>
        </div>
        
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About