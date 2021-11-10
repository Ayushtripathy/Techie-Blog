import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-50">
      <div className="absolute left-0 right-0 -top-10">
        <Image
          src={author.photo.url}
          className="align-middle rounded-full"
          height="100px"
          unoptimized
          width="100px"
          alt={author.name}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
