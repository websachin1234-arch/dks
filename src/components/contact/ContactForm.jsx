"use client";

import { useState } from "react";
import Input from "@/components/common/Input";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    setStatus(response.ok ? "Thank you. We will contact you shortly." : "Unable to send your message.");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-xl gap-5">
      <Input label="Name" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea name="message" required className="min-h-32 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600" />
      </label>
      <button type="submit" className="rounded-lg bg-green-600 px-5 py-3 text-white">Send message</button>
      {status && <p>{status}</p>}
    </form>
  );
}
