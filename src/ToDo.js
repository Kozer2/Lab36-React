import Badge from 'react-bootstrap/Badge';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

const list = [
    {
        "id": 1,
        "title": "Walk the dogs",
        "difficulty": 1,
        "assignedTo": "Ben",
        "completed": false
      },
      {
        "id": 2,
        "title": "Take the dogs out",
        "difficulty": 1,
        "assignedTo": "Ben",
        "completed": false
      },
      {
        "id": 3,
        "title": "Pet the dogs",
        "difficulty": 2,
        "assignedTo": "Ben",
        "completed": false
      },
      {
        "id": 4,
        "title": "Feed the dogs",
        "difficulty": 100,
        "assignedTo": "Ben",
        "completed": true
      }
];

export default function ToDo(){
  const incompleteCount = list.filter(todo => !todo.completed).length;

  return(
    <>
    
     <div className="wrapper">
      <h1> To Do List Manager <Badge variant="secondary">({incompleteCount})</Badge></h1>
      </div>
      <ToDoForm />
      {list.map(item => (
          <ToDoItem todo={item} />
      ))}
    </>
  );
}

/* <div className="wrapper">
      <h1>To Do List Manager (2)</h1>
      </div> */

