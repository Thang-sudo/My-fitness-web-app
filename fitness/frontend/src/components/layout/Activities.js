import React, { Component } from 'react'

class Activities extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <div className="my-3 bg-white rounded shadow-sm" style={{textAlign:"center"}}>
                    <div className="bg-warning" style={{height:"50px", textAlign:"center", color:"white"}}>
                        <h4 style={{paddingTop:"5px"}}>Activities</h4>
                    </div>
                <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Activity</th>
                            <th scope="col">Duration(min)</th>
                            <th scope="col">Kcal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Jogging</td>
                            <td>20</td>
                            <td>50(kcal)</td>
                            </tr>
                            <tr>
                            <td>Push-up</td>
                            <td>30</td>
                            <td>150(kcal)</td>
                            </tr>
                            <tr>
                            <td>Pull-up</td>
                            <td>10</td>
                            <td>50(kcal)</td>
                            </tr>
                        </tbody>
                        </table> 
                </div>
                <div className="btn btn-outline-warning" data-toggle="modal" data-target="#activityModal" style={{width:"100%", height:"50px", borderRadius:"10px", textAlign:"center"}}>
                    <h6 style={{color:"bg-warning", paddingTop: "10px"}}>Add New</h6>
                </div>
                {/* Activties */}
                <div className="modal fade" id="activityModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title">Activity</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label style={{marginRight:"10px"}}>Activity:</label>
                                <input type="text" name="food" placeholder="Activity..." style={{border:"none", borderBottom: "1px black solid", outline:"none"}}/>
                                <br/>
                                <br/>
                                <label style={{marginRight:"10px"}}>Duration:</label>
                                <input type="text" name="amount" placeholder="Duration(min)..." style={{border:"none", borderBottom:"1px black solid", outline:"none"}}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Activities;
