
"use client";
import productList from "../components/product/productData";
import Image from "next/image";
import Link from "next/link"; 


const Page = () => {
  return (
    <main className="p-8 -mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {productList.products.map((product) => (
          <div key={product.slug}>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain rounded"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Add Link around the name */}
            <Link href={`/profile/${product.slug}`}>
              <h2 className="text-lg font-semibold text-center text-black hover:underline cursor-pointer">
                {product.name}
              </h2>
            </Link>

            <p className="text-gray-500 text-center">{product.brand}</p>
            <p className="text-gray-800 font-bold mt-2 text-center">${product.price}</p>

            <div className="flex justify-center mt-4">
              <button className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
