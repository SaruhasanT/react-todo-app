import Todo from "./Todo";
const TodoContainer = ({ list, setList }) => {
  return (
    <div className='todo-container'>
      {list.map((item, index) => {
        return (
          <Todo
            list={list}
            setList={setList}
            index={index}
            key={item.id}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
export default TodoContainer;
