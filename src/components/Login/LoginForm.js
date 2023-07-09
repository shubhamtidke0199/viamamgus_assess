import { useEffect, useState } from "react";
import styles from "./../../styles/login-form.module.css";
import Input from "./Input";
import Button from "./Button";
import { colors } from "../../constants/colors";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);


  const handleSignin = () => {
    if (email === "") {
      setEmailError(true);
      setErrorMessage("The email field is required");
    }  else if (password === "") {
      setPasswordError(true);
      setErrorMessage("The password field is required");
    }
  }

  useEffect(() => {
    if (email !== "") {
      setEmailError(false);
    }
    if (password !== "") {
      setPasswordError(false);
    }
  }, [email, password]);





 

  return (
    <div className={[styles.login_container].join(" ")}>
      {/* HEADER */}
      <div className={[styles.header].join(" ")}>
        <img
          src={require("../../assets/amazon.png")}
          alt="amazon logo"
          className={styles.header_logo}
        />
      </div>
      {/* TITLE */}
      <div className={[styles.form_container].join(" ")}>
        <p className={[styles.login_title, styles.title].join(" ")}>Login</p>
        {/* IMAGE */}
        <div className={styles.image_container}>
          <img
            src={require("../../assets/Rectangle_4.png")}
            alt="Rectangle_4"
            className={styles.tree_img}
          />
        </div>
        {/* FORM */}
        <div >
          <div className={styles.input_container}>
          <Input
            type="text"
            placeholder="Email"
            setValue={setEmail}
            error={emailError}
            errorMessage={errorMessage}
          />
          <Input
            type="password"
            placeholder="Password"
            setValue={setPassword}
            error={passwordError}
            errorMessage={errorMessage}
          />
          </div>
          <Button text="Sign In" styles={{ borderRadius: "40px",margin:'2.4rem 0 1.6rem 0' }} onClick={handleSignin} />
          {/* FORGOT PASSWORD? */}
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <p className={styles.forgot_password}>Forgot Password?</p>
            <p className={styles.sign_up}>New User? Sign Up</p>
          </div>
          <p className={styles.or}>or</p>
          {/* SOCIAL MEDIA BUTTONS */}
          <Button text="CONTINUE WITH GOOGLE" styles={{backgroundColor:colors.bluelight, font:"normal normal 600 1.4rem/1.8rem Josefin Sans"}} startIcon={require('../../assets/Group_9.png')}/>
          <Button text="CONTINUE WITH FACEBOOK" styles={{backgroundColor:colors.blue,font:"normal normal 600 1.4rem/1.8rem Josefin Sans"}} startIcon={require('../../assets/Rectangle_17.png')}/>
        </div>
      </div>
    </div>
  );
}
