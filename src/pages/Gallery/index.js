import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryListItem from "@Components/Gallery/GalleryListItem";
import Search from "@Components/Gallery/Search";

const Gallery = () => {
  const [images, setImages] = useState([]);
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
      setImages(response.data.hits);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:container md:mx-auto md:px-4">
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Images Found!</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <GalleryListItem key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
