import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';


interface TodoItem {
    id: string;
    text: string;
    completed: boolean;

}




const TodoList = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [newTodo, setNewTodo] = useState('');


    const addTodo = () => {
        if (newTodo !== '') {
            const newID = crypto.randomUUID();
            const newTodoItem: TodoItem = {
                id: newID,
                text: newTodo,
                completed: false
            };
            setTodos([...todos, newTodoItem])
            setNewTodo('')


        }
    }

    const removeTodo = (id: string) => {
        const updateTodos = todos.filter((todo) => todo.id != id)
        setTodos(updateTodos)
    }


    const toggleComplete = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const editTodo = (id: string, newText: string) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: newText };

            }
            return todo;
        })
        setTodos(updateTodos)
    }
    return (
        <>
            <Container >
                <Row>
                    <Col sm></Col>
                    <Col sm> <h1 className='display-3'>Todo App</h1></Col>
                    <Col sm></Col>
                </Row>
            </Container>
            <Container >
                <Form>
                    <Row className="align-items-center">
                        <Col>
                            <Form.Control placeholder='Todo Today' value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)} >

                            </Form.Control>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="button" onClick={addTodo}>Add Todo</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Container>
                <ListGroup>
                    {todos.map((todo) => (
                        <ListGroup.Item key={todo.id}>
                            <Container>
                                <Row>
                                    <Col>
                                        <input
                                            type='Checkbox'
                                            aria-label="Checkbox for following text input"
                                            checked={todo.completed}
                                            onChange={() => toggleComplete(todo.id)}
                                        /></Col>
                                    <Col xs={9}>  
                                    <p className='fs-ุ'><span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span></p>
                                    </Col>
                                    <Col><Button type='button' onChange={() => editTodo(todo.id, prompt("Edit Todo?", todo.text) || todo.text)}>Edit</Button></Col>
                                    <Col><Button type='button' variant='danger' onClick={() => removeTodo(todo.id)}>Remove</Button></Col>
                                </Row>
                            </Container>

                        </ListGroup.Item>

                    ))}

                </ListGroup>


            </Container>


        </>
    )
}

export default TodoList
