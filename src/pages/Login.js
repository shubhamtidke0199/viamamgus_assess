import LoginForm from "../components/Login/LoginForm";
import styles from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={styles.login_page}>
      <div className={styles.backimg_container}>
        <img
          src={require("../assets/Rectangle_1.png")}
          alt="Rectangle_1"
          className={styles.backgroundImg}
        />
      </div>
      <LoginForm />
    </div>
  );
}
