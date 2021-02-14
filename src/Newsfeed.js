import React, { useState } from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from './Chip'


function Newsfeed() {
    const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);
  
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$121,177</h1>
                        <p>+45.24 (+1.21%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                       <LineGraph />
                       <TimeLine />
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2> Buying Power </h2>
                    <h2> $4.20 </h2>
                </div>
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p> Markets Closed </p>
                        <h1> Happy Holidays </h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed__popularlists__badges">
                        {popularTopics.map((topic) => ( 
                        <Chip 
                                label={topic}
                                image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsfeed
