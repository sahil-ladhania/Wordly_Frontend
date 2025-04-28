
function CommentCardComponent({ authorName, authorImage, createdAt, content }) {
    return (
      <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg">
        {/* Author Image */}
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 rounded-full object-cover"
        />
        
        {/* Comment Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">{authorName}</span>
            <span className="text-sm text-gray-500">{createdAt}</span>
          </div>
          <p className="text-gray-700 mt-2">{content}</p>
        </div>
      </div>
    );
  }
  
  export default CommentCardComponent;