import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios';
import StatsRow from './StatsRow';
import { db } from './firebase';

const TOKEN = "c03g7rv48v6sogn2hrvg";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
    const [stocksData, setStocksData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);
    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];
        snapshot.docs.map((doc) => {
            promises.push(
                getStocksData(doc.data().ticker)
                .then((res) => {
                tempData.push({
                    id: doc.id, 
                    data: doc.data(),
                    info: res.data
                        })
                    })
                )})
                Promise.all(promises).then(()=>{
                    setMyStocks(tempData);
                })
            })
        }

    const getStocksData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    };

    useEffect(()=>{
        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];
        getMyStocks();
        stocksList.map((stock) => {
        promises.push(
            getStocksData(stock)
            .then((res) => {
            tempStocksData.push({
                name: stock,
                ...res.data
                    });
                })
            )
        });

         Promise.all(promises).then(()=>{
         setStocksData(tempStocksData);
         })
     }, []);

    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header stats_lists">
                    <p>Stocks</p>
                </div>
            <div className="stats_content">
            </div>
            <div className="stats_rows">
                    {myStocks.map((stock) => (
                        <StatsRow 
                        key={stock.data.ticker}
                        name={stock.data.ticker}
                        openPrice={stock.info.o}
                        shares={stock.data.shares}
                        price={stock.info.c}
                        />
                    ))}
                <div className="stats_header stats-list">
                    <p>Lists</p>
                </div>
            <div className="stats_content">
                <div className="stats_rows">
                    {stocksData.map((stock) => (
                        <StatsRow 
                            key={stock.name}
                            name={stock.name}
                            openPrice={stock.o}
                            price={stock.c}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Stats
