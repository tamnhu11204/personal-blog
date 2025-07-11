import React from 'react'
import bunny from '../../assets/bunny.jpg';
import bunny2 from '../../assets/bunny2.webp';

const About = () => {
    return (
        <div className="container mx-auto py-12">
            <p className="text-4xl font-bold mb-4 text-center">About Me</p>
            <article>
                <img class="float-left p-3 w-100 h-80" src={bunny} />
                <img class="float-right p-3 w-40 h-50" src={bunny2} />
                <p class="clear-none ... text-gray-600 text-justify">Welcome to my personal blog!

                    My name is TYTY, and I’m a software developer, tech enthusiast, and lifelong learner from Vietnam. I created this space to document my journey — not just as a programmer navigating the ever-changing world of technology, but also as a human being trying to live a mindful, meaningful life.

                    I’ve always been curious about how things work — from the first time I wrote a line of HTML to building full-stack applications with React, Node.js, and Tailwind CSS. Along the way, I’ve made plenty of mistakes, learned valuable lessons, and found joy in solving problems through code. This blog is where I reflect on those experiences, share tutorials, and explore topics that matter to me: creativity, simplicity, productivity, and personal growth.
                    <br />
                    But life isn’t just about code. I also write about quiet mornings with tea, weekend trips to the mountains, moments of doubt, and small joys that keep me grounded. Whether you’re here to learn something technical or just to read a story that feels real — I’m glad you stopped by.

                    Thank you for visiting. I hope you’ll find inspiration, insight, or maybe just a moment of calm in this corner of the internet.</p>
            </article>
        </div>
    )
}

export default About