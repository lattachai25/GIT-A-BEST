import React from 'react'

function index() {
    return (
        <div>
        <form>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Username</label>
            <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
            </div>

        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Protion</label>
            <input name="protion_id" type="text" className="form-control" placeholder="protion_id" />
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">E-mail</label>
            <input name="email" type="text" className="form-control" placeholder="" />
        </div>  
        <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">E-mail</label>
            <input name="email" type="text" className="form-control" placeholder="" />
        </div>   
        </div>

        <div className="form-row">
        <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">FirstName</label>
            <input name="firstname" type="text" className="form-control" placeholder="" />
        </div>  
        <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">LandName</label>
            <input name="landname" type="text" className="form-control" placeholder="" />
        </div>   
        </div>


        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
            </div>
        </div>
        <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

        </div>
    )
}

export default index
