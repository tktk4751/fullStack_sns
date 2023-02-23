import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      // console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="喜びを共有しましょう"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <span className="shareIcon">📸</span>
              <span className="shareOptionText">写真</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
                name="file"
              />
            </label>
            <div className="shareOption">
              <span className="shareIcon">🎬</span>
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <span className="shareIcon">🚀</span>
              <span className="shareOptionText">ブースト</span>
            </div>
            <div className="shareOption">
              <span className="shareIcon">🌈</span>
              <span className="shareOptionText" type="submit">
                投票
              </span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
