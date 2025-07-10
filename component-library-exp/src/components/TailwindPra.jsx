import React, { useState } from "react";

const TailwindPra = () => {
  const [isOpen, setIsOpen] = useState(false);
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Tailwind CSS",
      description:
        "Learn how to use Tailwind CSS to build fast, modern UIs effortlessly.",
      image: "https://source.unsplash.com/400x200/?code,tailwind",
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      description:
        "Understand React Hooks like useState, useEffect, and custom hooks.",
      image: "https://source.unsplash.com/400x200/?reactjs,code",
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description:
        "Explore the latest JavaScript features that improve code readability.",
      image: "https://source.unsplash.com/400x200/?javascript,developer",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70">
        <div className="max-w-6xl mx-auto flex justify-around items-center p-4">
          <div className="flex items-center justify-center">
            <img src="#" alt="logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Brand</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <ul
            className={`flex flex-col justify-center items-center md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:space-x-6 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      {/* UPcming hero */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay for dark tint */}
        {/* <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" /> */}

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4 w-full max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Something Awesome is Coming
          </h1>

          <p className="mb-6 text-white/80 text-sm md:text-base">
            Subscribe to get notified when we launch!
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-64 rounded text-black outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* aspect ratio */}
      <div className="w-full max-w-sm bg-white rounded shadow overflow-hidden">
        <div className="aspect-[16/9]">
          <img
            src="https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">Responsive Image</h3>
          <p className="text-gray-600 text-sm">
            This image maintains a 16:9 aspect ratio on all screen sizes.
          </p>
        </div>
      </div>
      {/* blog post */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded shadow overflow-hidden"
            >
              <div className="aspect-[16/9]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
                <button className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Responsive Hero Section */}
      <header className="bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 space-y-6 md:space-y-0 md:space-x-8">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-4 max-w-md">
            <h1 className="text-3xl font-bold">Welcome to Our Site</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              nostrum dolore iusto itaque necessitatibus cum atque maxime
              possimus voluptates blanditiis.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </header>
      {/* card */}
      <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition space-y-2 text-gray-800">
        <h2 className="text-shadow-gray-950 font-bold text-3xl">Pro Plan</h2>
        <p className="text-3xl font-semibold text-gray-900">
          $49<span className="text-base text-gray-500">/month</span>
        </p>{" "}
        <ul className="text-gray-600 space-y-1">
          <li>✓ Unlimited projects</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced analytics</li>
        </ul>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Start Free Trial
        </button>
      </div>
      {/* Login form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="w-full max-w-md bg-gray-100 rounded shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* 
      <button className="bg-brandBlue-dark hover:bg-brandBlue-dark text-gray-700 px-6 py-3 rounded shadow-brand transition">
        Custom Brand Button
      </button>

      <div className="font-serif text-brandGray-300 p-4">
        Custom serif font and gray color text
      </div> */}

      {/* aria-* attributes provide extra info to screen readers about the purpose
      or state of elements. sr-only class hides text visually but lets screen
      readers read it, so users get helpful instructions without cluttering the
      UI. */}
      <div>
        <button className="btn-primary" aria-label="Submit form">
          HELLO IT'S THROUGH @APPPLY
        </button>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="search"
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default TailwindPra;
