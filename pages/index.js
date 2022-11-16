import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "./Login/Login";
import List from "./List/List";
import { useState } from "react";

export default function Home() {
  let [loggedIn, toggleLoggedIn] = useState(false);
  let [profileData, setProfileData] = useState({
    profilePicture: "",
    username: "",
  });

  function handleSession(profileData) {
    toggleLoggedIn(true);
    let profile = {
      profilePicture: profileData.user_profile_image,
      username: profileData.user_username,
    };
    setProfileData(profile);
  }

  return (
    <>
      <main>
        {!loggedIn && <Login handleSession={handleSession} />}
        {loggedIn && (
          <List toggleLoggedIn={toggleLoggedIn} profileData={profileData} />
        )}
      </main>
    </>
  );
}
