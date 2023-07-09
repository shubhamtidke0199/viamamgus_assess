import { colors } from "../../constants/colors";

export default function Button(props) {
  console.log(props.startIcon);
  const buttonStyle = {
    backgroundColor: props.styles?.backgroundColor || colors.green,
    color: props.styles?.color || colors.white,
    borderRadius: props.styles?.borderRadius || "0px",
    padding: props.styles?.padding || "1rem 0.4rem",
    margin: props.styles?.margin || "0 0 1.6rem 0",
    font: props.styles?.font|| "normal normal normal 1.9rem/2.3rem Josefin Sans",


    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",

  };

  const iconStyle = {
    width: '3.6rem',
    height: '3.6rem',
    position: 'absolute',
    left: '0.4rem',


   
  };

  return (
    <div style={buttonStyle} onClick={props.onClick}>
      {props.startIcon && (
        <img src={props.startIcon} alt="Icon" style={iconStyle}  />
      )}
      {props.text}
    </div>
  );
}
