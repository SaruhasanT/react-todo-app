import { useState } from "react";
const Todo = ({ text, setList, list, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  let content;
  if (!isEditing) {
    content = (
      <div className='todo'>
        <p className={`${list[index].done ? "todo-text done" : "todo-text"}`}>
          {text}
        </p>
        <div className='buttons'>
          <button
            className='done-btn'
            onClick={() => {
              if (list[index].done !== true) {
                setList(
                  list.map((l) => {
                    if (l.id === list[index].id) {
                      return { ...l, done: true };
                    } else {
                      return l;
                    }
                  })
                );
              } else {
                setList(
                  list.map((l) => {
                    if (l.id === list[index].id) {
                      return { ...l, done: false };
                    } else {
                      return l;
                    }
                  })
                );
              }
            }}>
            Done
          </button>
          <button
            className='edit-btn'
            onClick={() => {
              setIsEditing(true);
            }}>
            Edit
          </button>
          <button
            className='delete-btn'
            onClick={() => {
              setList(
                list.filter((a) => {
                  return a.id !== list[index].id;
                })
              );
            }}>
            Delete
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className='todo'>
        <input
          type='text'
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
        <button
          className='save-btn'
          onClick={() => {
            if (editText !== "") {
              setIsEditing(false);
              setList(
                list.map((l) => {
                  if (l.id === list[index].id) {
                    return { ...l, text: editText };
                  } else {
                    return l;
                  }
                })
              );
            }
          }}>
          Save
        </button>
        <button
          className='edit-delete-btn'
          onClick={() => {
            setList(
              list.filter((a) => {
                return a.id !== list[index].id;
              })
            );
          }}>
          Delete
        </button>
      </div>
    );
  }
  return content;
};

export default Todo;
