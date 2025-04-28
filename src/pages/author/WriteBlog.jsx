import BlogFormComponent from '../../components/author/BlogFormComponent';

function WriteBlog() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Write a New Blog</h1>
      <BlogFormComponent onSubmit={handleSubmit} />
    </div>
  )
}

export default WriteBlog;