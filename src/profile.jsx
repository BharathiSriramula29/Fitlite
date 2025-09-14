// src/pages/Profile.jsx
import React, { useState } from "react";

export default function Profile({ user, onBack }) {
  const [profilePic, setProfilePic] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "Guest User",
    email: user?.email || "",
    progress: user?.progress || "0%",
    streak: user?.streak || "0 days",
  });

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Normally save to backend. For now, just exit edit mode.
    setEditing(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md relative">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden mb-4">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500">
                No Image
              </div>
            )}
          </div>

          {/* Upload New Picture */}
          <label className="cursor-pointer text-sm text-emerald-600 hover:underline">
            Change Picture
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePicUpload}
            />
          </label>
        </div>

        {/* Profile Info OR Edit Form */}
        {!editing ? (
          <>
            <h2 className="text-xl font-semibold text-slate-800 mt-4">
              {formData.username}
            </h2>
            <p className="text-slate-600">{formData.email}</p>

            {/* Progress & Streak */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Progress</span>
                <span className="font-semibold text-emerald-600">
                  {formData.progress}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Streak</span>
                <span className="font-semibold text-emerald-600">
                  {formData.streak}
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Form */}
            <div className="mt-6 space-y-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter username"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter email"
              />
              <input
                type="text"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Progress (e.g. 65%)"
              />
              <input
                type="text"
                name="streak"
                value={formData.streak}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Streak (e.g. 12 days)"
              />
            </div>

            {/* Save / Cancel */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {/* Back to Home - lower right */}
        <button
          onClick={onBack}
          className="absolute bottom-4 right-4 px-4 py-2 text-sm bg-slate-100 rounded-lg hover:bg-slate-200"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}