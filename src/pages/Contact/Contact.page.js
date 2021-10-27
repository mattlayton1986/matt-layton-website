import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageContainer from "../../containers/page.container";
import TextContainer from "../../containers/text.container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import UndoIcon from "@mui/icons-material/Undo";
import styled from "@emotion/styled";

const StyledForm = styled.form(({ theme }) => ({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  ".MuiInput-root": {
    margin: theme.spacing(3, 0),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
}));

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubjectChange = (evt) => {
    setSubject(evt.target.value);
  };

  return (
    <PageContainer
      maxWidth="lg"
      direction={{ xl: "column" }}
      justify={{ xl: "flex-start" }}
    >
      <TextContainer justify={{ xl: "flex-start" }}>
        <Typography variant={matches ? "h2" : "h1"} component="h1">
          Contact Me
        </Typography>

        <TextContainer
          justify={{ xl: "flex-start" }}
          align={{ xl: "flex-start" }}
          width={{ xl: "60%", md: "100%" }}
        >
          <Typography variant="h6" component="p" align="justify">
            Hi! 👋🏼 Thanks for stopping by. Whether you're a recruiter 👩🏻‍💼,
            developer 🧑🏻‍💻, friend 🙏🏻, or random passerby 🏃🏻‍♂️, I would love to
            hear from you! Get in touch via LinkedIn or send me a message 📭 in
            the form below and I'll get back to you as soon as possible ⏳.
          </Typography>
        </TextContainer>

        <StyledForm>
          {/* Name */}
          <FormControl variant="standard">
            <InputLabel htmlFor="name" required>
              Name
            </InputLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>

          {/* Email */}
          <FormControl variant="standard">
            <InputLabel htmlFor="email" required>
              Email
            </InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          {/* Subject */}
          <FormControl variant="standard">
            <InputLabel htmlFor="subject" required>
              Subject
            </InputLabel>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
            />
          </FormControl>

          {/* Message */}
          <FormControl>
            <TextField
              variant="standard"
              id="message"
              multiline
              minRows={4}
              maxRows={8}
              label="Your Message"
              required
            />
          </FormControl>

          <StyledButtonContainer>
            <Button variant="outlined" size="large" endIcon={<UndoIcon />}>
              Reset
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{ ml: theme.spacing(2) }}
            >
              Send
            </Button>
          </StyledButtonContainer>
        </StyledForm>
      </TextContainer>
    </PageContainer>
  );
};

export default Contact;
