import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Blog Cá Nhân</h1>
            <p className="text-lg text-gray-600 mb-6">
                Khám phá những câu chuyện, ý tưởng và kinh nghiệm thú vị!
            </p>
            <Button asChild className="btn-primary">
                <Link to="/blog">Khám phá bài viết</Link>
            </Button>
        </div>
    )
}

export default Home