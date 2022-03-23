import { Editor } from "react-draft-wysiwyg";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RichTextEditor } from "@mantine/rte";
import { faEraser, faImage } from "@fortawesome/free-solid-svg-icons";
import { uploadBytes } from "firebase/storage";
import { storage } from "./../firebase";

function TextEditor({
  onEditorStateChange,
  storyTitle,
  setStoryTitle,
  editorState,
  uploadCallback,
}) {
  console.log(editorState);

  const handleImageUpload = (file) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("image", file);

      fetch(
        "https://api.imgbb.com/1/upload?key=63dd7a0c66180105ccde8a640f83a73d",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((result) => resolve(result.data.url))
        .catch(() => reject(new Error("Upload failed")));
    });

  return (
    <div>
      <div className="h-16 w-full flex items-center">
        <input
          className=" w-full h-full capitalize bg-transparent outline-none text-gray-500 text-3xl font-bold tracking-wide"
          placeholder="Story Title"
          type="text"
          value={storyTitle}
          onChange={(e) => {
            setStoryTitle(e.target.value);
          }}
        />
      </div>

      <div className={`mt-5 text-xl text-gray-500 overflow-y-auto`}>
        <RichTextEditor
          value={editorState}
          onChange={onEditorStateChange}
          onImageUpload={handleImageUpload}
        />
      </div>
    </div>
  );
}

export default TextEditor;
