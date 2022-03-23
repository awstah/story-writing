import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import CreateStory from "./Pages/CreateStory";
import { authentication } from "./firebase";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.js/Layout";
import Story from "./Pages/Story";

function App() {
  const [user, setuser] = useState(null);

  onAuthStateChanged(authentication, (user) => {
    if (user) {
      setuser(user);
    }
  });

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home user={user} setUser={setuser} />} />
          <Route path="story/:id" element={<Story />} />
          <Route
            path="write"
            element={<CreateStory user={user} setUser={setuser} />}
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
