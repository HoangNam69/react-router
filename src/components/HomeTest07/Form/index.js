import { useMemo } from "react";
import Input from "../Input";

const Form = ({ onSubmit, onChange, item, lists }) => {
  const disabled = useMemo(() => {
    return item.name === "" || item.phone === "";
  }, [item]);

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {item.id ? "Edit" : "Create"} User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Start of Input (Import) */}

            <div className="modal-body">
              <div>
                {/* Name */}
                <Input
                  id="form-name"
                  className="form-control"
                  name="name"
                  onChange={onChange}
                  lists={lists}
                  item={item}
                />
              </div>
              <div>
                {/* Phone */}
                <Input
                  id="form-name"
                  className="form-control"
                  name="phone"
                  onChange={onChange}
                  lists={lists}
                  item={item}
                />
              </div>
            </div>
            {/* End of Input (Import) */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                disabled={disabled}
                onClick={onSubmit}
                type="button"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
