import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import posts from '@/data/posts';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(posts[0]);
    const [isDetailVisible, setIsDetailVisible] = useState(true);

    const handleShowDetail = (post) => {
        setSelectedPost(post);
        setIsDetailVisible(true);
    };

    return (
        <div className="mx-auto py-12 text-center">
            <div className="flex flex-row">
                <div className="basis-1/4 p-4 border-r">
                    <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
                    <div className="space-y-4">
                        {posts.map(post => (
                            <Card key={post.id} className="cursor-pointer hover:shadow-lg transition relative">
                                <div className="flex items-center justify-between p-4">
                                    <CardTitle className="pr-3">{post.title}</CardTitle>
                                    <button
                                        onClick={() => handleShowDetail(post)}
                                        className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition z-10"
                                        style={{ position: 'absolute', top: '50%', right: '-8px', transform: 'translateY(-50%)' }}
                                    >
                                        <ChevronRight className="size-4" />
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div
                    className={`basis-3/4 p-4 transition-all duration-300 ease-in-out ${isDetailVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        }`}
                    style={{ transformOrigin: 'left' }}
                >
                    <h1 className="text-4xl font-bold mb-4">My Blog</h1>
                    {selectedPost && (
                        <>
                            <p className="text-3xl font-semibold mb-6 ml-4 mr-4">{selectedPost.title}</p>
                            <p className="text-xl mb-4 ml-4 mr-4">{selectedPost.summary}</p>
                            <img
                                src={selectedPost.img}
                                alt={selectedPost.title}
                                className="float-right p-3 w-90 h-60 object-cover rounded"
                            />
                            <p className="text-gray-700 mb-4 mx-8 pl-4 text-justify">{selectedPost.content}</p>
                            <p className="text-sm text-gray-500 text-right mr-4">Date: {selectedPost.date}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;