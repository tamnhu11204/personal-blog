import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Personal Blog</h1>
            <p className="text-lg text-gray-600 mb-6">
                Explore interesting stories, ideas and experiences.
            </p>
            <Button asChild className="btn-primary">
                <Link to="/blog">Explore the blog</Link>
            </Button>
        </div>
    )
}

export default Home