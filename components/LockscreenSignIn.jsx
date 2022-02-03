import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

function LockscreenSignIn() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
    }, 1000);

    if(count === 3){
        router.push("/desktop")
    }
  }, [count]);
  return (
    <div>
      <div className="bg-windows10_lockscreen fixed h-full w-full bg-center object-cover scale-105 blur-sm" />
      <div className="text-white absolute mx-auto left-1/2 translate-x-[-50%] top-[50%] translate-y-[-50%] flex items-center flex-col space-y-6">
        <div className="text-3xl font-light">Welcome...</div>
        <TailSpin color="white" height={50} width={50} />
      </div>
    </div>
  );
}

export default LockscreenSignIn;
