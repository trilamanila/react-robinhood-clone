import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'



function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSection">
                    <div className="newsfeed_portfolio">
                        <h1>$121,177</h1>
                        <p>+45.24 (+1.21%) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                       <LineGraph />
                       <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
