import Image from "next/image";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Books by Dr. Timothy Fairley</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">
        Explore Dr. Fairley impactful books designed to guide, motivate, and develop boys, teenagers, and men through every stage of life.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Book 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:scale-105">
          <Image
            src="/book1.jpg"
            alt="Book Title 1"
            width={200}
            height={300}
            className="rounded-md mx-auto"
          />
<<<<<<< HEAD
          <h3 className="text-xl font-bold text-gray-800 mt-4">The Brooks Search</h3>
          <p className="text-gray-600 mt-2 text-sm">
            There is an East Wind Blowing is a co-authored book that tells the story of God's favor through the crippling effects of abuse..
          </p>
          <Link href="https://www.amazon.com/There-East-Wind-Blowing-Brooks/dp/B08LG7YS23/ref=sr_1_1?crid=1DV3V7222PCWA&dib=eyJ2IjoiMSJ9.zRJgmgPU3blZfFSHqjX0MCnkZhVa_BprOO9M_rSRp3bGjHj071QN20LucGBJIEps.D8vaF_IuFdVpK2_Lt6hLLD3VlX2cefGJonCGuhqgVmo&dib_tag=se&keywords=There+is+an+east+wind+blowing&qid=1742930478&sprefix=there+is+an+east+wind+blowin%2Caps%2C107&sr=8-1" target="_blank">
=======
          <h3 className="text-xl font-bold text-gray-800 mt-4">The Brooks' Search</h3>
          <p className="text-gray-600 mt-2 text-sm">
            There is an East Wind Blowing is a co-authored book that tells the story of God's favor through the crippling effects of abuse.
          </p>
          <Link href="https://www.amazon.com/There-East-Wind-Blowing-Brooks/dp/B08LG7YS23/ref=sr_1_1?crid=GATK14PPFLXG&dib=eyJ2IjoiMSJ9.sMt_aqrUPo_DIETLuEM-LFW02fj_UVeaNCgs9VWe1yabMqwRD5WU_q7-GrWBA8MAPCdOgSJQjyoJOI1FPzLuX856oXNi6J2FDDpUqgGwHfA.wgZbjvrzKbUmM4MLLNGMf85VyG06yfgx_x_rSBXS4oM&dib_tag=se&keywords=There+is+an+east+wind+blowing&qid=1742931099&s=books&sprefix=there+is+an+east+wind+blowing%2Cstripbooks%2C90&sr=1-1" target="_blank">
>>>>>>> test
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Buy on Amazon
            </button>
          </Link>
        </div>

        {/* Book 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:scale-105">
          <Image
            src="/book2.jpg"
            alt="Book Title 2"
            width={200}
            height={300}
            className="rounded-md mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">The Lost Raven</h3>
          <p className="text-gray-600 mt-2 text-sm">
            My ancestral story is of a different kind. Imagine if what you have been told concerning your birth is in conflict with reality.
          </p>
          <Link href="https://www.amazon.com/THERE-EAST-WIND-BLOWING-RAVEN/dp/B0BRNYLY59" target="_blank">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Buy on Amazon
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
