import React from 'react'
import AverageRating from "../components/AverageRating"
import Reviews from '../components/Reviews'
import SentimentAnalysis from '../components/SentimentAnalysis'
import Sidebar from '../components/Sidebar'
import WebsiteVisitor from '../components/WebsiteVisitor'

//nice grid!! i like your color choices too, nice to look at
const Dashboard = () => {
    return (
      <div className="all-metrics">
        <div>
          <Sidebar /> 
        </div>
        <div className='right-side'>
          <AverageRating />
          <Reviews />
          <SentimentAnalysis />
          <WebsiteVisitor />  
        </div>        
      </div>  
    )
  }
  
  export default Dashboard
  
  