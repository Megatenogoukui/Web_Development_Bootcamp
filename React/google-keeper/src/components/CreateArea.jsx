import React ,{useState} from "react";

function CreateArea() {
    const [title ,settitle] = useState("");
    const [titleArr , setTitleArr] = useState([])
    const [text ,settext] = useState("");
    const [textArr , setTextArr] = useState([])

    function handleChange(event){
      var name = event.target.name
      var value = event.target.value
      if (name === "title"){
        settitle(value)
      }
      else if(name === "content"){
       settext(value)
      }
        
    }

    function addItems(){
        setTitleArr((prev) =>{
            return [...prev,title]
            
        })
        settitle("")
        console.log(titleArr)
    }
    function noRefresh(event){
        event.preventDefault()
    }

  return (
    <div>
      <form onSubmit = {noRefresh}>
        <input onChange={handleChange} name="title" placeholder="Title" value = {title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addItems}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
