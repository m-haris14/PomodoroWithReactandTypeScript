import { MdOutlineAutoDelete } from "react-icons/md";
import { TbClockEdit } from "react-icons/tb";

interface Card {
  id:number;
  task:string;
  countDown:number;
  del:(todoTask:number) => void;
  viewTask:any;
  onEdit:(id:Number) => void;
}
const Card = ({ id, task, countDown, del, viewTask, onEdit}:Card) => {
  return (
    <>
      <div className="card rounded-0" key={id}>
        <div className="card-body border border-0 text-center">
          <div className="cardText" onClick={viewTask}>
            <h3 className="card-title text-dark text-center m-0">{task}</h3>
          </div>
          <h2 className="stopwatch">{countDown}: 00</h2>
          <div className="cardButtons d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-danger delbutton"
              data-bs-toggle="modal"
              data-bs-target={`#model-${id}`}
            >
              <MdOutlineAutoDelete size={20} />
            </button>
            <div className="modal" id={`model-${id}`} tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body fs-5 text-danger pb-0">
                    <p>
                      This action will permanently remove this task, do you want
                      to go with this?
                    </p>
                  </div>
                  <div className="d-flex justify-content-end m-3 gap-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-bs-dismiss="modal"
                      onClick={()=>del(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline-warning editButton "
              onClick={()=>onEdit(id)}
            >
              <TbClockEdit size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
