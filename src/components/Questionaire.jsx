import React, { useState } from "react";

const Questionaire = () => {
  // State to track if the user is on the start page
  const [isStartPage, setIsStartPage] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    age: "",
    sex: "",
    hasSmartphone: false,
  });

  // State for questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Array of questions
  const questions = [
    {
      question: "How do you currently take care of your health?",
      paragraph: "pick one",
      options: [
        "🌟 I try to eat healthy sometimes.",
        "🌟 I work out regularly.",
        "🌟 I wait until I feel sick.",
        "❓I’m not sure where to start!",
      ],
      name: "Health care",
    },
    {
      question:
        "If there was an app to help you stay healthy, what features would excite you the most?",
      paragraph: "Select all that apply",
      options: [
        "🌟 Personalized healthy food blends (juices, smoothies, etc.)",
        "🌟Access to health experts (e.g nutritionists, mental health coaches.)",
        "🌟A gamified health tracker to set and achieve goals.",
        "🌟An online store for wellness products (like spa or gym services.)",
      ],
      name: "APP inqiuries",
      isMultiple: true, // Add this property to indicate multiple selection
    },

    {
      question: " How do you usually get health-related advice or products?",
      paragraph: "Pick one:",
      options: [
        "🌟 Online (e.g., apps, websites, or social media)",
        "🌟 Local stores or market",
        "🌟Directly from healthcare professionals",
        "🌟i don’t actively seek health advice/products.",
      ],
      name: "Health advice",
    },

    {
      question:
        "What’s your biggest challenge when it comes to staying healthy?",
      paragraph: "choose one:",
      options: [
        "🌟 Lack of time",
        "🌟 Cost of products or services",
        "🌟Lack of tools or resources",
        "🌟Lack of guidance or support",
      ],
      name: "healthChallenges",
    },
    {
      question:
        " Would you be interested in creating your own healthy blends through an app or store?",
      paragraph: "Pick one:",
      options: ["✅Yes, sounds exciting!", "❌No, I prefer ready-made options"],
      name: "Health app",
    },
    {
      question:
        "What would motivate you to use a health-focused app orservice?",
      paragraph: "choose your top 2:",
      options: [
        "🌟 Staying fit and energetic",
        "🌟 Preventing chronic illnesses",
        "🌟 Learning about wellness in a fun way",
        "🌟 Earning rewards for healthy habits",
      ],
      name: "healthMotivation",
      isMultiple: true, // Add this property to indicate multiple selection
    },
    {
      question:
        "How much would you be willing to spend monthly on a health service or app that offers personalized care?",
      paragraph: "pick one",
      options: [
        "🌟 Less than ₦5,000",
        "🌟 ₦5,000 – ₦10,000",
        "🌟 Over ₦10,000",
        "🌟 I'm not sure yet.",
      ],
      name: "monthlyservice",
    },
    {
      question: "If you heard about Frootify, what would make you try it?",
      paragraph: "pick one",
      options: [
        "🌟 A recommendation from a friend",
        "🌟 Seeing it on social media or in an ad",
        "🌟 Needing health support",
        "🌟 It seems interesting and new!",
      ],
      name: "AboutFrootify",
    },
    {
      question:
        "Do you think preventive healthcare is important? Why or why not?",
      paragraph: "pick one",
      options: [
        "✅Yes:(Please share your thoughts!)",
        "❌No: (We’d love to hear why..)",
      ],
      name: "healthImportant",
    },
    {
      question: "If you could describe Frootify in one word, what would it be?",
      paragraph: "pick one",
      options: [
        "🌟 Inspiring",
        "🌟 Innovative",
        "🌟 Healthy",
        "✨Other:(Please specify)",
      ],
      name: "Frootify",
    },
  ];

  // Functions to handle user information input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleStart = () => {
   const { name, email, age, sex } = userInfo;

   // Validate required fields
   if (!name || !email || !age || !sex) {
     alert("Please fill out all required fields to continue.");
     return;
   }
   setIsStartPage(false);
 };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: selectedOption,
    }));
  };

    const handleCheckboxChange = (event) => {
      const option = event.target.value;
      const isChecked = event.target.checked;
      setUserAnswers((prevAnswers) => {
        const selectedOptions = prevAnswers[currentQuestionIndex] || [];
        if (isChecked) {
          return {
            ...prevAnswers,
            [currentQuestionIndex]: [...selectedOptions, option],
          };
        } else {
          return {
            ...prevAnswers,
            [currentQuestionIndex]: selectedOptions.filter((o) => o !== option),
          };
        }
      });
    };

