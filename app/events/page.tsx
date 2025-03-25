export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6 text-center">
      <h1 className="text-5xl font-bold text-blue-800 mb-8 drop-shadow-lg">
        Upcoming Events
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-12">
        Check back soon for details on upcoming mentorship events, workshops, and leadership seminars hosted by
        <strong> Standard of Excellence</strong>.
      </p>

      {/* Featured Highlight */}
      <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-500 max-w-xl transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          ✨ Book Signing Tour – Summer & Fall ✨
        </h2>
        <p className="text-gray-700 text-lg">
          Coming soon to:
        </p>
        <ul className="mt-4 space-y-2 text-gray-800 text-lg font-semibold">
          <li>📍 Pensacola, Florida</li>
          <li>📍 New Orleans, Louisiana</li>
          <li>📍 Charlotte, North Carolina</li>
          <li>📍 Atlanta, Georgia</li>
        </ul>

        <p className="mt-6 text-blue-600 font-semibold italic text-lg">
          Stay tuned for official dates and details!
        </p>
      </div>
    </div>
  );
}
