import {useState} from "react";

function ModifyList() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Edit List Settings
      </button>
 
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modify List Settings</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                                  <form>
                      Edit List Name<br/> 
                      <div className="input-group mb-3">
                        <input type="listname" className="form-control" id="listname" onChange={console.log("Edit name")} />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-warning"  disabled>Create List</button>
                        </div>
                      </div>
                      <div className="input-group mb-3"> 
                        <input type="name" className="form-control" id="name" placeholder="Enter name" onChange={console.log("edit helper")}/><br/>
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-warning ">Add Helper</button>
                          </div>
                      </div>
                    </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
  
export default ModifyList;