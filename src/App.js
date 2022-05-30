import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if(toDo === ""){
              console.log("err")
              alert("Field empty!")
            }else{
            setToDos([...toDos, { text: toDo, static: true }]);
            setToDo("");
            }
            // setToDos([...toDos, { id: Date.now(), text: " ", static: false }]);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={(e) => {
                    console.log("delete");
                    var ask = window.confirm("Do you want to delete the task?");
                      if (ask) {
                        const test = [...toDos];
                          test.splice(e, 1);

                          setToDos(test)
                      }else {
                        console.log("Don't delete");
                      }
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          console.log(obj.text);
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
