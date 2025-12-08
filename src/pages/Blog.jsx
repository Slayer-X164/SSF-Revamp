import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BLOG_ID = import.meta.env.VITE_BLOG_ID;
  const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY;



  useEffect(() => {
    async function fetchPosts() {
      if (!BLOG_ID || !API_KEY) {
        const msg = "Error: Blog ID or API Key is missing in your environment variables.";
        console.error(msg);
        setError(msg);
        setLoading(false);
        return;
      }

      try {
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
        console.log("Fetching posts from URL:", url);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (!data.items || data.items.length === 0) {
          const msg = "No posts found. Check if the blog is public and has published posts.";
          console.warn(msg);
          setError(msg);
        } else {
          setPosts(data.items);
        }
      } catch (err) {
        console.error("API fetch failed:", err);
        setError(
          `Failed to fetch posts. Check console for details. Error: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading)
    return (
      <p className="text-center text-2xl pt-40">
        Loading Blogs...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 py-20">
        {error}
      </p>
    );

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.published) - new Date(a.published)
  );

  return (
    <div className="w-full flex flex-col items-center justify-center py-14 px-4 mt-10 gap-10">

      <div className="text-center">
        <h2 className="font-extrabold text-5xl">
          Grow, Learn, and Stay Inspired
        </h2>
        <h2 className="font-extrabold text-5xl mt-2">
          with Our <span className="text-blue-600">Blog</span>
        </h2>
        <p className="leading-5 text-md font-semibold text-zinc-700 mt-8">
          Real stories. Practical guidance. Thoughtful insights.
          <br />
          Explore ideas that uplift communities.
        </p>
      </div>

      <p className="text-lg font-bold w-full max-w-6xl ">Latest Blogs</p>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sortedPosts.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} big />
        ))}
      </div>
      <div className="w-full bg-blue-400 pb-30 mt-10 pt-15 overflow-hidden">
        <p className="text-lg font-bold w-full ml-6 md:ml-6 lg:ml-40 pb-8">Read All Other Blogs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-6 lg:px-40 ">
          {sortedPosts.slice(2).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
/* ---------------- BLOG CARD ---------------- */
function BlogCard({ post, big }) {
  const image = post.content ? extractImage(post.content) : null;
  const excerpt = post.content ? stripHtml(post.content).substring(0, 120) : "";

  return (
    <div
      className={`bg-white shadow-[4px_4px_0px_#665e5e] hover:shadow-[6px_6px_0px_#808080] transition-all duration-300 overflow-hidden border ${big ? "h-auto" : ""
        }`}
    >
      {image ? (
        <img
          src={image}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          No Image
        </div>
      )}

      <div className="p-4">
        <p className="text-xs bg-blue-100 text-blue-700 inline-block px-2 py-1 rounded-md mb-2">
          {new Date(post.published).toLocaleDateString()}
        </p>
        <h2 className="text-lg font-semibold line-clamp-2 mb-2">
          {post.title || "Untitled Post"}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {excerpt || "No description available"}...
        </p>
        <a
          href={post.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-900"
        >
          <span className="inline-block bg-yellow-300 p-2">Read More →</span>
        </a>
      </div>
    </div>
  );
}

/* ---------------- UTILS ---------------- */
function extractImage(html) {
  try {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : null;
  } catch {
    return null;
  }
}

function stripHtml(html) {
  try {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  } catch {
    return "";
  }
}
