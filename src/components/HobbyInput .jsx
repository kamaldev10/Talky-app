import React from "react";

const HobbyInput = ({ values, onChange, onAdd, onRemove }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-semibold text-black">
        Hobi
      </label>
      {values.map((value, index) => (
        <div className="flex gap-2 mb-2" key={index}>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e, index)}
            placeholder={`Hobi ${index + 1}`}
            className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
          />
          {values.length > 1 && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-red-600 font-bold px-2 rounded hover:bg-red-100 transition"
              aria-label={`Hapus hobi ${index + 1}`}
            >
              &times;
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="text-violet-700 hover:underline text-xs font-semibold"
      >
        + Tambah Hobi
      </button>
    </div>
  );
};

export default HobbyInput;
