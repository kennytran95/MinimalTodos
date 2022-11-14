import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "./Title/Title";
import Login from "./Login/Login";
import List from "./List/List";

export default function Home() {
  return (
    <>
      <main>
        <Title />
        {/* <Login /> */}
        <List />
      </main>
    </>
  );
}
