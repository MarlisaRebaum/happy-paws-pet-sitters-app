import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  Button,
  Container, 
  TextField,
  Typography
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import "../App.css";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_77k6jx1',
      'template_oap7mor', 
      form.current, 
      'ARvsHxTAmEMI8QDzv'
    )
    .then(
      (result) => {
        console.log(result.text);
        toast("Message successfully sent", { type: "success" });
    }, (error) => {
      console.log(error.text);
      toast("Unable to send message", { type: "error" });
    });
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <Container
      maxWidth='sm'
      style={{
        border: '1px solid lightgrey', 
        backgroundColor: '#f8f9fa', 
        marginTop: '4em', 
        marginBottom: '4em',
        textAlign: 'center', 
        padding: '5rem',
        }}>
      <Typography style={{
        fontFamily: 'Roboto, arial, sans-serif', 
        textAlign: 'center', 
        fontSize:'2em'
        }}>Contact Us
      </Typography>
      <Typography style={{
        fontFamily: 'Roboto, arial, sans-serif', 
        textAlign: 'center', 
        fontSize:'1em', 
        paddingTop: '1em', 
        paddingBottom: '1em', 
        fontStyle: 'italic'
        }}>Please send us a message with questions, comments, or 
          concerns and we will get back to you within 5-7 business days.
      </Typography>
      <form ref={form}>
        <TextField
          variant="outlined"
          margin="normal"
          name="user_name"
          label="Name"
          fullWidth
          required
          value={name}
          onChange={event => setName(event.target.value)}
          style={{backgroundColor: 'white'}}
        />
        <TextField
          type="email"
          variant="outlined"
          margin="normal"
          name="user_email"
          label="Email"
          fullWidth
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
          style={{backgroundColor: 'white'}}
        />
        <TextField
          multiline={true}
          rows={8}
          variant="outlined"
          margin="normal"
          name="message"
          label="Message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          fullWidth
          required
          style={{backgroundColor: 'white'}}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendEmail}
          endIcon={<Send />}
          style={{marginTop: '2em', width: '30%'}}
          >Send
        </Button>
      </form>
    </Container>
  );
};