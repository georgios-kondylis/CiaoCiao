import React from "react";

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center W_LIMIT mainPX">
      <div className="mx-auto flex max-sm:flex-col items-center justify-between gap-[20px]">
        {/* Left column - Text content */}
        <div className="w-1/2 flex items-center justify-center text-center">
          <h1 className="text-[60px] lg:text-[70px] max-sm:text-[50px] text-nowrap">
             Coffee so good, <br />
              it speaks <br />
              with its hands.
          </h1>
        </div>

        {/* Right column - Image */}
        <div className="w-1/2 max-sm:w-[90%] flex justify-center items-center rotate-[-40deg]">
        <img src="/ita.png" alt="Platform showcase"
          className="w-[90%] h-auto rounded-lg animate-shake transform -scale-x-100" />

        </div>
      </div>
    </div>
  );
}

export default Home;
