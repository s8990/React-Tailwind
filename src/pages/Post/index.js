import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostListItem } from "@Components/Post/PostListItem";
import Search from "@Components/Gallery/Search";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [term]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      // console.log(response.data.hits);
      setPosts(response.data.hits);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:container md:mx-auto md:px-4">
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && posts.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Posts Found!</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
