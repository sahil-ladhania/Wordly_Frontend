import { FaUserCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CommentsSectionComponent from "../../components/reader/CommentsSectionComponent";

function ReadBlog() {
  const { blogId } = useParams();

  const blog = {
    title: "Understanding React Context API",
    author: "Sahil Ladhania",
    createdAt: "April 29, 2025",
    likes: 120,
    dislikes: 5,
    content: `
      The Context API in React is a powerful tool for managing state globally without prop drilling.

      Advantages:
      - Avoids prop drilling.
      - Easy to manage global state like authentication, theme.

      Disadvantages:
      - Can cause unnecessary re-renders if not structured properly.
    `,
  };

  const comments = [
    {
      id: 1,
      authorName: "Aman Verma",
      authorImage: "https://i.pravatar.cc/40?img=11",
      createdAt: "April 29, 2025",
      content: "Very nicely explained! Helped me a lot, thanks!",
    },
    {
      id: 2,
      authorName: "Priya Nair",
      authorImage: "https://i.pravatar.cc/40?img=12",
      createdAt: "April 28, 2025",
      content: "Context API is really powerful if used correctly!",
    },
  ];

  const handleLike = () => {
    console.log("Liked Blog:", blogId);
  };

  const handleDislike = () => {
    console.log("Disliked Blog:", blogId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Metadata Section */}
      <div className="max-w-5xl mx-auto w-full p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600">
          {/* Author Info */}
          <div className="flex items-center gap-4">
            <FaUserCircle className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="font-semibold">{blog.author}</span>
              <span className="text-sm text-gray-500">{blog.createdAt}</span>
            </div>
          </div>

          {/* Likes and Dislikes */}
          <div className="flex gap-6">
            <button onClick={handleLike} className="flex items-center gap-2 hover:text-blue-600">
              <FaThumbsUp /> {blog.likes}
            </button>
            <button onClick={handleDislike} className="flex items-center gap-2 hover:text-red-600">
              <FaThumbsDown /> {blog.dislikes}
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{blog.title}</h1>

        {/* Blog Content */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
          {blog.content}
        </div>

        {/* Comments Section */}
        <CommentsSectionComponent comments={comments} />
      </div>
    </div>
  );
}

export default ReadBlog;