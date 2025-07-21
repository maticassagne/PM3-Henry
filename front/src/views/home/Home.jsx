import HomeCard from "../../components/homeComponents/HomeCards";
import styles from "../home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.conteiner}>
      <HomeCard />
      <HomeCard />
    </div>
  );
};

export default Home;
