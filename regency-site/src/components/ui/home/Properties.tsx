"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaBed, FaBath, FaRegSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { properties } from "../../../../data/properties";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="bg-white rounded-md shadow-xl overflow-hidden">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 md:h-60 lg:h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-indigo-900">{property.name}</h3>
      <p className="text-gray-600">{property.location}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">
          {property.price}
        </span>
        <Link
          href={`/Property/${property.id}`}
          className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
      <div className="mt-4 flex justify-between text-gray-600">
        <div className="flex items-center">
          <FaBed className="text-indigo-900 mr-1" />
          <span>{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center">
          <FaBath className="text-indigo-900 mr-1" />
          <span>{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center">
          <FaRegSquare className="text-indigo-900 mr-1" />
          <span>{property.squareFeet} sq ft</span>
        </div>
      </div>
    </div>
  </div>
);

export default function RealEstateShowcase() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-32 ">
      <div className="relative flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900">
          Our Properties
        </h1>
        <Link
          href="/Property"
          className="bg-indigo-900 content-center justify-center text-white px-4 py-2 sm:px-1 sm:py-2 text-sm sm:text-base rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 lg:px-4"
        >
          View All Properties
        </Link>
      </div>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mb-8"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevRef}
          className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 text-indigo-900 bg-transparent text-4xl px-4 py-2 rounded-md shadow-lg transition duration-300"
        >
          &lt;
        </button>
        <button
          ref={nextRef}
          className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 text-indigo-900 bg-transparent text-4xl px-4 py-2 rounded-md shadow-lg transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
