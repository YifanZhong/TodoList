import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button} from 'antd';

class TodoList extends Component {
    render(){
        return (
            <div style = {{marginTop: '10px', marginRight: '10px'}}>
                <Input
                    placeholder = 'todo_infomation'
                    style = {{width: '300px', marginRight: '10px'}}
                />
                <Button type="primary">submit</Button>
            </div>
        )
    }
}


export default TodoList;
