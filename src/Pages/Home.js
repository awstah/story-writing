import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authentication, db } from "./../firebase";
import { doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import Header from "../Components/Header";
import Story from "../Components/Story";

function Home({ user, setUser }) {
  const [stories, setStories] = useState([]);

  const getStories = () => {
    onSnapshot(collection(db, "stories"), (story) => {
      setStories(story.docs);
    });
  };

  console.log(stories);

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div className="flex-grow overflow-y-auto">
      <Header user={user} />
      <div className="">
        <h3 className="text-center text-4xl md:text-4xl lg:text-5xl mb-4">
          Your Stories
        </h3>

        {!user && (
          <p className="text-center max-w-md text-gray-400 mx-auto text-xs md:text-base">
            Seems like you have not login to create your own storis, kindly
            login.
          </p>
        )}

        {!stories && user && (
          <>
            <p className="text-center max-w-md mx-auto text-gray-400 text-xs md:text-base">
              Seems like you have not write any story. What about start writing
              one?
            </p>
          </>
        )}

        <div className="mx-auto w-full max-w-xl mt-5 px-5">
          {user && (
            <>
              {stories?.map((story) => (
                <Story data={story} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
