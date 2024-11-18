
// import React, { useState } from "react";
// import UserDetails from "./components/UserDetails";
// import Question from "./components/Question";
// import ThankYou from "./components/ThankYou";

// const App = () => {
//   // State to manage user details
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     age: "",
//     sex: "",
//   });

//   // State to manage the current question index
//   const [currentStep, setCurrentStep] = useState(0);

//   // State to manage answers to the questionnaire
//   const [answers, setAnswers] = useState(Array(10).fill(""));

//   // Questions for the questionnaire
//   const questions = [
//     "How do you currently take care of your health?",
//     "If there was an app to help you stay healthy, what features would excite you the most?",
//     "How do you usually get health-related advice or products?",
//     "What's your biggest challenge when it comes to staying healthy?",
//     "Would you be interested in creating your own healthy blends through an app or store?",
//     "What would motivate you to use a health-focused app or service?",
//     "How much would you be willing to spend monthly on health service or app that offers personalized care?",
//     "If you heard about Frootify, what would make you try it?",
//     "Do you think preventive healthcare is important? Why or why not?",
//     "If you could describe Frootify in one word, what would it be?",
//   ];

//   // Options for the answers
//   const options = {
//     healthCare: [
//       "I try to eat healthy sometimes",
//       "I work out regularly",
//       "I wait until I feel sick",
//       "I'm not sure where to start",
//     ],
//     appFeatures: [
//       "Personalized healthy food blends (juices, smoothies, etc.)",
//       "Access to health experts (e.g., nutritionists, mental health coaches)",
//       "A gamified health tracker to set and achieve goals",
//       "An online store for wellness products (like spa or gym services)",
//     ],
//     adviceSources: [
//       "Online (e.g., apps, websites, or social media)",
//       "Local stores or markets",
//       "Directly from healthcare professionals",
//       "I don't actively seek health advice/products",
//     ],
//     challenges: [
//       "Lack of time",
//       "Cost of products or services",
//       "Lack of tools or resources",
//       "Lack of guidance or support",
//     ],
//     healthBlendsInterest: [
//       "Yes, sounds exciting!",
//       "No, I prefer ready-made options",
//     ],
//     motivation: [
//       "Staying fit and energetic",
//       "Preventing chronic illness",
//       "Learning about wellness in a fun way",
//       "Earning rewards for healthy habits",
//     ],
//     spending: [
//       "Less than #5,000",
//       "#5,000-#10,000",
//       "Over #10,000",
//       "I'm not sure yet",
//     ],
//     frootifyInterest: [
//       "A recommendation from a friend",
//       "Seeing it on social media or in an ad",
//       "Needing health support",
//       "It seems interesting and new!",
//     ],
//     preventiveHealthcare: [
//       "Yes: (please share your thoughts!)",
//       "No: (we'd love to hear why)",
//     ],
//     frootifyDescription: [
//       "Inspiring",
//       "Innovative",
//       "Healthy",
//       "Other: (Please specify)",
//     ],
//   };

//   // Handle changes in user details inputs
//   const handleInputChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   // Handle changes in answers
//   const handleAnswerChange = (e) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentStep - 1] = e.target.value;
//     setAnswers(updatedAnswers);
//   };

//   // Proceed to the next step
//   const handleNext = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   // Go back to the previous step
//   const handleBack = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     alert(
//       `User Details: ${JSON.stringify(userDetails)}\nAnswers: ${JSON.stringify(
//         answers
//       )}`
//     );
//     setCurrentStep(currentStep + 1); // Show the ThankYou component after submission
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         {/* Show heading and intro text for Step 0 */}
//         {currentStep === 0 && (
//           <div className="text-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">
//               Frootify Idea Validation Questionnaire
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Hi there! We're exploring a new way to make healthcare easier,
//               more fun, and personalized for YOU. Your insights will help us
//               shape something truly amazing. Let's dive in!
//             </p>
//           </div>
//         )}

//         {/* Step 0: Collect User Details */}
//         {currentStep === 0 && (
//           <UserDetails
//             userDetails={userDetails}
//             handleInputChange={handleInputChange}
//             handleNext={handleNext}
//           />
//         )}

//         {/* Step 1 to 10: Display Questions */}
//         {currentStep > 0 && currentStep <= 10 && (
//           <Question
//             question={questions[currentStep - 1]}
//             options={Object.values(options)[currentStep - 1]}
//             currentAnswer={answers[currentStep - 1]}
//             handleAnswerChange={handleAnswerChange}
//             handleNext={handleNext}
//             handleBack={handleBack}
//             isLastQuestion={currentStep === 10}
//             handleSubmit={handleSubmit}
//             instruction={
//               currentStep === 0 ||
//               currentStep === 1 ||
//               currentStep === 2 ||
//               currentStep === 3 ||
//               currentStep === 4 ||
//               currentStep === 5 ||
//               currentStep === 6 ||
//               currentStep === 7 ||
//               currentStep === 8 ||
//               currentStep === 9
//             }
//           />
//         )}

//         {/* Step 11: Thank You Message */}
//         {currentStep > 10 && <ThankYou />}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Questionaire from './components/Questionaire'

const App = () => {
  return (
    <div>
      <Questionaire />
    </div>
  )
}

export default App