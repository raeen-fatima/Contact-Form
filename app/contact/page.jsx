"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      toast.success("Form submitted successfully!");
      e.target.reset();
    } else {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-gray-900 shadow-lg  border border-gray-200/40 p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border-b"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border-b"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full p-3 border-b"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-black bg-white p-3 rounded-full hover:bg-gray-500 font-bold transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
