import React from "react";
import { Footer } from "./footer";
import { ImageViewer } from "./image-viewier";

function App() {
  return (
    <div className="bg-gray-200 text-white w-screen h-screen flex items-center justify-center">
      <div className="w-5/6 sm:w-3/5 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
        <ImageViewer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
