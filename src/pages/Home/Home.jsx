import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import background from '../../assets/background.webp'

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Personal Blog
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            Explore interesting stories, ideas and experiences.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded">
            <Link to="/blog">Explore the blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
