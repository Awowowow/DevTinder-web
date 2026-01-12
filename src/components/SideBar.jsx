import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div data-theme= "dracula" 
             className="h-full flex flex-col p-4">
    
          <ul className="menu gap-1">
            <li>
              <Link to= "/requests" className="active text-pink-500">
                🔥 Requests
              </Link>
            </li>
            <li>
              <Link to="/connections">
              ⭐ Connections
              </Link>
            </li>
          </ul>
        </div>
      );
    };

export default SideBar
