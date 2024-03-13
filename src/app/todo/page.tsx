import TodoTable from '../../../components/todoTable/page';
import Header from '../../../components/header/page';

/**
 * Demo page
 * @return {JSX.Element}
 */
function Demo(): JSX.Element {
  return (
    <div className="p-5 bg-gray-300  min-height: 100vh">
      <Header />
      <TodoTable />
    </div>
  );
}

export default Demo;
