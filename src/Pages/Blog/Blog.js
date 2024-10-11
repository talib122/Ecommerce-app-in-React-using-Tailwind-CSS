import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/s1.jpeg';
import img2 from '../../images/s2.jpeg';
import img3 from '../../images/s3.jpeg';
import img4 from '../../images/s4.jpeg';
import img5 from '../../images/s6.jpeg';
const posts = [
  {
    id: 1,
    title: 'Sophistication with Maximum Style',
    date: 'Jun 1, 2024',
    content: 'Fashion Jackson is an inspired style, home, and beauty destination for those who prefer quality over quantity, subtle over obvious, and ease over complexity....',
    image: img3,
    fullContent: 'Here is the full content of the blog post about React Hooks...',
  },
  {
    id: 2,
    title: 'Create your shoes Beauty',
    date: 'August 10, 2024',
    content: 'Shop the Best Men’s Activewear: Fitness and Fashion with Salt by IdeasStaying ...',
    image:img2,
    fullContent: 'Here is the full content of the blog post about Tailwind CSS...',
  },
  {
    id: 3,
    title: 'Outfit of the Day',
    date: 'August 1, 2024',
    content: 'Fashion blogs should focus on topics that readers will find immediately useful...',
    image: img1,
    fullContent: 'Fashion blogs should focus on topics that readers will find immediately useful...',
  },
];

const Blog = () => {
  return (
    <div className=" container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mt-24 mb-8">Shoes Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md relative">
            <img src={post.image} alt={post.title} className="w-full h-[350px] object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-12">{post.content}</p>
            <div className="absolute bottom-6 right-6">
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
