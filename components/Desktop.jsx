/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import itachigif from "../media/itachi.gif";

function Desktop() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  });

  return (
    <div>
      <div className="bg-desktop fixed h-full w-full bg-center object-cover bg-no-repeat scale-150 blur-sm brightness-50" />
      <div
        data-aos="fade-up"
        className="flex flex-col items-center max-w-screen-2xl mx-auto px-14 pt-14 pb-20 lg:flex-row justify-center lg:space-x-24 lg:mt-10"
      >
        <div className="text-white z-10 text-lg flex flex-col space-y-5 costum font-desktop lg:text-2xl">
          <p className="text-4xl lg:text-5xl xl mb-6">
            Welcome to my porfolio...
          </p>
          <p>
            I have been doing frontend development for over 2 years with React
            as a main Javascript library.
          </p>
          <p>
            There are a lot of thinks that i love...
            <br /> food, music and movies. As you can guess from the desktop
            wallpaper, my favorite animated series is{" "}
            <span className="font-bold italic text-2xl lg:text-3xl">
              Naruto
            </span>
            .
          </p>
        </div>
        <div className="mt-16 mx-auto min-w-fit lg:mt-0">
          <Image
            className="rounded-full"
            src={
              "https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/124645399_2750002415318421_7230889274016311086_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PXRDATxpaskAX9V8Zvm&_nc_ht=scontent.fprg5-1.fna&oh=00_AT-f4ZjApmcOm07ZlL8uXHX_2fuOgRP_PhaWNt2J5qKS0Q&oe=621F4A07"
            }
            height={225}
            width={225}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="fixed bottom-10 z-50 left-5 sm:left-10">
        <Image
          src={itachigif}
          height={96}
          width={70}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Desktop;
