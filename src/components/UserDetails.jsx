import React from "react";

const UserDetails = ({ userDetails, handleInputChange, handleNext }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Demographic:</h1>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={userDetails.email}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userDetails.age}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        />

        {/* Dropdown for Sex */}
        <select
          name="sex"
          value={userDetails.sex}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </form>

      <button
        onClick={handleNext}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default UserDetails;
