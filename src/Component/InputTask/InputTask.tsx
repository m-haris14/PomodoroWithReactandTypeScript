import React, { useState, useEffect } from "react";
import "./InputTask.css";
import InputForm from "../InputForm/inputForm";
import Card from "../Cards/card";
import SingleTask from "../singleTask/singleTask";

interface todo{
  id:number;
  todoTask: string;
  time:number;
  filter?:any;
}

const InputTask = () => {
  const [input, setInput] = useState<string>("");
  const [time, setTime] = useState<number | string >("");
  const [todo, setTodo] = useState<any>([]);
  const [edit, setEdit] = useState<number | string >("");
  const [path, setPath] = useState<string>("addTask");
  const [tos, setTos] = useState<any>({});
  const [show, setShow] = useState<string>("pomodoro");
  const [active, setActive] = useState<string>("task");

  useEffect(() => {
    const stored = localStorage.getItem("Todo");
    if (stored) {
      setTodo(JSON.parse(stored));
    }
  }, []);

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = [...todo, { id: Date.now(), todoTask: input, time: time }];
    localStorage.setItem("Todo", JSON.stringify(newTodo));
    setTodo(newTodo);
    setPath("view");
    setInput("");
    setTime("");
  };
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const inputTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  const deleteTask = (taskId:number) => {
    setTodo((todo:todo) => {
      return todo.filter((del:todo) => {
        return del.id !== taskId;
      });
    });
    localStorage.setItem("Todo", JSON.stringify(todo));
  };
  const editTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value);
  };
  const editTodo = (id:number) => {
    setTodo(
      todo.map((tos:todo) => {
        if (tos.id == id) {
          return { ...tos, time: edit };
        } else {
          return tos;
        }
      })
    );
    localStorage.setItem("Todo", JSON.stringify(todo));
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPath("view");
  };

  const editTask= (id:Number) => {
    setPath("oneTask");
    setShow("edit");
    setActive("edit")
    setTodo(
      todo.map((tos:todo) => {
        if (tos.id == id) {
          return { ...tos, time: edit };
        } else {
          return tos;
        }
      })
    );
    localStorage.setItem("Todo", JSON.stringify(todo));
  }

  const AddTask = () => {
    setPath("addTask");
  };

  const viewTask = (id:number) => {
    setPath("oneTask");
    setTos(
      todo.filter((tos:todo) => {
        if (tos.id == id) {
          return tos;
        }
      })
    );
  };

  return (
    <>
      <div className="inputWrapper ">
        {path === "addTask" && (
          <InputForm
            Submit={submitHandler}
            input={input}
            onChange={inputTextHandler}
            inputTimeHandler={inputTimeHandler}
            time={time}
          />
        )}
        {path === "view" && (
          <div className="cardWrapper">
            <button className="btn btn-warning mb-3 w-100" onClick={AddTask}>
              Add Task
            </button>
            {todo.map((t:todo) => {
              return (
                <Card
                  key={t.id}
                  id={t.id}
                  task={t.todoTask}
                  countDown={t.time}
                  viewTask={() => viewTask(t.id)}
                  del={() => {
                    deleteTask(t.id);
                  }}
                  onEdit={editTask}
                />
              );
            })}
          </div>
        )}
        {path === "oneTask" && (
          <SingleTask
            task={tos}
            onSubmit={handleEditSubmit}
            editTime={editTime}
            onClick={editTodo}
            show={show}
            setShow={setShow}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
    </>
  );
};

export default InputTask;
