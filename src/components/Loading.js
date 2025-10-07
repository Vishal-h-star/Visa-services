import React from "react"

const Loading = () => {  

  return (
    <>
      <div className="page-loader">
        <span></span>
      </div>
    </>
  );
};

export default Loading;


// import React, { useState, useEffect } from "react";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";

// const Loading = () => {
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     setLoader(true);
//     setTimeout(() => {
//       setLoader(false);
//     }, 5000);
//   }, []);

//   const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
//   return (
//     <>
//       <ClipLoader color={"#ff0"} loading={loader} css={override} size={150} />
//     </>
//   );
// };

// export default Loading;
