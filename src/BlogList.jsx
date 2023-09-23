/* eslint-disable react/prop-types */

function BlogList({ posts }) {
  return (
    <div className="blog-list w-full h-full p-11">
      {posts &&
        posts.response.map((post) => (
          <div className="blog-post w-full flex flex-col p-5 items-center gap-3" key={post.id}>
            <div className="sm:w-1/2 flex items-center">
              <h2 className="text-xl sm:text-2xl uppercase">{post.title}</h2>
            </div>
            <div className="sm:w-1/2 text-gray-700 text-base">
              <p>Author: {post.author}</p>
              <p>Published on: {post.created_date}</p>
              <p>{post.preview_description}</p>
              <a className="text-blue-500" href="/" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BlogList;
