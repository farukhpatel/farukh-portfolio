export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>Connect with me:</p>
        <div className="mt-4 space-x-6">
          <a
            href="https://github.com/farukhpatel"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farukh-patel/"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
