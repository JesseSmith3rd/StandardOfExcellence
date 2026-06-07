import Image from "next/image";
import Link from "next/link";
import { FaAmazon, FaStar, FaQuoteLeft, FaCalendarAlt } from "react-icons/fa";

export default function BooksPage() {
  const books = [
    {
      title: "The Brook’s Search",
      subtitle: "There Is An East Wind Blowing",
      published: "Published October 16, 2020",
      description: "A co-authored, deep-rooted narrative that tells the powerful story of God’s favor and recovery through the crippling, generational effects of abuse. An inspiring journey of healing and finding direction.",
      image: "/book1.jpg",
      url: "https://www.amazon.com/There-East-Wind-Blowing-Brooks/dp/B08LG7YS23/",
      isReleased: true,
      rating: 5,
      review: "A powerful testament of faith, endurance, and grace through life's stormiest chapters."
    },
    {
      title: "The Lost Raven",
      subtitle: "There Is An East Wind Blowing",
      published: "Published January 4, 2023",
      description: "An ancestral story of a completely different kind. Follow the compelling realization that occurs when what you have been told concerning your birth and heritage is in direct conflict with reality.",
      image: "/Book2.jpg",
      url: "https://www.amazon.com/THERE-EAST-WIND-BLOWING-RAVEN/dp/B0BRNYLY59",
      isReleased: true,
      rating: 5,
      review: "Compelling, personal, and full of historical and emotional depth. A must-read memoir."
    },
    {
      title: "The Land of Zion",
      subtitle: "There Is An East Wind Blowing",
      published: "Releasing June 24, 2026",
      description: "Timothy Fairley presents the newest installation. Strong foundations will help guide you even when your destination is unknown. An empowering guide detailing the values required to navigate uncertainty.",
      image: "/book3.jpg",
      url: "/contact?inquiry=preorder",
      isReleased: false,
      rating: 5,
      review: "Strong foundations will help guide you even when your destination is unknown."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Literary Works</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-50 mt-2">
            Books by Dr. Timothy Fairley
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-base">
            Explore Dr. Fairley’s deep-seated publications detailing legacy, personal triumph, ancestral discovery, and faith. Available worldwide on Amazon.
          </p>
        </div>

        {/* Books List Grid - 3 Columns responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-800 hover:shadow-2xl hover:shadow-amber-500/5 group"
            >
              <div>
                {/* Book Cover Image */}
                <div className="relative w-44 h-64 mx-auto mb-6 bg-slate-950 rounded-lg overflow-hidden shadow-xl border border-slate-800 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, 176px"
                  />
                  {!book.isReleased && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500 text-slate-950 text-[9px] font-extrabold rounded uppercase tracking-wider">
                      New
                    </div>
                  )}
                </div>

                {/* Subtitle & Date */}
                <div className="flex justify-between items-center text-xs font-semibold text-amber-500/80 mb-2">
                  <span className="uppercase tracking-wider text-[10px]">{book.subtitle}</span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400 mb-4 bg-slate-950/40 w-fit px-2.5 py-1 rounded border border-slate-900">
                  <FaCalendarAlt className={book.isReleased ? "text-slate-500" : "text-amber-500"} />
                  <span>{book.published}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-serif text-slate-50 mb-3">
                  {book.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {book.description}
                </p>

                {/* Star Ratings & Mini Review */}
                <div className="border-t border-slate-800/80 pt-4 mb-6">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(book.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-500 text-xs" />
                    ))}
                  </div>
                  <p className="text-xs italic text-slate-400 leading-relaxed">
                    &ldquo;{book.review}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Button */}
              {book.isReleased ? (
                <Link 
                  href={book.url} 
                  target="_blank" 
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/10 transition duration-300 flex items-center justify-center space-x-2"
                >
                  <FaAmazon size={16} />
                  <span>Buy on Amazon</span>
                </Link>
              ) : (
                <Link 
                  href={book.url} 
                  className="w-full py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 font-bold text-sm hover:bg-slate-800 transition duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Pre-order Inquiry</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Writing Statement Block */}
        <div className="p-8 rounded-xl bg-slate-900/30 border border-slate-900 text-center max-w-2xl mx-auto italic text-slate-400 text-sm leading-relaxed relative">
          <FaQuoteLeft className="text-3xl text-amber-500/10 mx-auto mb-2" />
          <p>
            &ldquo;My books are born out of a desire to document the truth of generational recovery, faith, and the unexpected journeys that redefine our sense of heritage and self-worth.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
