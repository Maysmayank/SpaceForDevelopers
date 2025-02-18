'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const learningOptions = ["Game Development", "A.I", "Basics Of Coding", "Data Science"];
const sessionModes = ["Online (Zoom/Google Meet)", "In-Person (if applicable)"];

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedSessionMode, setSelectedSessionMode] = useState<string | null>(null);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const onSubmit = async (data: any) => {
    const formData = { ...data, learningGoals: selectedGoals, sessionMode: selectedSessionMode };
    
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Booking successful! A confirmation email has been sent.');
    } else {
      alert('There was an error with your booking. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:py-20 relative text-black md:w-[90%] border flex flex-col gap-4 mx-auto px-10">
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold'>SpaceForDevelopers</h1>
        <h2 className="text-xl font-bold text-left mb-4">Book a Demo Session</h2>
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block font-semibold">Full Name *</label>
        <input {...register('fullName', { required: true })} className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter your full name" />
        {errors.fullName && <p className="text-red-500">Full Name is required.</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-semibold">Email *</label>
        <input {...register('email', { required: true })} className="w-full px-3 py-2 border rounded" type="email" placeholder="Enter your email" />
        {errors.email && <p className="text-red-500">Email is required.</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block font-semibold">Phone Number *</label>
        <input {...register('phoneNumber', { required: true })} className="w-full px-3 py-2 border rounded" type="tel" placeholder="Enter your phone number" />
        {errors.phoneNumber && <p className="text-red-500">Phone Number is required.</p>}
      </div>

      {/* Experience Level */}
      <div className="mb-4">
        <label className="block font-semibold">Grade/Level of Experience *</label>
        <select {...register('experienceLevel', { required: true })} className="w-full px-3 py-2 border rounded">
          <option value="">Select your grade or experience level</option>
          <option value="Below 9th Grade">Below 9th Grade</option>
          <option value="9th Grade">9th Grade</option>
          <option value="10th Grade">10th Grade</option>
          <option value="11th Grade">11th Grade</option>
          <option value="Beginner">Beginner</option>
          <option value="Some Experience">Some Experience</option>
        </select>
        {errors.experienceLevel && <p className="text-red-500">This field is required.</p>}
      </div>

      {/* Preferred Date & Time */}
      <div className="mb-4">
        <label className="block font-semibold">Preferred Date & Time for Demo *</label>
        <div className="flex justify-between gap-4">
          <input {...register('preferredDate', { required: true })} className="w-1/2 px-3 py-2 border rounded" type="date" />
          <input {...register('preferredTime', { required: true })} className="w-1/2 px-3 py-2 border rounded" type="time" />
        </div>
        {(errors.preferredDate || errors.preferredTime) && <p className="text-red-500">Preferred Date & Time are required.</p>}
      </div>

      {/* Learning Goals or Interests */}
      <div className="mb-4">
        <label className="block font-semibold">Learning Goals or Interests (Optional)</label>
        <div className="flex flex-wrap gap-4 mt-8">
          {learningOptions.map((goal) => (
            <div
              key={goal}
              className={`px-4 py-2 border rounded cursor-pointer transition-colors ${
                selectedGoals.includes(goal) ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => toggleGoal(goal)}
            >
              {goal}
            </div>
          ))}
        </div>
      </div>

      {/* Preferred Mode of Session */}
      <div className="mb-4">
        <label className="block font-semibold">Preferred Mode of Session *</label>
        <div className="flex flex-wrap gap-4 mt-8">
          {sessionModes.map((mode) => (
            <div
              key={mode}
              className={`px-4 py-2 border rounded cursor-pointer transition-colors ${
                selectedSessionMode === mode ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedSessionMode(mode)}
            >
              {mode}
            </div>
          ))}
        </div>
        {!selectedSessionMode && <p className="text-red-500 mt-2">This field is required.</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
        Book Session
      </button>
    </form>
  );
};

export default BookingForm;
