import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function FreeTrial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      {/* Free Trial Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Start Free Trial
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

          <div className="bg-white rounded-xl p-6 w-[400px] text-center shadow-lg">
            <h2 className="text-xl font-semibold mb-3">
              Free for Everyone
            </h2>

            <p className="text-gray-600 mb-6">
              This software is completely free to use. Just sign up, log in,
              and start managing your business with our platform.
            </p>

            <div className="flex justify-center gap-3">
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={()=>Navigate("/signup")}
                          >
                Sign Up
              </button>

              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}