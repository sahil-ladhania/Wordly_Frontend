
function BlogFormComponent({ onSubmit, initialValues = { title: "", content: "" } }) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="title"
          defaultValue={initialValues.title}
          placeholder="Enter Blog Title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <textarea
          name="content"
          defaultValue={initialValues.content}
          placeholder="Enter Blog Content"
          rows="8"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Publish
        </button>
      </div>
    </form>
  );
}

export default BlogFormComponent;