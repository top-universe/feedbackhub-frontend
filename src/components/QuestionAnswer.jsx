import PropTypes from "prop-types";

const QuestionAnswer = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="grid gap-4">
      <div
        className="flex justify-between bg-bluegray-2 py-2 lg:py-4 px-4 lg:px-8 cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-fh-base lg:text-fh-xl">{question}</p>
        <p className="text-fh-base lg:text-fh-xl">{isOpen ? "-" : "+"}</p>
      </div>
      <div
        className={`py-2 px-4 lg:pl-8 lg:pr-16 text-fh-base lg:text-fh-xl transition-opacity transition-max-h ease-in duration-300 ${
          isOpen
            ? "opacity-100 max-h-screen delay-100"
            : "opacity-0 max-h-0 overflow-hidden delay-100"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

QuestionAnswer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default QuestionAnswer;
