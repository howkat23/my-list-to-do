import { Component } from "react";
import todolist from './todolist.jpg';
import study from './study.jpg';

export class MyList extends Component {
    state = {
        userInput: "",
        myList: []
    }

    onChangeEvent(e) {
        this.setState ({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        } else {
            let listArray = this.state.myList;
            listArray.push(input);
            this.setState({myList: listArray, userInput: ''})

        }
    }

deleteItem() {
    let listArray = this.state.myList;
    listArray = [];
    this.setState({myList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you plan for today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="Add">Add</button>
            </div>
            <ul>
                {this.state.myList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index} alt="check-box">
                    <img src={todolist} width="40px"/>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem(this.state.userInput)} className="delete">Delete</button>
</div>
            </form>
        </div>
    )
}
}