import { FaComment } from "react-icons/fa";
import CommentCardComponent from "./CommentCardComponent";

function CommentsSectionComponent({ comments }) {
  return (
    <div>
        <h2 className="text-2xl flex items-center font-semibold text-gray-800 my-10">
            Comments
            <FaComment className="ml-4"/>
        </h2>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentCardComponent
            key={comment.id}
            authorName={comment.authorName}
            authorImage={comment.authorImage}
            createdAt={comment.createdAt}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentsSectionComponent;