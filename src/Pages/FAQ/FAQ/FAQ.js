import React from "react";
import { useLoaderData } from "react-router-dom";
import Accordion from "../Accordion/Accordion";

// container component for FAQ Accordion
const FAQ = () => {
  const faqs = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl text-center mt-6 mb-14">Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <Accordion key={faq._id} faq={faq}></Accordion>
      ))}
    </div>
  );
};

export default FAQ;
