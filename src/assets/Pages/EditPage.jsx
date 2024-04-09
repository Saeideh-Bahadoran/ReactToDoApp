const EditPage = () => {
    return ( <>
    <h1> Edit Page</h1>

    <form action="">

    <label >
          Edit your task here: 
          <input className="EditForm"
            type="text"
            name="editTask"
            placeholder="Task Description"
            // value={taskDescription}
            // onChange={handleTaskDescriptionInput}
          />
        </label>
       
    </form>
   
    </> );
}
 
export default EditPage;