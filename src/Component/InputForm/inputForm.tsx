interface InputForm {
  Submit : (e:React.FormEvent<HTMLFormElement>) => void;
  input:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTimeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  time:string | number;
}

import "../InputTask/InputTask.css";
const InputForm = ({Submit, input, onChange, inputTimeHandler, time}:InputForm) => {
  return (
    <>
      <form onSubmit={Submit} className="inputForm">
            <div className=" mb-3">
              <input
                type="text"
                className="form-control taskInput border-0 border-bottom bg-transparent text-white"
                id="exampleInputEmail1"
                value={input}
                onChange={onChange}
                aria-describedby="emailHelp"
                placeholder="Name Your Task"
                required
              />
            </div>
            <div className="col-auto">
              <input
                type="number"
                className="form-control numberInput mb-3 border-0 border-bottom bg-transparent text-white"
                max={25}
                value={time}
                onChange={inputTimeHandler}
                id="validationTooltip01"
                placeholder="Specify Time for task in mins"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Submit
            </button>
          </form>
    </>
  )
}

export default InputForm
