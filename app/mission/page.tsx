export default function MissionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      <div className="max-w-4xl bg-white rounded-xl shadow-lg p-10 text-gray-800 animate-fade-in">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Our Mission & Purpose
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Standard of Excellence</strong>, our mission is to empower, educate, and uplift boys,
            teenagers, and men through meaningful mentorship and leadership development. We aim to equip them
            with the tools to make wise decisions, grow in character, and become leaders in their communities.
          </p>

          <p>
            We believe that every young man deserves access to strong role models, guidance, and resources
            that help them thrive in life. By fostering positive values, emotional growth, and purpose-driven
            thinking, we are shaping a generation of men committed to excellence, leadership, and responsibility.
          </p>

          <p>
            Our programs are designed to be practical, inspirational, and transformational—bridging the gap between
            potential and achievement. Through mentorship, workshops, leadership initiatives, and community engagement,
            we provide a supportive environment where young men can grow and lead with confidence.
          </p>

          <div className="p-6 bg-blue-100 border-l-4 border-blue-500 rounded-md italic text-blue-800 shadow-sm">
            &ldquo;We don&rsquo;t just guide young men — we build future leaders with purpose, direction, and strength.&ldquo;   
          </div>
        </div>
      </div>
    </div>
  );
}