//   const handleCheckboxChange = (event) => {
//     const option = event.target.value;
//     const isChecked = event.target.checked;
//     setUserAnswers((prevAnswers) => {
//       const selectedOptions = prevAnswers[currentQuestionIndex] || [];
//       return {
//         ...prevAnswers,
//         [currentQuestionIndex]: isChecked
//           ? [...selectedOptions, option]
//           : selectedOptions.filter((o) => o !== option),
//       };
//     });
//   };

  const handleNext = () => {
    const selectedAnswer = userAnswers[currentQuestionIndex];
    if (
      !selectedAnswer ||
      (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)
    ) {
      alert("Please select an option before proceeding.");
      return;
    }
    if (currentQuestionIndex === 5 && selectedAnswer.length !== 2) {
      alert("Please select exactly 2 options.");
      return;
    }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

 const handlePrev = () => {
   if (currentQuestionIndex === 0) {
     setIsStartPage(true); // Go back to the start page
   } else {
     setCurrentQuestionIndex(currentQuestionIndex - 1);
   }
 };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      userInfo,
      userAnswers,
    };
    try {
      // Simulate API call
      await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
    } catch (error) {
      alert("There was an error submitting your feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = userAnswers[currentQuestionIndex] || "";
  const totalQuestions = questions.length;
  const progressPercentage = isStartPage
    ? 0
    : ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="p-4">
      <div
        className="progress-bar rounded-md"
        style={{
          width: `${progressPercentage}%`,
          height: "10px",
          backgroundColor: "rgb(255 123 34)",
        }}
      ></div>
      {isSubmitted ? (
        <section className="border p-4 rounded shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#335eb3]">
            Thanks for sharing your thoughts! Your feedback will help us design
            something that truly makes a difference in people’s lives. 🌟
          </h1>
        </section>
      ) : isStartPage ? (
        <section className="border p-4 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-[#335eb3]">
            Frootify Idea Validation Questionnaire
          </h1>
          <p>
            Hi there! We’re exploring a new way to make healthcare easier, more
            fun, and personalized for YOU. Your insights will help us shape
            something truly amazing. Let’s dive in! 🌟
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={userInfo.age}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="radio"
                name="sex"
                value="Male"
                checked={userInfo.sex === "Male"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Male
              <input
                type="radio"
                name="sex"
                value="Female"
                checked={userInfo.sex === "Female"}
                onChange={handleInputChange}
                className="mr-2 ml-4"
              />{" "}
              Female
            </div>
            <button
              type="button"
              onClick={handleStart}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Start Questionnaire
            </button>
          </form>
        </section>
      ) : (
        <section className="border p-4 rounded shadow-lg">
          <form>
            <p className="font-bold mb-2">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </p>
            <p>{currentQuestion.paragraph}</p>
            {currentQuestion.options.map((option, idx) => (
              <div key={idx} className="mb-2">
                <input
                  type={currentQuestion.isMultiple ? "checkbox" : "radio"} // Checkboxes for multiple selections
                  value={option}
                  checked={
                    currentQuestion.isMultiple
                      ? selectedOption.includes(option)
                      : selectedOption === option
                  }
                  onChange={
                    currentQuestion.isMultiple
                      ? handleCheckboxChange
                      : handleOptionChange
                  }
                  className="mr-2"
                />
                {option}
              </div>
            ))}
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 mr-2"
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 bg-secondary text-white rounded mt-4"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-secondary text-white"
              >
                Next
              </button>
            )}
          </form>
        </section>
      )}
    </div>
  );
};

export default Questionaire;


