function AddItem() {
  return (
    <>
      <div className=" m-4 flex justify-evenly shadow-xl p-6">
        {/* <button className=" p-4 bg-gradient-to-l from-cyan-500 to-blue-500 w-60 rounded-md ">
          Add Task
        </button> */}
        <label>Add Details</label>
        <input
          type="text"
          placeholder="id"
          className="shadow-md m-3  hover:border-gray-500"
        />
        <input type="text" placeholder="title" className="shadow-md m-3" />
        <input type="text" placeholder="date" className="shadow-md m-3" />
      </div>
    </>
  );
}

export default AddItem;
