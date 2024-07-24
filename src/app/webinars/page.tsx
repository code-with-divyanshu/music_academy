"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import webinarData from "@/data/webinar.json";
import Link from "next/link";

interface Webinar {
  id: number;
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
  image: string;
  price: number;
}

function Webinars() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 bg-grid-small-white/[0.3]">
      <h1 className="text-xl md:text-6xl text-center font-sans font-bold mb-8 text-white">
        All Webinars ({webinarData.webinars.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {webinarData.webinars.map((webinar: Webinar) => (
          <CardContainer className="inter-var mx-8" key={webinar.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-300 dark:bg-black dark:border-purple-400 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {webinar.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {webinar.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={webinar.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={webinar.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now Free →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Enroll Now{" "}
                  <span className="text-purple-800">${webinar.price}</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Webinars;
