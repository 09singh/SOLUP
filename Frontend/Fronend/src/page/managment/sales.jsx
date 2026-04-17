import { useState } from "react";
import { API_ENDPOINTS } from "../../config/api";

export default function Sales({sdata}) {
  const [sales, setSales] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    businessType: "business",
    primaryContact: "",
    companyName: "",
    businessName: "",
    email: "",
    phone: "",
    language: "",
    otherDetails: "",
    address: "",
    contactPerson: "",
    remark: "",
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!form.primaryContact || !form.email || !form.phone) {
      alert("Please fill primary contact, email, and phone");
      return;
    }

    setIsSubmitting(true);

    const saved = await fatchData();

    if (saved) {
      setSales([...sales, form]);
      setForm({
        businessType: "business",
        primaryContact: "",
        companyName: "",
        businessName: "",
        email: "",
        phone: "",
        language: "",
        otherDetails: "",
        address: "",
        contactPerson: "",
        remark: "",
      });
    }
    
    setIsSubmitting(false);
  };
    const fatchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.sales, {
          headers: {
            "content-type": "application/json" ,
            " Authorization": localStorage.getItem("token")
          },
          method: "POST",
          body: JSON.stringify(form),
        });
        const data = await response.json();
        console.log(data);
        return response.ok;
      } catch (error) {
        console.error("Error fetching sales data:", error);
        return false;
      }
    };
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-slate-800/90 p-6 shadow-2xl shadow-black/20">
        <h1 className="mb-8 text-center text-3xl font-bold text-emerald-400">Sales Form</h1>

        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-4">
            <label className="mb-2 block font-semibold">Business Type</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="businessType"
                  value="business"
                  checked={form.businessType === "business"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Business
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="businessType"
                  value="individual"
                  checked={form.businessType === "individual"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Individual
              </label>
            </div>
          </div>

          <input
            type="text"
            name="primaryContact"
            placeholder="Primary Contact *"
            value={form.primaryContact}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={form.companyName}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
          />

          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={form.businessName}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="mb-4 w-full rounded border bg-white p-2"
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>

          <div className="border-t pt-4 flex">
            <button
              type="button"
              onClick={() => toggleSection("other")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.other ? "▼" : "▶"} Other Details
            </button>
            {expandedSections.other && (
              <textarea
                name="otherDetails"
                placeholder="Other Details"
                value={form.otherDetails}
                onChange={handleChange}
                className="mb-3 h-20 w-full rounded border p-2"
              />
            )}

            <button
              type="button"
              onClick={() => toggleSection("address")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.address ? "▼" : "▶"} Address
            </button>
            {expandedSections.address && (
              <textarea
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="mb-3 h-20 w-full rounded border p-2"
              />
            )}

            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.contact ? "▼" : "▶"} Contact Person
            </button>
            {expandedSections.contact && (
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person Name"
                value={form.contactPerson}
                onChange={handleChange}
                className="mb-3 w-full rounded border p-2"
              />
            )}

            <button
              type="button"
              onClick={() => toggleSection("remark")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.remark ? "▼" : "▶"} Remark
            </button>
            {expandedSections.remark && (
              <textarea
                name="remark"
                placeholder="Remark"
                value={form.remark}
                onChange={handleChange}
                className="mb-3 h-20 w-full rounded border p-2"
              />
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full rounded bg-emerald-500 p-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? "Saving..." : "Add Sale"}
          </button>
        </form>

        {sales.length > 0 && (
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Sales Records</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2 text-left">Type</th>
                    <th className="border p-2 text-left">Contact</th>
                    <th className="border p-2 text-left">Email</th>
                    <th className="border p-2 text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="border p-2 capitalize">{sale.businessType}</td>
                      <td className="border p-2">{sale.primaryContact}</td>
                      <td className="border p-2">{sale.email}</td>
                      <td className="border p-2">{sale.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
