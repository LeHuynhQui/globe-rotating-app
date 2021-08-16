import React, { useEffect } from 'react'

export default function Loading() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading").style.display = "none" 
         }, 2000);
    }, [])

    return (
        <div className="loading">
            {/* <img src="https://lh3.googleusercontent.com/proxy/S6pSEu7OeL1HCLKhI8vQSBEoz7XedzvMl0GncC9RoP5cC2k_RuXcekFCte-qSW-pz3seU3XkiHzoL19AmNW2GybHod8uwoQd2jh2vJmQ-ly85zfPWz3T9GjhOcJVus6gk7rk58hTzSHQu6TZINl4aT0uYhpxw8HI-nvOeakn5cTY-A9PdJwMyKzn_OGPl6qzMCkARC0fZtIQ" alt="Loading"/> */}
            <img src="https://www.odni.gov/ncsc/e-Learning_CyberExplore/images/earth.gif" alt="loading"/>
        </div>
    )
}
