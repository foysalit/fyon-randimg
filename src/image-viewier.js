import React, { useState, useEffect, useCallback } from "react";

const RANDOM_IMAGE_URL = "https://source.unsplash.com/random";
const TWEET_URL = "https://twitter.com/intent/tweet?text=Random image app";

/**
 * Given a url, this function will download the image and turn it into a blob URL object
 * which can be used to manipulate and use the image on the browser
 */
function imageToDataUrl(url) {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
}

/**
 * This component contains entire functionality of generating a random image, allow downloading and tweeting the generated image
 */
export const ImageViewer = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const buttonClasses =
    "transition border-b-2 duration-200 ease-in-out border-indigo-700 py-2 px-4 hover:bg-indigo-700 hover:text-white rounded";

  /**
   * This is used on component load AND when refresh button is pressed
   * This component will render many many times but we don't want to redefine this function
   * which is why useCallback is applied
   */
  const refreshImage = useCallback(() => {
    setImageLoading(true);
    imageToDataUrl(RANDOM_IMAGE_URL).then((url) => {
      setImageLoading(false);
      setImageUrl(url);
    });
  }, []);

  /**
   * On first load, get a random image
   */
  useEffect(() => {
    refreshImage();
  }, []);

  return (
    <div className="border-8 border-solid border-white shadow-md rounded-md">
      <div className="h-64 overflow-hidden bg-black flex">
        <img
          src={imageUrl}
          alt="random display"
          className="mx-auto h-auto max-w-full"
        />
      </div>
      <div className="flex flex-row justify-around text-indigo-700 px-3 py-6 bg-white">
        <a
          href={imageUrl}
          download={`random_${Date.now}.png`}
          className={buttonClasses}
        >
          Download
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${TWEET_URL} ${RANDOM_IMAGE_URL}`}
          className={buttonClasses}
        >
          Tweet
        </a>
        <button className={buttonClasses} onClick={() => refreshImage()}>
          {imageLoading ? "Loading" : "Refresh"}
        </button>
      </div>
    </div>
  );
};
