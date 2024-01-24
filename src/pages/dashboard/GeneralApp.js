import React, { Suspense } from "react";

const GeneralApp = () => {
  return (
    <>
      <Suspense fallback="loading...">Chat App</Suspense>
    </>
  );
};

export default GeneralApp;
