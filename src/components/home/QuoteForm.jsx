"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Image from "next/image";
import { homepageAssets, homepageCopy } from "@/utils/helper";

const MAX_FILE_MB = 2;
const BRAND_GREEN = "#19AE1A";

export default function QuoteForm() {
  const copy = homepageCopy.quoteForm;
  const assets = homepageAssets.quoteForm;
  const form = useRef();
  const fileInputRef = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [dragging, setDragging] = useState(false);

  const SERVICE_ID = "service_cuv86z5";
  const TEMPLATE_ID = "template_0hbo76n";
  const PUBLIC_KEY = "IgobY-EGMqPYzD90V";

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const clearError = (field) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const removeFile = () => {
    setFile(null);
    setPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    clearError("photo");
  };

  const handleFile = (selected) => {
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        photo: "Please upload an image file only",
      }));
      return;
    }
    if (selected.size > MAX_FILE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        photo: `Image must be under ${MAX_FILE_MB}MB`,
      }));
      return;
    }

    const dt = new DataTransfer();
    dt.items.add(selected);
    fileInputRef.current.files = dt.files;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    clearError("photo");
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // keep existing file error if any
    if (errors.photo) newErrors.photo = errors.photo;

    setErrors(newErrors);
    if (Object.keys(newErrors).some((k) => newErrors[k])) return;

    setLoading(true);

    // loading popup while the email is sending
    Swal.fire({
      title: copy.sendingLabel || "Sending...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
    });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        form.current.reset();
        setFile(null);
        setPreview("");
        setErrors({});

        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: copy.successMessage,
          confirmButtonColor: BRAND_GREEN,
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: copy.errorMessage,
          confirmButtonColor: BRAND_GREEN,
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      noValidate
      className="bg-white py-6 px-5 sm:py-8 sm:px-8 lg:py-10 lg:px-12.5 rounded-2xl w-full max-w-282.25 mx-auto shadow-[0px_4px_25px_0px_#0101011A] mt-6 lg:mt-0 lg:-mt-16 xl:-mt-24 2xl:-mt-29 relative z-10"
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
        {/* NAME */}
        <div className="w-full lg:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center text-sm sm:text-base">
            <Image src={assets.name} alt="" height="18" width="18" />
            {copy.nameLabel}
          </label>
          <input
            type="text"
            name="user_name"
            placeholder={copy.namePlaceholder}
            onChange={() => clearError("name")}
            className={`w-full mt-2 px-4 py-3 border rounded-full text-sm placeholder:text-dark-gray outline-custom-green ${
              errors.name ? "border-red-500" : "border-[#DCDCDC]"
            }`}
          />
          <p className="text-red-500 text-xs mt-1 min-h-4">{errors.name}</p>
        </div>

        {/* CONTACT */}
        <div className="w-full lg:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center text-sm sm:text-base">
            <Image src={assets.contact} alt="" height="18" width="18" />
            {copy.contactLabel}
          </label>
          <input
            type="tel"
            name="user_contact"
            inputMode="numeric"
            maxLength={10}
            placeholder={copy.contactPlaceholder}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, ""); // digits only
              clearError("contact");
            }}
            className={`w-full mt-2 px-4 py-3 border rounded-full text-sm placeholder:text-dark-gray outline-custom-green ${
              errors.contact ? "border-red-500" : "border-[#DCDCDC]"
            }`}
          />
          <p className="text-red-500 text-xs mt-1 min-h-4">{errors.contact}</p>
        </div>

        {/* UPLOAD */}
        <div className="w-full lg:w-1/3">
          <label className="font-semibold flex gap-1.5 items-center text-sm sm:text-base">
            <Image src={assets.upload} alt="" height="18" width="18" />
            {copy.uploadLabel}
          </label>

          <div
            onDragOver={onDragOver}
            onDragEnter={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => !file && fileInputRef.current?.click()}
            className={`flex items-center gap-2 w-full mt-2 px-4 py-2.5 border border-dashed rounded-full text-sm text-dark-gray transition-colors ${
              dragging
                ? "border-custom-green bg-green-50"
                : errors.photo
                  ? "border-red-500"
                  : "border-[#DCDCDC]"
            } ${file ? "" : "cursor-pointer"}`}
          >
            {preview ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Selected preview"
                  className="h-8 w-8 rounded-full object-cover shrink-0"
                />
                <span className="truncate flex-1">{file?.name}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  aria-label="Remove image"
                  className="text-red-500 font-bold px-1 cursor-pointer"
                >
                  ✕
                </button>
              </>
            ) : (
              <>
                <Image src={assets.photo} alt="" height="20" width="20" />
                <span className="truncate">
                  {dragging ? "Drop image here" : copy.uploadPrompt}
                </span>
              </>
            )}

            <input
              ref={fileInputRef}
              type="file"
              name="user_photo"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>
          <p className="text-red-500 text-xs mt-1 min-h-4">{errors.photo}</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="relative overflow-hidden active:scale-95 group w-full mt-4 lg:mt-6 py-3 bg-custom-green text-white font-semibold rounded-full border border-transparent transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
          {loading ? copy.sendingLabel : copy.submitLabel}
        </span>
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
      </button>
    </form>
  );
}
