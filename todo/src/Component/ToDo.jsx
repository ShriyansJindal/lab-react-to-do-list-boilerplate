import React from 'react'
import "../App.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default class ToDo extends React.Component {
    constructor(){
        super()
        this.state={
            text:"",
            todolist:[]
        }
    }

  render() {
    let {textvalue, todolist} = this.state
    let handlechange=(e)=>{
        // console.log(textvalue)
        this.setState({textvalue:e.target.value})
        
        
    }
    let handleclick =()=>{
        this.setState({todolist:[...todolist,textvalue]})
        this.setState({textvalue:""})
        
    }
    // console.log(todolist)
    let handleupdate=(index)=>{
        let newVal = prompt("Enter Updated Text")
        let updateArr = todolist.map((el,i)=>{
            if(i==index){
                return newVal
            }
            else{
                return el
            }
        })
        this.setState({todolist:updateArr})

    }
    let handleDel=(index)=>{
        let uppdated = todolist.filter((el,i)=>index!=i)
        this.setState({todolist:uppdated})
    }
    return (
      <>
      <div className='container'>
      <div className='addtodo'>
        <input type="text" onChange={handlechange} placeholder='Enter Text' value={textvalue} />
        <button onClick={handleclick}>Add</button>
      </div>
      <div>
        {todolist.map((el,i)=>(
            <div key={i} className='item'>
                <p>{el}</p>
                
                <EditIcon onClick={()=>handleupdate(i)}/>
                <DeleteIcon onClick={()=>{handleDel(i)}}/>
            </div>
        ))}
      </div>
      </div>
      </>
    )
  }
}
