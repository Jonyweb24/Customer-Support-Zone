
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./Components/Navbar";
// import Banner from "./Components/Banner";
// import TicketCard from "./Components/TicketCard";
// import TaskStatus from "./Components/TaskStatus";
// import Footer from "./Components/Footer";

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [inProgress, setInProgress] = useState([]);
//   const [resolved, setResolved] = useState([]);

//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => setTickets(data));
//   }, []);

//   // Move ticket → In-Progress
//   const handleAddInProgress = (ticket) => {
//     if (inProgress.includes(ticket)) {
//       toast.warning("Ticket already in progress!");
//       return;
//     }
//     setInProgress([...inProgress, ticket]);
//     toast.success("Ticket moved to In-Progress!");
//   };

//   // Move ticket → Resolved
//   const handleCompleteTask = (ticket) => {
//     setInProgress(inProgress.filter((t) => t !== ticket));
//     setResolved([...resolved, ticket]);
//     toast.success("Ticket completed and moved to Resolved!");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Navbar />

//       {/* Banner: dynamic counts side by side */}
//       <Banner inProgress={inProgress.length} resolved={resolved.length} />

//       {/* Main Section: Cards on left, Task Status on right */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         {/* Left: Ticket Cards */}
//         <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {tickets.map((ticket, index) => (
//             <TicketCard
//               key={index}
//               ticket={ticket}
//               onAdd={() => handleAddInProgress(ticket)}
//             />
//           ))}
//         </div>

//         {/* Right: Task Status stacked */}
//         <div className="md:col-span-1 flex flex-col gap-4">
//           <TaskStatus
//             title="In Progress"
//             tasks={inProgress}
//             onComplete={handleCompleteTask}
//           />
//           <TaskStatus
//             title="Resolved"
//             tasks={resolved}
//             onComplete={() => {}}
//           />
//         </div>
//       </div>

//       <Footer />
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./Components/Navbar";
// import Banner from "./Components/Banner";
// import TicketCard from "./Components/TicketCard";
// import TaskStatus from "./Components/TaskStatus";
// import Footer from "./Components/Footer";

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [inProgress, setInProgress] = useState([]);
//   const [resolved, setResolved] = useState([]);

//   // Fetch tickets from JSON
//   useEffect(() => {
//     fetch("/tickets.json")
//       .then((res) => res.json())
//       .then((data) => setTickets(data))
      
//   }, []);

//   // Move ticket → In Progress
//   const handleAddInProgress = (ticket) => {
//     if (inProgress.some((t) => t === ticket)) {
//       toast.warning("Ticket already in progress!");
//       return;
//     }

//     setInProgress([...inProgress, ticket]);
//     toast.success("Ticket moved to In Progress!");

//     // Remove from tickets array so it disappears from main card list
//     setTickets((prev) => prev.filter((t) => t !== ticket));
//   };

//   // Complete ticket → mark as Resolved
//   const handleCompleteTask = (ticket) => {
//     // Remove from inProgress
//     setInProgress((prev) => prev.filter((t) => t !== ticket));

//     // Add to resolved
//     setResolved([...resolved, ticket]);

//     toast.success("Ticket completed and moved to Resolved!");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Navbar />

//       {/* Banner: counts for in-progress & resolved */}
//       <Banner inProgress={inProgress.length} resolved={resolved.length} />

//       {/* Main Section: Cards left, TaskStatus right */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         {/* Left: Ticket Cards */}
//         <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {tickets.map((ticket, index) => (
//             <TicketCard
//               key={index}
//               ticket={ticket}
//               onAdd={() => handleAddInProgress(ticket)}
//             />
//           ))}
//         </div>

//         {/* Right: Task Status */}
//         <div className="md:col-span-1 flex flex-col gap-4">
//           <TaskStatus
//             title="In Progress"
//             tasks={inProgress}
//             onComplete={handleCompleteTask}
//           />
//           <TaskStatus
//             title="Resolved"
//             tasks={resolved}
//             onComplete={() => {}}
//           />
//         </div>
//       </div>

//       <Footer />
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// }

// export default App;
// 3rd
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import TicketCard from "./Components/TicketCard";
import TaskStatus from "./Components/TaskStatus";
import Footer from "./Components/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Fetch tickets from JSON
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // Move ticket → In Progress
  const handleAddInProgress = (ticket) => {
    if (inProgress.some((t) => t.id === ticket.id)) {
      toast.warning("Ticket already in progress!");
      return;
    }

    setInProgress([...inProgress, { ...ticket, status: "In Progress" }]);
    toast.success("Ticket moved to In Progress!");

    // Remove from tickets array
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
  };

  // Complete ticket → mark as Resolved
  const handleCompleteTask = (ticket) => {
    // Remove from inProgress
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));

    // Add to resolved
    setResolved([...resolved, { ...ticket, status: "Resolved" }]);

    toast.success("Ticket completed and moved to Resolved!");
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />

      
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <h2 className="col-span-3" >Customer Tickets</h2>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id} 
              ticket={ticket}
              onAdd={() => handleAddInProgress(ticket)}
            />
          ))}
        </div>

        <div className="md:col-span-1 flex flex-col gap-4">
          <TaskStatus
            title="In Progress"
            tasks={inProgress}
            onComplete={handleCompleteTask}
          />
          <TaskStatus title="Resolved" tasks={resolved} onComplete={() => {}} />
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
    
  );
}

export default App;
