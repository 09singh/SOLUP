import { useState } from "react";

export default function Item() {
  const [items, setItems] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [form, setForm] = useState({
    name: "",
    type: "good",
    image: null,
    imagePreview: "",
    salePrice: "",
    saleAccount: "",
    saleDescription: "",
    costPrice: "",
    costAccount: "",
    costDescription: "",
    preferredVendor: "",
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.salePrice && form.costPrice) {
      setItems([...items, form]);
      setForm({
        name: "",
        type: "good",
        image: null,
        imagePreview: "",
        salePrice: "",
        saleAccount: "",
        saleDescription: "",
        costPrice: "",
        costAccount: "",
        costDescription: "",
        preferredVendor: "",
      });
    } else {
      alert("Please fill item name, sale price, and cost price");
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-slate-800/90 p-6 shadow-2xl shadow-black/20">
        <h1 className="mb-8 text-center text-3xl font-bold text-emerald-400">Item Form</h1>

        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Item Name *"
            value={form.name}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <div className="mb-3">
            <label className="mb-2 block font-semibold">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded border bg-white p-2"
            >
              <option value="good">Good</option>
              <option value="service">Service</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-2 block font-semibold">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded border p-2"
            />
            {form.imagePreview && (
              <img src={form.imagePreview} alt="Preview" className="mt-2 h-32 w-32 rounded object-cover" />
            )}
          </div>

          <div className="mb-3 border-t pt-4">
            <button
              type="button"
              onClick={() => toggleSection("sales")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.sales ? "▼" : "▶"} Sales Information
            </button>
            {expandedSections.sales && (
              <>
                <input
                  type="number"
                  name="salePrice"
                  placeholder="Selling Price *"
                  value={form.salePrice}
                  onChange={handleChange}
                  className="mb-2 w-full rounded border p-2"
                  required
                />
                <input
                  type="text"
                  name="saleAccount"
                  placeholder="Sale Account"
                  value={form.saleAccount}
                  onChange={handleChange}
                  className="mb-2 w-full rounded border p-2"
                />
                <textarea
                  name="saleDescription"
                  placeholder="Sale Description"
                  value={form.saleDescription}
                  onChange={handleChange}
                  className="mb-2 h-16 w-full rounded border p-2"
                />
              </>
            )}
          </div>

          <div className="border-t pt-4">
            <button
              type="button"
              onClick={() => toggleSection("purchase")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.purchase ? "▼" : "▶"} Purchase Information
            </button>
            {expandedSections.purchase && (
              <>
                <input
                  type="number"
                  name="costPrice"
                  placeholder="Cost Price *"
                  value={form.costPrice}
                  onChange={handleChange}
                  className="mb-2 w-full rounded border p-2"
                  required
                />
                <input
                  type="text"
                  name="costAccount"
                  placeholder="Cost Account"
                  value={form.costAccount}
                  onChange={handleChange}
                  className="mb-2 w-full rounded border p-2"
                />
                <textarea
                  name="costDescription"
                  placeholder="Cost Description"
                  value={form.costDescription}
                  onChange={handleChange}
                  className="mb-2 h-16 w-full rounded border p-2"
                />
                <input
                  type="text"
                  name="preferredVendor"
                  placeholder="Preferred Vendor"
                  value={form.preferredVendor}
                  onChange={handleChange}
                  className="mb-3 w-full rounded border p-2"
                />
              </>
            )}
          </div>

          <button type="submit" className="mt-4 w-full rounded bg-emerald-500 p-2 font-semibold text-white">
            Add Item
          </button>
        </form>

        {items.length > 0 && (
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Items List</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="rounded border bg-gray-50 p-4">
                  <div className="flex gap-4">
                    {item.imagePreview && (
                      <img src={item.imagePreview} alt={item.name} className="h-24 w-24 rounded object-cover" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-600">Type: {item.type}</p>
                      <p className="text-sm text-gray-600">Sale Price: ${item.salePrice}</p>
                      <p className="text-sm text-gray-600">Cost Price: ${item.costPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
