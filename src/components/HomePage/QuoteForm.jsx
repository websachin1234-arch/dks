"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { homepageAssets, homepageCopy } from "@/utils/helper";

export default function QuoteForm() {
  const copy = homepageCopy.quoteForm;
  const assets = homepageAssets.quoteForm;
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = "service_cuv86z5";
  const TEMPLATE_ID = "template_0hbo76n";
  const PUBLIC_KEY = "IgobY-EGMqPYzD90V";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    const name = form.current.user_name.value.trim();
    const contact = form.current.user_contact.value.trim();

    const newErrors = {};

    if (name === "") {
      newErrors.name = copy.errors.nameRequired;
    } else if (!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name)) {
      newErrors.name = copy.errors.invalidName;

    }

    if (contact === "") {
      newErrors.contact = copy.errors.contactRequired;
    } else if (!/^[6-9]\d{9}$/.test(contact)) {
      newErrors.contact = copy.errors.invalidContact;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      noValidate
      className="bg-white py-10 px-12.5 rounded-2xl max-w-282.25 mx-auto shadow-[0px_4px_25px_0px_#0101011A] -mt-29"
    >
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center">
            <Image src={assets.name} alt="" height="18" width="18"  />{copy.nameLabel}</label>
          <input
            type="text"
            name="user_name"
            placeholder={copy.namePlaceholder}
            className="w-full mt-2 px-4 py-3 border border-[#DCDCDC] rounded-full text-sm  placeholder:text-[#4D4D4D]"
          />
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        </div>

        <div className="w-full md:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center">  <Image src={assets.contact} alt="" height="18" width="18"/> {copy.contactLabel}</label>
          <input
            type="tel"
            name="user_contact"
            placeholder={copy.contactPlaceholder}
            className="w-full mt-2 px-4 py-3 border border-[#DCDCDC] rounded-full text-sm placeholder:text-[#4D4D4D]"
          />
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        </div>

        <div className="w-full md:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center"> <Image src={assets.upload} alt="" height="18" width="18"/>   {copy.uploadLabel}</label>
          <label className="flex items-center gap-2 w-full mt-2 px-4 py-3 border border-dashed border-[#DCDCDC] rounded-full text-sm text-[#4D4D4D] cursor-pointer">
           <Image src={assets.photo} alt="" height="20" width="20"/>{copy.uploadPrompt}
  <input type="file" name="user_photo" className="hidden" />
</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 py-3 bg-custom-green text-white font-semibold rounded-full disabled:opacity-60"
      >
        {loading ? copy.sendingLabel : copy.submitLabel}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm mt-3 text-center">
          {copy.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3 text-center">
          {copy.errorMessage}
        </p>
      )}
    </form>
  );
}