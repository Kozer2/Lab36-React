import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import Auth from './auth';

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
    
     <Container className='wrapper'>
     <Auth className="auth">Welcome Authorized User!</Auth>
     <Auth permission='create'>
      <h1> To Do List Manager <Badge variant="secondary">({incompleteCount})</Badge></h1>
      <Row>
        <Col md={6} lg={4}>
          <ToDoForm />
        </Col>
        <Col md={6} lg={8}>
          {list.map(item => (
              <ToDoItem key={item.id} todo={item} />
          ))}
        </Col>
      </Row>
      </Auth>
     </Container>
    </>
  );
}

/* <div className="wrapper">
      <h1>To Do List Manager (2)</h1>
      </div> */

