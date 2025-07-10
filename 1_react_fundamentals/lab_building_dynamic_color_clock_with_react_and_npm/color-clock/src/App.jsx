import { useState, useEffect } from 'react'
import './App.css'
import { format } from 'date-fns'

function App() {
    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000); // updates every second

        return () => clearInterval(timer); // cleanup on unmount
    }, []);
    
    return (
        <div className="clock-widget">
            <h1>Productivity Dashboard</h1>
            <div className="time-box">
                {format(currentTime, "MMMM do yyyy, hh:mm:ss a")}
            </div>
            <div className="day-box">
                Today is a {format(currentTime, "eeee")}
            </div>
        </div>
    )
  
}

export default App