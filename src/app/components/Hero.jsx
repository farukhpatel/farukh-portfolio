import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-background text-white"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold">Your Name</h1>
        <p className="mt-4 text-xl">
          Frontend Developer | Building Modern Web Experiences
        </p>
        <Link
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
