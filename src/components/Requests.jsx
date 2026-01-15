import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removeFeed } from '../utils/requestSlice';
import { BASE_URL } from '../utils/constants';
import RequestsShimmer from './RequestsShimmer';

const Requests = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const requests = useSelector((store) => store.connectionRequest || []);

  const requestCall = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestCall();
  }, []);

  const handleAccept = async(requestId) => {
    try{
    const res = await axios.post(BASE_URL + "/request/review/accepted/" + requestId,{},
      {withCredentials: true,}
    );

    dispatch(removeFeed(requestId))

    }catch(err){
      console.log(err);
    }
  };

  const handleReject = async (requestId) => {
    try{
      const res = await axios.post(BASE_URL + "/request/review/rejected/" + requestId,{},
        {withCredentials: true,}
      );
  
      dispatch(removeFeed(requestId))
  
      }catch(err){
        console.log(err);
      }
  };

  if (loading) {
    return <RequestsShimmer />
  }

  if (!requests || requests.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">💌</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">No Requests Yet</h2>
          <p className="text-gray-500">New connection requests will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Connection Requests</h1>
          <p className="text-gray-600">{requests.length} pending request{requests.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => {
            const user = request.fromUserId;
            
            return (
              <div
                key={request._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
                  <img
                    src={user.photoUrl}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">
                      {user.firstName} {user.lastName}
                    </h3>
                    {user.age && <p className="text-sm opacity-90">{user.age} years old</p>}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {user.description}
                  </p>

                  {user.skills && user.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {user.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleReject(request._id)}
                      className="flex-1 py-3 bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="text-xl">✕</span>
                      <span>Pass</span>
                    </button>
                    
                    <button
                      onClick={() => handleAccept(request._id)}
                      className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <span className="text-xl">♥</span>
                      <span>Accept</span>
                    </button>
                  </div>

                  <button className="w-full mt-3 py-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors cursor-pointer">
                    View Full Profile →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Requests;