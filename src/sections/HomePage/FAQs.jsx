import React, { useState } from "react";
import question from "../../assets/images/question.png";
import QuestionAnswer from "../../components/QuestionAnswer";
import { faqData } from "../../data/faqData";
const FAQs = () => {
  const [openIndexes, setOpenIndexes] = useState(
    faqData.map((_, index) => index)
  );

  const toggleQuestion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <section className="container-64 md:container-108 bg-white flex gap-[90px] py-8 lg:pb-4">
      <div className="lg:mt-[115px]">
        <div className="mb-8 lg:mb-20">
          <h1 className="text-fh-2xl-bold lg:text-fh-5xl-bold mb-2 lg:mb-1">
            Frequently Asked Questions
          </h1>
          <p className="text-fh-sm lg:text-fh-lg">
            Got a question? We're here to answer! f you.
          </p>
          <p className="text-fh-sm lg:text-fh-lg">
            don't see your question here, drop us a line on our{" "}
            <a href="#" className="underline text-pri-blue">
              contact page
            </a>
          </p>
        </div>

        <div className="grid gap-6">
          {faqData.map((item, idx) => (
            <QuestionAnswer
              key={`faq-${idx}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndexes.includes(idx)}
              toggleOpen={() => toggleQuestion(idx)}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={question}
          alt="pic"
          width={"350px"}
          height={"350px"}
          className="md:max-w-[150px] lg:max-w-[350px]"
        />
      </div>
    </section>
  );
};

export default FAQs;
