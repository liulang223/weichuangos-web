import React, { Component } from 'react';
import { List, Typography } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';
import styles from './AddList.less'
import {Form, Input} from 'antd';
export default class AddListComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        list:[],
        value:""
    }
}
componentDidMount(){
  console.log(this.props.TagList);
  
  this.setState({
    list:this.props.TagList,
  })
}
setActive(item){
  this.props.Active(item);
}
changeValue=(e)=>{
this.setState({
  value:e.target.value
})  
}
setItem(item,value){
  this.props.Item(item,value)
}
del(item){
  
  this.props.Del(item);
}
  render() {
    return (
      <div>
        <List
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item className={styles.listItem}  key={item.id}>
            <div className={item.isActive?styles.none:styles.active}><Tag color="#108ee9">{item.title}</Tag><Button color="#1890ff" onClick={()=>this.setActive(item)}>修改</Button><Button type="danger" onClick={()=>this.del(item)}>删除</Button></div>
            <div className={item.isActive?styles.active:styles.addList}><Input type="text" defaultValue={item.title} onChange={this.changeValue.bind(this)}/><Button color="#1890ff" icon="check"  shape="circle" onClick={()=>this.setItem(item,this.state.value)} className={styles.inline}></Button></div>
          </List.Item>)}

        />
      </div>
    )
  }
}