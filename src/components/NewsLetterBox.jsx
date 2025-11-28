import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ea repellendus illo laboriosam unde perspiciatis reiciendis consectetur nostrum perferendis animi!</p>
        <form onSubmit={onSubmitHandler}  className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input type="email" required className='w-full sm:flex outline-none' placeholder='Enter your email' />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox