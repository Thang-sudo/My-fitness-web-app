import React, { Component } from 'react'
import fire from '../../assets/fire.jpg'
class Progress extends Component {
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm" style={{textAlign:"center"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h4 className="border-bottom border-gray pb-2 mb-0">Your progress</h4>
                    <img src={fire} style={{width:"40px", height:"40px", borderRadius:"50%"}}/>
                </div>
                
                <div className="progress">
                <div className="progress-bar bg-danger"  style={{width: "75%"}} aria-valuenow={75} aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div style={{textAlign:"center"}}>
                        <p className="border-bottom border-gray pb-2 mb-0">Eaten</p>
                        <p>500kcal</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p className="border-bottom border-gray pb-2 mb-0">Remaining</p>
                        <p>1000kcal</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p className="border-bottom border-gray pb-2 mb-0">Burned</p>
                        <p>200kcal</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Progress;
