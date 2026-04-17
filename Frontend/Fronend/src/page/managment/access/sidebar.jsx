import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState({});

  const handleToggle = (menu) => {
    setOpenMenu({
      ...openMenu,
      [menu]: !openMenu[menu],
    });
  };

  return (
    <aside className="w-full rounded-3xl bg-gray-800 p-4 text-white shadow-xl lg:sticky lg:top-6 lg:h-fit lg:w-64">
      <div className="mb-4 border-b border-gray-700 pb-3">
        <h2 className="text-lg font-bold text-emerald-300">Management</h2>
        <p className="text-sm text-gray-300">Use the vertical toggle buttons to open each form.</p>
      </div>

      <button
        onClick={() => handleToggle("sales")}
        className="mb-2 w-full rounded-xl bg-gray-700 p-3 text-left transition hover:bg-gray-600"
      >
        Sales
      </button>
      {openMenu.sales && (
        <button
          onClick={() => navigate("/management/sales")}
          className="mb-2 w-full rounded-lg bg-gray-900/70 p-2 pl-6 text-left text-emerald-300 hover:text-emerald-200"
        >
          Customer
        </button>
      )}

      <button
        onClick={() => handleToggle("item")}
        className="mb-2 w-full rounded-xl bg-gray-700 p-3 text-left transition hover:bg-gray-600"
      >
        Items
      </button>
      {openMenu.item && (
        <button
          onClick={() => navigate("/management/item")}
          className="mb-2 w-full rounded-lg bg-gray-900/70 p-2 pl-6 text-left text-emerald-300 hover:text-emerald-200"
        >
          Add Item
        </button>
      )}

      <button
        onClick={() => handleToggle("inventory")}
        className="mb-2 w-full rounded-xl bg-gray-700 p-3 text-left transition hover:bg-gray-600"
      >
        Inventory
      </button>
      {openMenu.inventory && (
        <button
          onClick={() => navigate("/management/inventory")}
          className="mb-2 w-full rounded-lg bg-gray-900/70 p-2 pl-6 text-left text-emerald-300 hover:text-emerald-200"
        >
          Add Inventory
        </button>
      )}
    </aside>
  );
}
