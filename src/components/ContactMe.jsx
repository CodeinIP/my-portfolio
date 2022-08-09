import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import "../App.css";
const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    // mobile: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
const toast = useToast();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_apw3b1p", "template_rukaejq", form, "7Xg7ez2ycKUpWIlZN")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setStatus(true);
          toast({
            title: "Email send successful.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setLoading(false);
          setError(true);
          toast({
            title: "Email not sent",
            description: err,
            status: "failure",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };
  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div id="contactPage" className="contactForm">
      <div>
        <h1>Contact Me</h1>
      </div>
      <form onSubmit={sendEmail}>
        <FormControl>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />
          <FormLabel>Enter name</FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            required
          />
          <FormLabel>Enter email</FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            value={form.subject}
            onChange={handleInput}
            name="subject"
          />
          <FormLabel>Message Title</FormLabel>
        </FormControl>
        <FormControl mt="1">
          <Textarea
            placeholder="Enter message here.."
            size="sm"
            value={form.query}
            onChange={handleInput}
            name="message"
            required
          />
          <FormLabel>Message description</FormLabel>
        </FormControl>
        <div style={{ textAlign: "right" }}>
          <Button type="submit" isLoading={loading}>
            Contact
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
