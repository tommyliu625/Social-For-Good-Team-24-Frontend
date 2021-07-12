
export default function Worksheet(){ return (
    <div>
            <div className="form-group">
              <label htmlFor="income">Monthly Income</label>
              <input
                type="text"
                className="form-control"
                id="income"
                required
                //value={review}
               // onChange={handleInputChange}
                name="income"
              />
              <label htmlFor="bills">Monthly Bills</label>
              <input
                type="text"
                className="form-control"
                id="bills"
                required
               // value={review}
               // onChange={handleInputChange}
                name="bills"
              />
              <label htmlFor="goals">Saving goals</label>
              <input
                type="text"
                className="form-control"
                id="goals"
                required
               // value={review}
             //   onChange={handleInputChange}
                name="goals"
              />
               <label htmlFor="expenses">Monthly expenses</label>
              <input
                type="text"
                className="form-control"
                id="expenses"
                required
               // value={review}
              //  onChange={handleInputChange}
                name="expenses"
              />

              
              
            </div>
            <button className="btn btn-success">
              Submit
            </button>
          </div>
  );
};

