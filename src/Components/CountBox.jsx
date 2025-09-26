import Container from "./Container";


const CountBox = ({ data }) => {
  const inProgress = data.filter((element) => element.status === "In Progress");
  const resolved = data.filter((element) => element.status === "Resolved");
  // const removed = data.filter((element) => element.status === "Removed");

  return (
    <Container>
      <div className="grid grid-cols-2 gap-[20px] my-[50px]">
        <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center">
         {/* <img  src="//src/assets/vector1.png" alt="" /> */}
          <h2 className="font-bold text-[35px]">In Progress</h2>
          <p className="font-semibold text-[26px]">{inProgress.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">Resolved</h2>
          <p className="font-semibold text-[26px]">{resolved.length}</p>
        </div>
        {/* <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">Removeed</h2>
          <p className="font-semibold text-[26px]">{removed.length}</p>
        </div> */}
      </div>
    </Container>
  );
};

export default CountBox;
