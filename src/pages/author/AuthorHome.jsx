import NoBlogsStateComponent from '../../components/author/NoBlogsStateComponent';
import BlogCardComponent from '../../components/author/BlogCardComponent';

function AuthorHome() {
  // const blogs = []; // Example: Fetch blogs written by author
  const blogs = [
    {
      id: 1,
      title: "Understanding React Context API",
      content: "The Context API in React is a powerful tool for managing state globally without prop drilling...",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Modern UI",
      content: "Tailwind CSS provides low-level utility classes that allow developers to build fully responsive websites faster...",
    },
    {
      id: 3,
      title: "Getting Started with Node.js and Express",
      content: "Node.js is a powerful runtime for JavaScript outside the browser. Express is a lightweight web framework built on top of Node.js...",
    },
  ];
  const handleEdit = (id) => {
    console.log("Edit Blog ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Blog ID:", id);
  };



  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Blogs</h1>

      {blogs.length === 0 ? (
        <NoBlogsStateComponent message="You haven't written any blogs yet." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCardComponent 
              key={blog.id} 
              title={blog.title} 
              description={blog.content.substring(0, 100) + "..."}
              onEdit={() => handleEdit(blog.id)}
              onDelete={() => handleDelete(blog.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default AuthorHome;