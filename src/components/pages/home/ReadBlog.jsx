import SectionHeading from '../../common/SectionHeading'
import BlogCard from '../../common/BlogCard'

const blogPosts = [
  {
    category: 'Relationship',
    title: 'Watch and Listen to Our Sermons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    author: 'Matthew Johnson',
    date: 'Tuesday 13 May, 2021',
    dateTime: '2021-05-13',
    href: '#blog-1',
  },
  {
    category: 'Relationship',
    title: 'Watch and Listen to Our Sermons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    author: 'Matthew Johnson',
    date: 'Tuesday 13 May, 2021',
    dateTime: '2021-05-13',
    href: '#blog-2',
  },
  {
    category: 'Relationship',
    title: 'Watch and Listen to Our Sermons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    author: 'Matthew Johnson',
    date: 'Tuesday 13 May, 2021',
    dateTime: '2021-05-13',
    href: '#blog-3',
  },
  {
    category: 'Relationship',
    title: 'Watch and Listen to Our Sermons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    author: 'Matthew Johnson',
    date: 'Tuesday 13 May, 2021',
    dateTime: '2021-05-13',
    href: '#blog-4',
  },
]

function ReadBlog({ eyebrow = 'Read Our Blog', title = 'Share, Inspire, Innovate', posts = blogPosts }) {
  return (
    <section id="blog" className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} className="mx-auto mb-12 max-w-2xl md:mb-16" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => <BlogCard key={post.href} {...post} />)}
        </div>
      </div>
    </section>
  )
}

export default ReadBlog
