import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Story() {
  const [story, setstory] = useState(null);
  const { id } = useParams();
  console.log(id);

  const fetchStory = async () => {
    const story = doc(db, "stories", id);
    const res = await getDoc(story);
    console.log(res.data());
    setstory(res.data());
  };

  useEffect(() => {
    return fetchStory();
  }, []);

  return (
    <div className="px-3 md:px-0">
      <div className="h-20 flex items-center justify-between ">
        <Link
          className="h-10 w-20  rounded-md text-gray-600 flex items-center justify-center
hover:bg-gray-200 hover:text-gray-600 font-medium tracking-wide text-sm md:text-base"
          to="/"
        >
          Back
        </Link>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
        {story?.title}
      </h2>
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: story?.story }}
      />
    </div>
  );
}

export default Story;
