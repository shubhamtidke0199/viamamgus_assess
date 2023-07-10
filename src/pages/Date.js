import { useState } from "react";
import moment from "moment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function Date() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const navigate = useNavigate();

  // handle fromDate
  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };

  // handle duration
  const handleDuration = (e) => {
    const duration = parseInt(e.target.value); // parse string to integer
    const calculateToDate = moment(fromDate).add(duration, "hours"); // add duration to fromDate
    setToDate(calculateToDate.format("YYYY-MM-DDTHH:mm")); // format date to YYYY-MM-DDTHH:mm
  };

  // handle back button
  const handleBack = () => {
    navigate("/video");
  };

  const datePicker = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    width: "100%",
    height: "100vh",
    fontSize: "2rem",
    backgroundColor: "#f9edcc",
  };

  const input = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  };

  const navButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
  };

  return (
    <div style={datePicker}>
      <h1>Challenge 3 - Date Picker</h1>

      {/* From Date Input*/}
      <div style={input}>
        <label for="from_date">From Date</label>
        <input
          id="from_date"
          type="datetime-local"
          onChange={handleFromDate}
          value={fromDate}
        />
      </div>

      {/* Duration Input*/}
      <div style={input}>
        <label for="duration">Duration (hours):</label>
        <input id="duration" type="number" onChange={handleDuration} />
      </div>

      {/* To Date Input*/}
      <div style={input}>
        <label for="to_date">To Date</label>
        <input id="to_date" type="datetime-local" value={toDate} disabled />
      </div>

      {/* Back Button*/}
      <div style={navButton} onClick={handleBack}>
        <ArrowBackIcon style={{ fontSize: "4rem" }} />
        <span style={{ textDecoration: "underline" }}>Back to challenge 2</span>
      </div>
    </div>
  );
}
