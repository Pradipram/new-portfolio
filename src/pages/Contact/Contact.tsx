import {
  Button,
  Stack,
  styled,
  TextField,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";
import "./contactUs.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SocialActivity } from "../../assets";

const InputField = styled(TextField)({
  // margin: "10px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "orange",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
});

const Contact = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !userEmail || !message) {
      toast.error("Please fill all the fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: userEmail,
      message: message,
    };
    // console.log(templateParams);

    // Replace with your own EmailJS Service ID, Template ID, and Public Key
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
    // console.log(service_id);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        // alert("Email sent successfully!");
        toast.success("Email sent successfully!");
      })
      .catch((error: Error) => {
        console.error("Error sending email:", error);
        // alert("Email failed to send.");
        toast.error("Email failed to send.");
      });
  };
  return (
    <div className="contactUs">
      <h1>Contact Us</h1>
      <div className="contactForm">
        <div className="directConnect">
          <h2>Connect with me</h2>
          <p className="description">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>
          <Typography>Name</Typography>
          <InputField
            size="small"
            placeholder="Enter your name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography sx={{ marginTop: "10px" }}>Email</Typography>
          <InputField
            size="small"
            placeholder="Enter your email"
            fullWidth
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <Typography sx={{ marginTop: "10px" }}>Message</Typography>
          <InputField
            size="small"
            placeholder="Enter your message"
            multiline
            rows={4}
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="buttons">
            <a
              href="mailto:pradipramnawa@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Pradip%0A%0A%5BMessage%5D%0A%0AThanks,%0A%5BYour%20Name%5D"
              className="emailLink"
            >
              Email Me Directly
            </a>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSendMessage}
            >
              Send Message
              <IoMdSend size={20} style={{ marginLeft: 5 }} />
            </Button>
          </div>
        </div>
        <div className="separator"></div>
        <div className="socialConnect">
          <div className="socialConnectItem">
            <Typography variant="h5" className="socialConnectItemHeading">
              Email
            </Typography>
            <Typography sx={{ color: "#1976d2" }}>
              pradipramnawa@gamil.com
            </Typography>
          </div>
          <div className="socialConnectItem">
            <Typography variant="h5" className="socialConnectItemHeading">
              Schedule a Meeting
            </Typography>
            {/* <Stack direction="row" justifyContent="flex-end"> */}
            <Stack direction="row" className="stack">
              <Button
                variant="outlined"
                href={`mailto:pradipramnawa@gmail.com?subject=${encodeURIComponent("I want to schedule a meeting with you")}&body=${encodeURIComponent("Hi Pradip,\n\nI have seen your portfolio and want to meet you,\nPlease tell me your availability,\n\nThanks,\n[Your Name]")}`}
                target="_blank"
                sx={{ color: "#1976d2" }}
              >
                Book a time slot
              </Button>
            </Stack>
          </div>
          <div className="socialConnectItem">
            <Typography variant="h5" className="socialConnectItemHeading">
              Social
            </Typography>
            <Stack direction="row" className="stack">
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ bgcolor: "white" }}
                  />
                }
                spacing={2}
                className="socialIconsContainer"
                // sx={{
                //   width: "70%",
                //   flexWrap: "wrap",
                //   justifyContent: "end",
                // }}
              >
                {SocialActivity.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip title={social.title} arrow>
                      <social.icon size={30} color="#1976d2" />
                    </Tooltip>
                  </a>
                ))}
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
