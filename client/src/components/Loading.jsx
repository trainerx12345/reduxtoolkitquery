import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center place-items-center p-5 min-h-screen">
      <div className="color-primary uppercase">Loading...</div>
      <div
        className="mx-auto inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"></div>
    </div>
  );
};

export default Loading;
