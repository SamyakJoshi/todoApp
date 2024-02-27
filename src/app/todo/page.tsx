
import TodoTable from "../../../components/todoTable/page";
import Header from "../../../components/header/page";
import NavigationBar from "@/components/navigationBar/page";

function Demo() {
  return (
    <div className="w-screen h-screen bg-gradientBackground">
      <Header />
      <NavigationBar/>
      <TodoTable />
    </div>
  );
}

export default Demo;
