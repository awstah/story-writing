import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";

function Story({ data }) {
  console.log(data.data());
  const navigate = useNavigate();

  const viewStory = () => {
    navigate(`/story/${data?.id}`);
  };

  const deleteStory = async () => {
    await deleteDoc(doc(db, "stories", data?.id));
    navigate("/");
  };
  return (
    <div className="border-b border-gray-100 w-full md:max-w-xl py-5">
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
          {data?.data().title}
        </h3>
        <div className="space-x-3">
          <button
            onClick={viewStory}
            className="text-sky-500 text-xs bg-sky-100 hover:bg-sky-200 px-2 py-1 rounded font-semibold"
          >
            View
          </button>
          <button
            onClick={deleteStory}
            className="text-rose-500 text-xs hover:bg-rose-100 px-2 py-1 rounded font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Story;
