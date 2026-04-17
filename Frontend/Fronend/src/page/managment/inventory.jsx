import { useState } from "react";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [form, setForm] = useState({
    product: "",
    sku: "",
    stock: "",
    reorderLevel: "",
    location: "",
    warehouse: "",
    supplier: "",
    notes: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.product && form.stock && form.location) {
      setInventory([...inventory, form]);
      setForm({
        product: "",
        sku: "",
        stock: "",
        reorderLevel: "",
        location: "",
        warehouse: "",
        supplier: "",
        notes: "",
      });
    } else {
      alert("Please fill product name, stock level, and location");
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-slate-800/90 p-6 shadow-2xl shadow-black/20">
        <h1 className="mb-8 text-center text-3xl font-bold text-emerald-400">Inventory Form</h1>

        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
          <input
            type="text"
            name="product"
            placeholder="Product Name *"
            value={form.product}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={form.sku}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock Level *"
            value={form.stock}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <input
            type="number"
            name="reorderLevel"
            placeholder="Reorder Level"
            value={form.reorderLevel}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
          />

          <input
            type="text"
            name="location"
            placeholder="Location *"
            value={form.location}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-2"
            required
          />

          <div className="border-t pt-4">
            <button
              type="button"
              onClick={() => toggleSection("warehouse")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.warehouse ? "▼" : "▶"} Warehouse Information
            </button>
            {expandedSections.warehouse && (
              <input
                type="text"
                name="warehouse"
                placeholder="Warehouse Name"
                value={form.warehouse}
                onChange={handleChange}
                className="mb-3 w-full rounded border p-2"
              />
            )}

            <button
              type="button"
              onClick={() => toggleSection("supplier")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.supplier ? "▼" : "▶"} Supplier Information
            </button>
            {expandedSections.supplier && (
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                value={form.supplier}
                onChange={handleChange}
                className="mb-3 w-full rounded border p-2"
              />
            )}

            <button
              type="button"
              onClick={() => toggleSection("notes")}
              className="mb-2 w-full rounded bg-gray-100 p-2 text-left font-semibold"
            >
              {expandedSections.notes ? "▼" : "▶"} Notes
            </button>
            {expandedSections.notes && (
              <textarea
                name="notes"
                placeholder="Additional Notes"
                value={form.notes}
                onChange={handleChange}
                className="mb-3 h-20 w-full rounded border p-2"
              />
            )}
          </div>

          <button type="submit" className="w-full rounded bg-emerald-500 p-2 font-semibold text-white">
            Add Inventory
          </button>
        </form>

        {inventory.length > 0 && (
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Inventory List</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2 text-left">Product</th>
                    <th className="border p-2 text-left">SKU</th>
                    <th className="border p-2 text-left">Stock</th>
                    <th className="border p-2 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="border p-2">{item.product}</td>
                      <td className="border p-2">{item.sku || "N/A"}</td>
                      <td className="border p-2">{item.stock}</td>
                      <td className="border p-2">{item.location}</td>
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
