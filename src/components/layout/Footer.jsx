export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-6 mt-auto text-xs text-lightText bg-transparent gap-4 md:gap-0">
      <div className="text-center md:text-left">
        &copy; {currentYear}, Made with ❤️ by{" "}
        <a
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-muted hover:text-primary transition-colors"
        >
          Creative Tim
        </a>{" "}
        &amp;{" "}
        <a
          href="https://simmmple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-muted hover:text-primary transition-colors"
        >
          Simmmple
        </a>{" "}
        for a better web.
      </div>
      <div className="flex gap-6 justify-center">
        <a
          href="https://www.creative-tim.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Creative Tim
        </a>
        <a
          href="https://simmmple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Simmmple
        </a>
        <a
          href="https://www.creative-tim.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Blog
        </a>
        <a
          href="https://www.creative-tim.com/license"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          License
        </a>
      </div>
    </footer>
  );
}
