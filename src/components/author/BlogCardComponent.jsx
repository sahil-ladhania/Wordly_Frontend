
function BlogCardComponent({ title, description, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 cursor-pointer rounded-lg shadow-md space-y-2">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      
      {/* Edit/Delete buttons if passed */}
      {(onEdit || onDelete) && (
        <div className="flex space-x-2 mt-4">
          {onEdit && (
            <button 
              onClick={onEdit}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button 
              onClick={onDelete}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogCardComponent;