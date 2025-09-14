import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ user, onBack }) {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [editing, setEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.username || "xxxx",
    email: user?.email || "",
    password: user?.password || "",
    progress: user?.progress || "0%",
    streak: user?.streak || "0 days",
  });

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    // Normally, save to backend
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
            <p className="text-slate-600">
              Password: {"•".repeat(formData.password?.length || 0)}
            </p>

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

              {/* Password Field with show/hide toggle */}
              <div className="flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
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
          onClick={() => (onBack ? onBack() : navigate("/fitlite"))}
          className="absolute bottom-4 right-4 px-4 py-2 text-sm bg-slate-100 rounded-lg hover:bg-slate-200"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
}
