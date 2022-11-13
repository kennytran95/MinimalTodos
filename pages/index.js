import Head from "next/head";
import styles from "../styles/Home.module.css";
import Title from "./Title";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <main>
        <Title />
        <Login />
      </main>
    </>
  );
}
