
import { colors } from "@mui/material";
import styles from "./../../styles/login.module.css";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Input(props) {
  return (
    <div className={styles.input_container}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className={[styles.input].join(" ")}
      />
      {/* ERROR MESSAGE */}
      {props.error && (
          <div className={styles.error_container}>
        <RemoveCircleIcon style={{color:colors.red, fontSize:'1.6rem'}}/>
        <span>{props.errorMessage}</span>
      </div>
        )
    }
    </div>
  );
}
