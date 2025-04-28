import ReaderSearchBarComponent from '../../components/reader/ReaderSearchBarComponent';
import ReaderBlogCardComponent from '../../components/reader/ReaderBlogCardComponent';

function ReaderHome() {
  const blogs = [
    {
      id: 1,
      title: "Mastering Tailwind CSS for Modern UI",
      description: "Tailwind CSS provides low-level utility classes...",
      authorName: "Sahil Ladhania",
      authorImage: "https://i.pravatar.cc/40?img=1", // dummy image
      createdAt: "April 29, 2025",
    },
    {
      id: 2,
      title: "Understanding React Context API",
      description: "The Context API in React is a powerful tool...",
      authorName: "Aman Verma",
      authorImage: "https://i.pravatar.cc/40?img=2", // dummy image
      createdAt: "April 27, 2025",
    },
    {
      id: 3,
      title: "Getting Started with Node.js and Express",
      description: "Node.js is a powerful runtime for JavaScript outside the browser. Express is a lightweight web framework built on top of Node.js...",
      authorName: "Rohit Sharma",
      authorImage: "https://i.pravatar.cc/40?img=3",
      createdAt: "April 25, 2025",
    },
    {
      id: 4,
      title: "Introduction to Prisma ORM",
      description: "Prisma is a next-generation Node.js and TypeScript ORM that makes database access easy and type-safe...",
      authorName: "Priya Nair",
      authorImage: "https://i.pravatar.cc/40?img=4",
      createdAt: "April 23, 2025",
    },
    {
      id: 5,
      title: "Mastering React Hooks for Better State Management",
      description: "Hooks are functions that let you hook into React state and lifecycle features from function components...",
      authorName: "Karan Mehta",
      authorImage: "https://i.pravatar.cc/40?img=5",
      createdAt: "April 20, 2025",
    },
    {
      id: 6,
      title: "Building REST APIs with Express.js",
      description: "Express.js is the most popular framework for building RESTful APIs with Node.js. It's minimal and flexible...",
      authorName: "Simran Kaur",
      authorImage: "https://i.pravatar.cc/40?img=6",
      createdAt: "April 18, 2025",
    }
  ];
  const handleCardClick = (id) => {
    console.log("Navigate to blog:", id);
    // Navigate to /blog/:id (real routing)
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search Bar */}
      <ReaderSearchBarComponent />

      {/* Filters Section */}
      <div className="flex items-center justify-start gap-4 mb-8">
        <button className="px-4 py-2 bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-md text-sm font-medium">
          Top Posts
        </button>
        <button className="px-4 py-2 bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-md text-sm font-medium">
          Recent
        </button>
        {/* You can add more buttons later: "Recent", "Most Liked", etc. */}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <ReaderBlogCardComponent 
            key={blog.id}
            title={blog.title}
            description={blog.description.substring(0, 100) + "..."}
            authorName={blog.authorName}
            authorImage={blog.authorImage}
            createdAt={blog.createdAt}
            onLike={() => console.log("Liked Blog:", blog.id)}
            onDislike={() => console.log("Disliked Blog:", blog.id)}
            onComment={() => console.log("Comment on Blog:", blog.id)}
            onClick={() => handleCardClick(blog.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReaderHome;