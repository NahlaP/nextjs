

"use client";

import { useParams } from "next/navigation";
import productList from "@/app/components/product/productData"; // or correct path
import Image from "next/image";

export default function ProductDetailPage() {
  const { slug } = useParams();

  const product = productList.products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        Product not found.
      </div>
    );
  }

//   return (
//     <div className="p-8">
//       <div className="relative w-full h-[400px] mb-6">
//         <Image
//           src={product.images[0]}
//           alt={product.name}
//           fill
//           className="object-contain rounded"
//           sizes="(max-width: 768px) 100vw, 50vw"
//         />
//       </div>

//       <h1 className="text-2xl font-bold mb-2 text-center">{product.name}</h1>
//       <p className="text-gray-600 mb-2 text-center">{product.brand}</p>
//       <p className="text-gray-800 text-xl font-bold mb-4 text-center">${product.price}</p>

//       <button className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//             Add to Cart
//           </button>
//     </div>
//   );
return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8 items-start ">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 h-[550px]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
  
        {/* Right Side - Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.brand}</p>
          <p className="text-gray-800 text-xl font-bold mb-4">${product.price}</p>
  
          <div className="flex justify-start">
            <button className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}
