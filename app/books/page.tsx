import Image from "next/image";

const books = [
  {
    title: "Book Title 1",
    description: "A brief description of Book 1 goes here.",
    image: "/book1.jpg", // Ensure this image is in /public folder
    buyLink: "https://www.amazon.com/There-East-Wind-Blowing-Brooks/dp/B08LG7YS23/ref=sr_1_1?dib=eyJ2IjoiMSJ9.WHRbtFF95U3dJ7x-iJi1_dT0_q4mb01FfIfBl0qtYSAv7aKmPni1Z9xQ_M--2fbvfgRznCi0DZeYoeaufa3hXBpguKV6b5JnsW3BBuT9h8PxSglN_mfqYmqL-KveF0S82tGr8kwMU2EKKuqUoF4VBaIP2vgujYzLadqy8vojIsAqSjB_-_piRtbRj1SH3NAIL9ycuM3EQGYlNtZe3mRn-bqPgy3h63Fpi05TCyNpe6E.imGUpREF3WyqJsM5kCADMaM_ttLD-mxaaifsBszzEzs&dib_tag=se&keywords=an+east+wind+is+blowing&qid=1739941058&sr=8-1https://www.amazon.com/dp/example1", // Replace with actual Amazon link
  },
  {
    title: "Book Title 2",
    description: "A brief description of Book 2 goes here.",
    image: "/book2.jpg",
    buyLink: "https://www.amazon.com/dp/example2",
  },
  {
    title: "Book Title 3",
    description: "A brief description of Book 3 goes here.",
    image: "/book3.jpg",
    buyLink: "https://www.amazon.com/dp/example3",
  },
];

export default function Books() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Dr. Fairleys Books</h1>
      <p className="mt-4 text-lg text-gray-600">
        Click on any book to purchase it on Amazon.
      </p>

      {/* Books Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {/* Clickable Book Image */}
            <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={300}
                className="rounded-md mx-auto cursor-pointer transition-transform transform hover:scale-105"
              />
            </a>
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
