import React from 'react'
import AverageRating from "../components/AverageRating"
import Reviews from '../components/Reviews'
import SentimentAnalysis from '../components/SentimentAnalysis'
import Sidebar from '../components/Sidebar'
import WebsiteVisitor from '../components/WebsiteVisitor'

const Dashboard = () => {
    return (
      <div className="all-metrics">
        <AverageRating />
        <Reviews />
        <SentimentAnalysis />
        <Sidebar />
        <WebsiteVisitor />
      </div>
  
    )
  }
  
  export default Dashboard
  
  