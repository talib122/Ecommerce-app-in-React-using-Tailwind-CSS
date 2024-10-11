import React from 'react';
import { useParams } from 'react-router-dom';
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
    image: img3,
    fullContent: 'With fashion businesses recognizing the benefits that blogging can bring to their websites, it’s understandable that many are rushing to create their own blogs. There is no shortage of potential blog post topics to select from, and a fashion blog is not only cheaper than traditional advertising, but it can have greater reach as well.Fashion is an everchanging subject that can give rise to new trends overnight, so fashion aficionados will be looking for blogs with daily updates of expert insights, creative guides, and general news regarding what is currently stylish. Having an informative fashion blog on your website is important in not only bringing in new customers to your site but also in giving your readers the confidence that your business is genuinely interested in fashion trends',
  },
  {
    id: 2,
    title: 'Create your shoes Beauty',
    date: 'August 10, 2024',
    image:img2,
    fullContent: 'With fashion businesses recognizing the benefits that blogging can bring to their websites, it’s understandable that many are rushing to create their own blogs. There is no shortage of potential blog post topics to select from, and a fashion blog is not only cheaper than traditional advertising, but it can have greater reach as well.Fashion is an everchanging subject that can give rise to new trends overnight, so fashion aficionados will be looking for blogs with daily updates of expert insights, creative guides, and general news regarding what is currently stylish. Having an informative fashion blog on your website is important in not only bringing in new customers to your site but also in giving your readers the confidence that your business is genuinely interested in fashion trends',
  },
  {
    id: 3,
    title: 'Outfit of the Day',
    date: 'August 1, 2024',
    image: img1,
    fullContent: 'With fashion businesses recognizing the benefits that blogging can bring to their websites, it’s understandable that many are rushing to create their own blogs. There is no shortage of potential blog post topics to select from, and a fashion blog is not only cheaper than traditional advertising, but it can have greater reach as well.Fashion is an everchanging subject that can give rise to new trends overnight, so fashion aficionados will be looking for blogs with daily updates of expert insights, creative guides, and general news regarding what is currently stylish. Having an informative fashion blog on your website is important in not only bringing in new customers to your site but also in giving your readers the confidence that your business is genuinely interested in fashion trends',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24 mt-[100px]">
      <h1 className="text-4xl font-bold mb-4 mt-24">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{post.date}</p>
      <div className='flex flex-col items-center justify-center mt-[65px]'>
      <img src={post.image} alt={post.title} className="w-[950px] h-70 object-cover rounded-lg mb-8 " />
      <p className="text-gray-700 px-[85px] leading-7 font-bold">{post.fullContent}</p>
    </div>
    </div>
  );
};

export default BlogDetail;
