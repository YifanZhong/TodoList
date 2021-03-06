import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';
import store from './store/index';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        //console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <div style = {{marginTop: '10px', marginRight: '10px'}}>
                <Input
                    value = {this.state.inputValue}
                    placeholder = 'todo_infomation'
                    style = {{width: '300px', marginRight: '10px'}}
                    onChange = {this.handleInputChange}
                />
                <Button type="primary" onClick = {this.handleBtnClick}>submit</Button>
                <List
                    style = {{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                    <List.Item onClick = {this.handleItemDelete.bind(this, index)}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                    )}
                />
            </div>
        )
    }
    handleInputChange(e){
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action);

    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = {
            type: ADD_TODO_ITEM
        };
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = {
            type: DELETE_TODO_ITEM,
            index
        };
        store.dispatch(action);

    }
}


export default TodoList;
