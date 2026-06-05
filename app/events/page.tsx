import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegBell, FaUserFriends } from "react-icons/fa";

export default function EventsPage() {
  const tourStops = [
    {
      city: "Pensacola, Florida",
      state: "FL",
      season: "Summer & Fall 2025",
      type: "Book Signing & Founder Meetup",
      description: "Join Dr. Timothy Fairley in his hometown area for an intimate book signing, author read-aloud, and Q&A covering legacy and mentorship."
    },
    {
      city: "New Orleans, Louisiana",
      state: "LA",
      season: "Summer & Fall 2025",
      type: "Cultural Heritage Tour & Signing",
      description: "A special author event highlighting the deep ancestral themes of 'The Lost Raven' and community development discussion."
    },
    {
      city: "Charlotte, North Carolina",
      state: "NC",
      season: "Summer & Fall 2025",
      type: "Leadership Seminar & Signing",
      description: "Engaging local youth groups and community leadership networks alongside the official book signing event."
    },
    {
      city: "Atlanta, Georgia",
      state: "GA",
      season: "Summer & Fall 2025",
      type: "Non-Profit Gala & Author Event",
      description: "Our flagship event focusing on the Standard of Excellence mentoring model and the official book showcase."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Stay Connected</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-50 mt-2">
            Upcoming Events
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-base">
            Join Dr. Timothy Fairley and the Standard of Excellence team at upcoming workshops, mentorship seminars, and book signing tours.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-900 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-amber-500">
              <FaCalendarAlt />
              <span className="text-xs font-bold uppercase tracking-widest">Featured Highlight</span>
            </div>
            <h2 className="text-2xl font-bold font-serif text-slate-50">
              Book Signing Tour
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dr. Fairley is embarking on a multi-state book signing tour to celebrate the publication of <em>The Brooks Search</em> and <em>The Lost Raven</em>. 
            </p>
          </div>
          <span className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-sm">
            ✨ Coming Summer & Fall 2025 ✨
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-800 pl-8 ml-4 space-y-12 mb-16">
          {tourStops.map((stop, index) => (
            <div key={index} className="relative">
              {/* Pin indicator */}
              <div className="absolute -left-[43px] top-1.5 p-1.5 bg-slate-950 border-2 border-amber-500 rounded-full text-amber-500">
                <FaMapMarkerAlt size={12} />
              </div>

              <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl backdrop-blur-sm hover:border-slate-800 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-slate-100 font-serif">
                    {stop.city}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 w-fit">
                    {stop.season}
                  </span>
                </div>
                
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-3">
                  {stop.type}
                </span>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Program Note */}
        <div className="p-8 rounded-xl bg-slate-900/30 border border-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <FaUserFriends className="text-3xl text-amber-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-200">Mentorship Seminars</h4>
              <p className="text-xs text-slate-400">We host monthly character development workshops and youth leadership meetings.</p>
            </div>
          </div>
          <Link href="/contact" className="px-5 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 font-bold text-sm hover:bg-slate-800 hover:text-white transition-colors flex items-center space-x-2 flex-shrink-0">
            <FaRegBell />
            <span>Notify Me of Events</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
