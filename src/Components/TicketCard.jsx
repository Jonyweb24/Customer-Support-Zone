
// import React from "react";
// function TicketCard({ ticket, onAdd, onComplete }) {
//   return (
    
    
//    <div>
    
//      <div className="border p-4 rounded shadow bg-white mt-10px">
      
//       <div className="flex justify-between gap-20px">
//             <div> <h2 className="font-bold text-lg">{ticket.title}</h2></div>
//             <div> <p className="bg-green-400 rounded-lg"> open</p> </div>
//       </div>
      
//       <p className="text-black">{ticket.description}</p>
//       <p className="text-sm text-gray-500">
//         <span className="font-semibold">Customer:</span> {ticket.customer}
//       </p>
//       <p className="text-sm">
//         <span className="font-semibold">Priority:</span> {ticket.priority}
//       </p>
//       <p className="text-sm">
//         <span className="font-semibold">Status:</span> {ticket.status}
//       </p>

      
//       {ticket.status === "Open" && (
//         <button
//           className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => onAdd(ticket)}
//         >
//           {/* Move to In Progress */}
//         </button>
//       )}

//       {ticket.status === "In Progress" && (
//         <button
//           className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//           onClick={() => onComplete(ticket)}
//         >
//           Mark as Resolved
//         </button>
//       )}

//       {ticket.status === "Resolved" && (
//         <p className="mt-2 text-green-600 font-semibold"> Resolved</p>
//       )}
//       {ticket.status ==="Resolved"  && (
//     <button className="mt-2 px-3 py-1 bg-green-300 text-white rounded hover:bg-green-600"
//      onClick={() => onComplete(ticket)} >
//       Remove
//     </button>
//   )}

      
//     </div>
//    </div>
//   );
// }

// export default TicketCard;
 
// import React from "react";

// function TicketCard({ ticket, onAdd }) {
//   const handleCardClick = () => {
//     if (ticket.status === "Open") {
//       onAdd(ticket);
//     }
//   };

//   return (
//     <div
//       className="border p-4 rounded-lg shadow bg-white cursor-pointer hover:shadow-lg transition-all"
//       onClick={handleCardClick}
//     >
//       <div className="flex justify-between items-center flex-wrap">
//         <h2 className="font-bold text-lg">{ticket.title}</h2>
//         <p
//           className={`px-3 py-1 rounded-lg text-sm font-semibold ${
//             ticket.status === "Open"
//               ? "bg-green-400 text-white"
//               : ticket.status === "In Progress"
//               ? "bg-yellow-300 text-black"
//               : ""
//           }`}
//         >
//           {ticket.status === "Open" || ticket.status === "In Progress"
//             ? ticket.status
//             : ""}
//         </p>
//       </div>

//       <p className="text-black mt-2">{ticket.description}</p>
//       <p className="text-sm text-gray-500 mt-1">
//         <span className="font-semibold">Customer:</span> {ticket.customer}
//       </p>
//       <p className="text-sm mt-1">
//         <span className="font-semibold">Priority:</span> {ticket.priority}
//       </p>
//     </div>
//   );
// }

// export default TicketCard;

import React from "react";

function TicketCard({ ticket, onAdd }) {
  const handleCardClick = () => {
    if (ticket.status === "Open") {
      onAdd(ticket);
    }
  };

  return (

    <div
      className="border p-4 rounded-lg shadow bg-white cursor-pointer hover:shadow-lg transition-all"
      onClick={handleCardClick}
    > 
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-bold text-lg">{ticket.title}</h2>
        <p
          className={`px-3 py-1 rounded-lg text-sm font-semibold ${
            ticket.status === "Open"
              ? "bg-green-400 text-white"
              : ticket.status === "In Progress"
              ? "bg-yellow-300 text-black"
              : ""
          }`}
        >
          {ticket.status === "Open" || ticket.status === "In Progress"
            ? ticket.status
            : ""}
        </p>
      </div>

      <p className="text-black mt-2">{ticket.description}</p>

      <p className="text-sm text-gray-500 mt-1">
        <span className="font-semibold">Customer:</span> {ticket.customer}
      </p>
      <p className="text-sm mt-1">
        <span className="font-semibold">Priority:</span> {ticket.priority}
      </p>
      <div className=" flex justify-center items-center mb-0">
  <span
    className={`mb-0 justify-center rounded-sm  text-sm font-semibold ${
      ticket.priority === "High"
        ? "bg-red-300 text-white"
        : ticket.priority === "Medium"
        ? "bg-yellow-300 text-black"
        : "bg-green-300 text-white"
    }`}
  >
    {ticket.priority}
  </span>
</div>

{/* Bottom-right date */}
<div className="flex justify-end mt-2">
  <p className="text-xs text-gray-400">
    {new Date(ticket.createdAt || ticket.date).toLocaleDateString()}
  </p>
</div>

    </div>
    
  );
}

export default TicketCard;

