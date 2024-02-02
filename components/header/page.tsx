function Header() {
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <input type="text" placeholder="search " className="p-2"/>
      </div>
      <div>
        <img src="assets/theme.svg" className="w-8 h-8 text-primary" />
      </div>
    </div>
  );
}

export default Header;
