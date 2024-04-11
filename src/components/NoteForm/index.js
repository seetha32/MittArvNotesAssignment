import { Component } from "react";

class NoteForm extends Component{
    state ={
        title:"",
        description: "",
        imageOrVideoLink: "",
    }

    onSubmitNote=(event)=>{
        this.setState({
            title: event.target.value,
            describe: event.target.value,
            imageOrVideoLink: event.target.value,
        })
    }

    render(){
        const {title, description, imageOrVideoLink} =this.state
        return(
            <form onSubmit={this.onSubmitNote}>
                <label>Title: </label>
                <input type="text" value={title} />
                <label>Description:</label>
                <textarea value={description} />
                <label>Image/Video Link:</label>
                <input type="text" value={imageOrVideoLink} />
            </form>
        )
    }
}

export default NoteForm;