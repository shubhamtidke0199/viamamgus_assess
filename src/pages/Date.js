import { useState } from "react";
import moment from "moment";

export default function Date() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // handle fromDate
  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };

  const handleDuration = (e) => {
    const duration = parseInt(e.target.value); // parse string to integer
    const calculateToDate = moment(fromDate).add(duration, "hours"); // add duration to fromDate
    setToDate(calculateToDate.format("YYYY-MM-DDTHH:mm")); // format date to YYYY-MM-DDTHH:mm
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

  return (
    <div style={datePicker}>
      <h1>Date Picker</h1>
      <div style={input}>
        <label for="from_date">From Date</label>
        <input
          id="from_date"
          type="datetime-local"
          onChange={handleFromDate}
          value={fromDate}
        />
      </div>

      <div style={input}>
        <label for="duration">Duration (hours):</label>
        <input id="duration" type="number" onChange={handleDuration} />
      </div>

      <div style={input}>
        <label for="to_date">To Date</label>
        <input id="to_date" type="datetime-local" value={toDate} disabled />
      </div>
    </div>
  );
}
