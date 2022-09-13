import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import supabase from "../config/supabaseConfig";

export default function Home({ data }) {
  console.log("🚀 ~ file: index.js ~ line 9 ~ Home ~ data", data);
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.title} {item.descritption}
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from("blog").select();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
