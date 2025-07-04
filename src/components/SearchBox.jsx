export default function SearchBoxr() {
  return (
    <div className="bg-white rounded-xl shadow-sm px-4 py-4 mx-4 mt-4 space-y-4">
      {/* Destination Input */}
      <input
        type="text"
        placeholder="Destination"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
      />

      {/* Date + Guests Row */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="DATE"
          className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <input
          type="text"
          placeholder="GUESTS"
          className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      {/* Search Button */}
      <button className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold py-3 rounded-lg transition-colors">
        SEARCH
      </button>
    </div>
  );
}
