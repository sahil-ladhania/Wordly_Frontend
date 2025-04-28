
function FooterComponent() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-4 px-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Wordly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent;