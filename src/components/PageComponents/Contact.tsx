import axios from "axios";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import contactImg from "@/src/assets/img/contact.jpg";
import GradientButton from "../BaseComponents/Button/GradientButton";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    setLoading(true);
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          toast.success(res.data.message);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl font-semibold">Contact Us</h2>
      <ToastContainer />

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        <div className="flex-1 px-12">
          <Image
            quality={25}
            alt="contact"
            src={contactImg}
            className="hidden md:block h-full object-cover rounded-3xl row-span-2"
            width={600}
            height={200}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Need a hand with your cybersecurity problem? Let us know.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl"
          >
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <GradientButton
              className="px-4 py-2 text-white disabled:cursor-not-allowed self-end"
              props={{
                disabled: loading,
              }}
            >
              {loading ? "Loading..." : "Subscribe"}
            </GradientButton>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
