import React from 'react'
import AverageRating from "../components/AverageRating"
import Reviews from '../components/Reviews'
import SentimentAnalysis from '../components/SentimentAnalysis'
import Sidebar from '../components/Sidebar'
import WebsiteVisitor from '../components/WebsiteVisitor'

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
  
  