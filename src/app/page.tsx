
// import { useEffect, useState } from "react";
import { Input,TextArea } from "./components";
import styles from "./page.module.css";



async function Home() {
  
  return (
    <div className={styles.page}>
       <Input />
       <TextArea />
    </div>
  );
}



export default Home