// import React from "react";
// const total = 500;
// const buttons = [];
// function Pagination({ limit = 20, updatePage }) {
//   function createButtons() {
//     const totalBtn = Math.ceil(total / limit);
//     for (let i = 0; i < totalBtn; i++) {
//       buttons.push(
//         <button key={i} value={i} onClick={updatePage}>
//           {i + 1}
//         </button>
//       );
//     }
//     return buttons;
//   }
//   return <div>{createButtons()}</div>;
// }

// export default Pagination;

import React from "react";

function Pagination({ totalItems, itemsPerPage, currentPage, updatePage }) {
  const totalBtn = Math.ceil(totalItems / itemsPerPage);

  function handleClick(newPage) {
    if (newPage !== currentPage) {
      updatePage(newPage);
    }
  }

  return (

<div className="acomodo"> 
<div className="botones">



    <div className="a">
      {Array.from({ length: totalBtn }, (_, index) => (
          <button
          className="button"
          key={index}
          value={index + 1}

          onClick={() => handleClick(index + 1)}
          >
          {index + 1}
        </button>
      ))}
    </div>
      </div>
      </div>
  );
}


export default Pagination;


















