import BlogCard from "./BlogCard";

export default function ReadMoreSection({ posts }) {
  // fallback if no posts are passed
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  // Sort posts by date (latest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="w-full flex flex-col items-center justify-center py-14 px-4 mt-10 gap-10">

      {/* Heading */}
      <div className="text-center">
        <h2 className="font-extrabold text-5xl">Grow, Learn, and Stay Inspired</h2>
        <h2 className="font-extrabold text-5xl mt-2">
          with Our <span className="text-blue-600">Blog</span>
        </h2>

        <span className="leading-5 text-md font-semibold text-zinc-700 inline-block mt-8">
          <p>Real Stories. Practical Guidance. Thoughtful insights.</p>
          <p>Explore ideas that uplift communities.</p>
        </span>
      </div>

      <p className="text-lg font-bold w-full ml-24">Latest Blogs</p>

      {/* 2 latest blogs */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-12">
        {sortedPosts.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Other blogs */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14 px-12">
        {sortedPosts.slice(2).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
