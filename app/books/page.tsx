import Image from "next/image";

const books = [
  {
    title: "Book Title 1",
    description: "A brief description of Book 1 goes here.",
    image: "/book1.jpg", // Add this image to /public folder
    buyLink: "#", // Replace with actual buy link
  },
  {
    title: "Book Title 2",
    description: "A brief description of Book 2 goes here.",
    image: "/book2.jpg",
    buyLink: "#",
  },
  {
    title: "Book Title 3",
    description: "A brief description of Book 3 goes here.",
    image: "/book3.jpg",
    buyLink: "#",
  },
];

export default function Books() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Dr. Fairleys Books</h1>
      <p className="mt-4 text-lg text-gray-600">
        Explore books written by Dr. Timothy Fairley.
      </p>

      {/* Books Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={300}
              className="rounded-md mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
            <p className="text-gray-600 mt-2">{book.description}</p>
            <a
              href={book.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
