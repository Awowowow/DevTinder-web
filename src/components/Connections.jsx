import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import ConnectionsShimmer from './ConnectionShimmer'
import { useNavigate } from 'react-router-dom'

const Connections = () => {
  const userConnections = useSelector(store => store.connections);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const fetchConnection = async() => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/connections", 
        {withCredentials: true}) 
      dispatch(addConnections(res.data.data))
    } catch(err) {
      console.error("Error fetching connections:", err);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchConnection();
  }, [])

  if(loading){
    return <ConnectionsShimmer />
  }

  if(!userConnections) return;
  
  if(userConnections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">No Connections Yet</h1>
          <p className="text-gray-600 text-lg">Start connecting with people to see them here!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Connections</h1>
          <p className="text-gray-600">You have {userConnections.length} connection{userConnections.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userConnections.map((connection) => {

            const getInitials = () => {
              const firstInitial = connection.firstName?.[0] || '';
              const lastInitial = connection.lastName?.[0] || '';
              return (firstInitial + lastInitial).toUpperCase();
            };

            const fullName = `${connection.firstName || ''} ${connection.lastName || ''}`.trim() || 'Unknown User';

            return (
              <div 
                key={connection._id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-24 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
                
                <div className="relative px-6 pb-6">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    {connection.photoUrl ? (
                      <img 
                        src={connection.photoUrl} 
                        alt={fullName}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {getInitials()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-16 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {fullName}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">

                    </p>

                    <div className="flex gap-3 justify-center">
                      <button 
                        onClick={() => {
                          // Navigate to user profile
                          // Example: navigate(`/profile/${connection._id}`)
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 font-medium cursor-pointer"
                      >
                        View Profile
                      </button>
                      <button 
                        onClick={() => {
                          navigate(`/chat/${connection._id}`)
                        }}
                        className="p-2 bg-gray-100 border-2 border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 hover:text-purple-500 transition-all duration-200 text-gray-700 cursor-pointer"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Connections