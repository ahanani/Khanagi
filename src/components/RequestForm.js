import { useState } from "react";
import axios from "axios";

function RequestForm() {
  
  const [fullname, setFullname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cxOrder, setCxOrder] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber)) {
      return true;
    }
    alert("You have entered an invalid phone number!");
    return false;
  };

  const ValidateEmail = (email) => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };

  const sendData = (fullname, emailAddress, phoneNumber, cxOrder) => {
    if (ValidateEmail(emailAddress) && validatePhoneNumber(phoneNumber)) {
      const data = {
        fname: fullname,
        email: emailAddress,
        phone: phoneNumber,
        order: cxOrder,
      };

      // .post("https://khanagi-server.onrender.com/sendData", data)
      axios
        .post("http://127.0.0.1:5050/sendData", data)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            alert("Order submitted, thank you!")
          }

          document.getElementById("fname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("order").value = "";

        })
        .catch((error) => {
          alert(
            "Please try placing your order again. Sorry for the inconvenience."
          );
        });
    }
  };

  return (
    <div
      style={{
        padding: "30px 10% 30px 10%",
        marginTop: "30px",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h2>Place an order</h2>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto auto auto",
          gridTemplateColumns: "30% 70%",
          margin: "10px 0px 50px 0px",
        }}
      >
        <span
          style={{ gridColumn: "1", gridRow: "1", margin: "10px 0px 10px 0px" }}
        >
          Full Name:
        </span>
        <input
          style={{
            fontFamily: "Nova Cut, cursive",
            border: "1px solid white",
            backgroundColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            gridColumn: "2",
            gridRow: "1",
            margin: "10px 0px 10px 0px",
            color: "white",
          }}
          type="text"
          id="fname"
          onChange={(e) => setFullname(e.target.value)}
        />
        <span
          style={{
            gridColumn: "1",
            gridRow: "2",
            margin: "10px 0px 10px 0px",
          }}
        >
          E-mail Address:
        </span>
        <input
          style={{
            fontFamily: "Nova Cut, cursive",
            border: "1px solid white",
            backgroundColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            gridColumn: "2",
            gridRow: "2",
            margin: "10px 0px 10px 0px",
            color: "white",
          }}
          type="email"
          id="email"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <span
          style={{
            gridColumn: "1",
            gridRow: "3",
            margin: "10px 0px 10px 0px",
          }}
        >
          Phone Number:
        </span>
        <input
          style={{
            fontFamily: "Nova Cut, cursive",
            border: "1px solid white",
            backgroundColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            gridColumn: "2",
            gridRow: "3",
            margin: "10px 0px 10px 0px",
            color: "white",
          }}
          type="tel"
          id="phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <span
          style={{
            gridColumn: "1",
            gridRow: "4",
            margin: "10px 0px 10px 0px",
          }}
        >
          Your Order:
        </span>
        <textarea
          style={{
            fontFamily: "Nova Cut, cursive",
            border: "1px solid white",
            backgroundColor: "black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            gridColumn: "2",
            gridRow: "4",
            margin: "10px 0px 10px 0px",
            color: "white",
          }}
          rows={5}
          id="order"
          onChange={(e) => setCxOrder(e.target.value)}
        />
        <input
          style={{
            color: "black",
            gridColumn: "1 / span 2",
            gridRow: "5",
            fontFamily: "Nova Cut, cursive",
            margin: "30px 0px 10px 0px",
            border: "0px",
            borderRadius: "5px",
            height: "5vh",
            backgroundColor: "white",
          }}
          type="submit"
          value="Submit Order"
          onClick={() => sendData(fullname, emailAddress, phoneNumber, cxOrder)}
        />
      </div>
    </div>
  );
}

export default RequestForm;
