import React from "react";

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center W_LIMIT">
      <div className="mx-auto flex max-sm:flex-col items-center justify-between">
        {/* Left column - Text content */}
        <div className="w-1/2 flex items-center justify-center text-center">
          <h1 className="text-[60px] lg:text-[70px] max-sm:text-[50px] text-nowrap">
            Bitch dont <br />
            kill <br /> 
            my vibe
          </h1>
        </div>

        {/* Right column - Image */}
        <div className="w-1/2 flex justify-center items-center rotate-[-40deg]">
        <img src="/ita.png" alt="Platform showcase"
          className="w-[70%] h-auto rounded-lg animate-shake transform -scale-x-100" />

        </div>
      </div>
    </div>
  );
}

export default Home;
