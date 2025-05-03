"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<any>("");
  const [loading, setIsloading] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsloading(true);
    e.preventDefault();
    emailjs.init(PUBLIC_KEY);
    emailjs

      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement)
      .then(() => {
        setModal(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsloading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops, something went wrong. Please try again.");
      });
  }

  return (
    <div className="flex flex-col justify-start items-center py-10">
      <div
        className={
          !modal
            ? `hidden`
            : ` border border-black md:w-[30%] md:fixe  w-[70%] rounded-2xl  mx-auto text-center absolute h-[300px]
       z-100 bg-white text-black flex flex-col justify-center items-center`
        }
      >
        <h1 className="font-bold">Message Sent </h1>
        <p className="font-bold mt-5">Thanks for reaching out</p>

        <div className=" pr-3 w-full h-[100px] flex justify-end items-end ">
          <button
            onClick={() => setModal(false)}
            className="text-black font-bold text-2xl border border-black p-2 hover:bg-black
            hover:text-white
            rounded-2xl cursor-pointer
           "
          >
            CLOSE
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={
          !modal
            ? ` border border-black w-[70%] rounded-3xl mx-auto flex 
        flex-col p-5 box-border max-md:w-[100%]`
            : `hidden`
        }
      >
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-black p-4 rounded-full mt-10"
          placeholder="Your Name"
          type="text"
          name="name"
        />
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border p-4 rounded-full border-black mt-10"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <textarea
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          rows={5}
          name="message"
          placeholder="Send Us A Message"
          className="mt-10 border border-black rounded-2xl p-2"
        ></textarea>

        <button
          type="submit"
          className="bg-black mt-5 text-white font-bold p-5   rounded-full"
        >
          {loading ? `sending .......` : ` Send message 🎂`}
        </button>
      </form>
    </div>
  );
}
