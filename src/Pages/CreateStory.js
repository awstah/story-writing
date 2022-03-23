import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextEditor from "../Components/TextEditor";
import {
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

function CreateStory({ user, setUser }) {
  const initialValue = "<p>Tell Your Story</p>";
  const [newStory, setNewStory] = useState("");
  const [editorState, seteditorState] = useState(initialValue);
  const [storyTitle, setStoryTitle] = useState("");

  const navigate = useNavigate();

  const createNewStory = async () => {
    await addDoc(collection(db, "stories"), {
      title: "",
      story: "",
      author: user.uid,
    }).then((res) => {
      console.log(res.id);
      setNewStory(res.id);
    });
  };

  const saveStory = async () => {
    await setDoc(doc(db, "stories", newStory), {
      title: storyTitle,
      story: editorState,
      user: user?.uid,
      created: serverTimestamp(),
    });
  };

  const onEditorStateChange = (editorState) => {
    seteditorState(editorState);
  };

  const deleteStory = async () => {
    await deleteDoc(doc(db, "stories", newStory));
    navigate("/");
  };

  useEffect(() => {
    createNewStory();
    const interval = setInterval(() => {
      console.log("work");
      saveStory();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow space-y-3 px-3 md:px-5 overflow-hidden">
      <div className="h-20 flex items-center justify-between ">
        <Link
          className="h-10 w-20  rounded-md text-gray-600 flex items-center justify-center
hover:bg-gray-200 hover:text-gray-600 font-medium tracking-wide text-sm md:text-base"
          to="/"
        >
          Back
        </Link>

        <div className="space-x-3 flex items-center">
          <button
            className="h-10 w-20  rounded-md text-rose-600 flex items-center justify-center
        border-2 border-rose-600 hover:text-white font-medium tracking-wide text-sm md:text-base hover:bg-rose-600"
            onClick={deleteStory}
          >
            Delete
          </button>
          <button
            onClick={saveStory}
            className="h-10 w-20  rounded-md text-sky-600 flex items-center justify-center
        border-2 border-sky-600 hover:text-white font-medium tracking-wide text-sm md:text-base hover:bg-sky-600 "
          >
            Save
          </button>
        </div>
      </div>

      <TextEditor
        user={user}
        onEditorStateChange={onEditorStateChange}
        editorState={editorState}
        setStoryTitle={setStoryTitle}
        storyTitle={storyTitle}
      />
    </div>
  );
}

export default CreateStory;
