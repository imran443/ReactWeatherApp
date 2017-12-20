import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length)
}

export default (props) => {
    
    return (
        <div>
            {/* Pass the information into Sparklines */}
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}