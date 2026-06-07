import { FaEnvelope, FaRegHandshake, FaCalendarCheck, FaRibbon } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Connect With Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-50 mt-2">
            Contact & Booking
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-serif text-slate-100 mb-4">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Thank you for your interest in the Standard of Excellence mentoring society. Whether you want to volunteer as a mentor, inquire about upcoming events, book signing tours, pre-order our newest book, or establish a partnership, we would love to hear from you.
              </p>
            </div>

            {/* Quick Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl flex items-center space-x-4">
                <div className="p-3 bg-slate-950 rounded-lg text-amber-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Direct Email</h4>
                  <a href="mailto:Standardof.Excellence@yahoo.com" className="text-sm font-bold text-slate-200 hover:text-amber-400 transition-colors">
                    Standardof.Excellence@yahoo.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl flex items-center space-x-4">
                <div className="p-3 bg-slate-950 rounded-lg text-blue-500">
                  <FaRibbon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Non-Profit Status</h4>
                  <p className="text-sm font-bold text-slate-200">
                    501(c)(3) Certified Organization
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl flex items-center space-x-4">
                <div className="p-3 bg-slate-950 rounded-lg text-emerald-500">
                  <FaRegHandshake size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Mentoring Partnerships</h4>
                  <p className="text-sm text-slate-400">
                    Welcoming collaborations with school districts and youth centers.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/40 border border-slate-900 rounded-xl flex items-center space-x-4">
                <div className="p-3 bg-slate-950 rounded-lg text-amber-500">
                  <FaCalendarCheck size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Speaking & Signing</h4>
                  <p className="text-sm text-slate-400">
                    Request a speaking date or pre-order the upcoming book &ldquo;The Land of Zion&rdquo;.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Formspree Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-900 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
            <h3 className="text-xl font-bold font-serif text-slate-100 mb-6">Send Us a Message</h3>
            
            <form
              action="https://formspree.io/f/xqaewyqa"
              method="POST"
              className="space-y-6"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm placeholder-slate-600 transition"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm placeholder-slate-600 transition"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Message Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your inquiry, volunteering interest, or book pre-order request..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm placeholder-slate-600 transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/10 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
