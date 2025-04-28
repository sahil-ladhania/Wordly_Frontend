
function ReaderSearchBarComponent() {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search blogs, authors, topics..."
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          Search
        </button>
      </div>
    );
  }
  
  export default ReaderSearchBarComponent;