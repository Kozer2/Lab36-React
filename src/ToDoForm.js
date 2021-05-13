import { Form, Button } from 'react-bootstrap';
import {useState} from 'react'; 

export default function ToDoForm() {
  // const [item, setItem] = useState();
    const handleSubmit = e => {
        e.preventDefault();
     
        console.log(e.target.ToDoItem.value, e.target.ToDoAssigned.value, e.target.slider.value);
        
    };
    // const handleSave = (item) => setItem(item.concat(item));
  return (
    <div className="todo-form">
      <h2>Add To Do Item</h2>
      {/* onSave={handleSave} */}
      <Form onSubmit={handleSubmit} > 
        <Form.Group controlId="AddToDo">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="ToDoItem" placeholder="Item Details" />
        </Form.Group>
        <Form.Group controlId="AssignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="ToDoAssigned" placeholder="Assignee Name" />
        </Form.Group>
        <Form.Group controlId="Difficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control type="range" min="0" max="100" step="1" name="slider"/>
        </Form.Group>
        <Button type="submit" >Add Item</Button>
      </Form>
    </div>
  );
};