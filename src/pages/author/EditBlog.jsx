import { useParams } from "react-router-dom";
import BlogFormComponent from "../../components/author/BlogFormComponent";

function EditBlog() {
  const { id } = useParams();

  // Mock fetching existing blog data (later real API call)
  const existingBlog = {
    title: "Understanding React Context API",
    content: "The Context API in React is a powerful tool for managing state globally without prop drilling...",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will update blog in backend
    console.log("Updating blog ID:", id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Your Blog</h1>

      <BlogFormComponent 
        onSubmit={handleSubmit} 
        initialValues={existingBlog} 
      />
    </div>
  );
}

export default EditBlog;