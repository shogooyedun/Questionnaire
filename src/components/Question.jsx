// const Question = ({
//   question,
//   options,
//   currentAnswer,
//   handleAnswerChange,
//   instruction,
//   handleNext,
//   handleBack,
//   isLastQuestion,
//   handleSubmit,
// }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">{question}</h2>
//       {instruction && <p className="mb-4 text-gray-500">Pick one</p>}
//       {/* Render options */}
//       <div className="space-y-3">
//         {options.map((option, index) => (
//           <div key={index}>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 value={option}
//                 checked={currentAnswer === option}
//                 onChange={handleAnswerChange}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6">
//         {currentAnswer && (
//           <button
//             onClick={handleNext}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             {isLastQuestion ? "Submit" : "Next"}
//           </button>
//         )}
//         {currentAnswer && currentAnswer !== "" && (
//           <button
//             onClick={handleBack}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//           >
//             Back
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Question;
