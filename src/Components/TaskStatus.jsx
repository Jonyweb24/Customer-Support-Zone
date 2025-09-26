// const TaskStatus = ({ title, tasks, onComplete }) => (
//   <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     {tasks.length === 0 ? (
//       <p className="text-gray-500 font-xsm ">Select a ticket to add to task.</p>
//     ) : (
//       tasks.map((task, index) => (
//         <div
//           key={index}
//           className="bg-white p-2 mb-2 rounded flex justify-between items-center"
//         ><p className="text-gray-500 font-xsm ">No resolved task yet.</p>
//           <span>{task.title}</span>
//           {title === "In Progress" && (
//             <button
//               className="bg-blue-500 text-white px-2 py-1 rounded"
//               onClick={() => onComplete(task)}
//             >
//               Complete
//             </button>
//           )}
//         </div>
//       ))
//     )}
//   </div>
// );

// export default TaskStatus;

const TaskStatus = ({ title, tasks, onComplete }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
    <h3 className="text-xl font-bold mb-2">{title}</h3>

    {tasks.length === 0 ? (
      <p className="text-gray-500 text-sm">Select a ticket to add to task status.</p>
    ) : 
    
    (
      tasks.map((task, index) => (
        <div
          key={index}
          className="bg-white p-3 mb-3 rounded-lg shadow flex flex-col gap-2"
        >
          <span className="font-semibold text-gray-800">{task.title}</span>
      
          {title === "In Progress" && (
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
              onClick={() => onComplete(task)}
            >
              Complete
            </button>
          )}
        </div>
      ))
    )}
  </div>
);

export default TaskStatus;
