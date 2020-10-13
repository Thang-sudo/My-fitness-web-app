import React, { Component } from 'react';
import Activities from './Activities';
import Nutrition from './Nutrition';

class CaloriesTable extends Component {
    render() {
        return (
            <div>
                 <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"20px"}}>
                    <Nutrition/>
                    <Activities/>
                </div>
                
            </div>
           
        )
    }
}

export default CaloriesTable;
