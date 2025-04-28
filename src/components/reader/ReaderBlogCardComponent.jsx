import { FaThumbsUp, FaThumbsDown, FaComment } from "react-icons/fa";

function ReaderBlogCardComponent({ title, description, authorName, authorImage, createdAt, onLike, onDislike, onComment, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition flex flex-col gap-4"
    >
      {/* Blog Title */}
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

      {/* Author Info */}
      <div className="flex items-center gap-3 text-gray-600 text-sm">
        {/* Author Image */}
        <img
          src={authorImage}
          alt={authorName}
          className="w-8 h-8 rounded-full object-cover"
        />
        {/* Author Name and Date */}
        <div className="flex flex-col">
          <span>{authorName}</span>
          <span className="text-xs">{createdAt}</span>
        </div>
      </div>

      {/* Blog Description */}
      <p className="text-gray-700">{description}</p>

      {/* Actions */}
      <div className="flex gap-6 mt-4">
        <button onClick={(e) => {e.stopPropagation(); onLike();}} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
          <FaThumbsUp /> Like
        </button>
        <button onClick={(e) => {e.stopPropagation(); onDislike();}} className="flex items-center gap-2 text-gray-600 hover:text-red-600">
          <FaThumbsDown /> Dislike
        </button>
        <button onClick={(e) => {e.stopPropagation(); onComment();}} className="flex items-center gap-2 text-gray-600 hover:text-green-600">
          <FaComment /> Comment
        </button>
      </div>
    </div>
  );
}

export default ReaderBlogCardComponent;