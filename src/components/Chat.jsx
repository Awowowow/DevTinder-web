import React, { useEffect, useState, useRef } from 'react'
import { Send, Paperclip, Smile, MoreVertical, Search, Check, CheckCheck, ArrowLeft, Phone, Video } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createSocketConnection } from '../utils/socket'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const Chat = () => {
  const { toUserId } = useParams()
  const [messages, setMessages] = useState([])
  const [chat, setChat] = useState();
  const [toUser, setToUser] = useState();
  const [newMessages, setNewMessages] = useState('')
  const user = useSelector((store) => store.user)
  const userId = user?._id
  const messagesContainerRef = useRef(null)
  const socketRef = useRef(null);

  const fetchToUser = async () => {
    if (!toUserId || !userId) return
    try {
      const res = await axios.get(`${BASE_URL}/chat/${toUserId}`, { withCredentials: true })
      const chatData = res.data.data
      setChat(chatData)
      
      const otherUser = chatData.participants.find(participant => 
        participant._id === toUserId
      )
      
      if (otherUser) {
        setToUser(otherUser) 
      }

      if (chatData.messages && chatData.messages.length > 0) {
        const formattedMessages = chatData.messages.map(msg => {
          const messageSenderId = msg.senderId?._id || msg.senderId; 
          
          return {
            text: msg.text,
            sender: messageSenderId?.toString() === userId?.toString() ? 'me' : 'other',
            time: new Date(msg.createdAt).toLocaleTimeString('en-US', { 
              hour: '2-digit',
              minute: '2-digit'
            }),
            status: 'delivered'
          };
        });
        
        setMessages(formattedMessages);
      }

    } catch (error) {
      console.error("Error fetching chat:", error)
    }
  }

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }
  useEffect(() => {
    fetchToUser()
  }, [toUserId, userId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!userId || !toUserId) return
    
    socketRef.current = createSocketConnection()
    const socket = socketRef.current
    
    socket.emit('joinChat', { userId, toUserId })

    socket.on('messageRecivied', ({ text, senderId }) => {
      setMessages((prev) => [
        ...prev,
        {
          text,
          sender: senderId?.toString() === userId?.toString() ? 'me' : 'other',
          time: new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit',
            minute: '2-digit'
          }),
          status: 'delivered'
        }
      ])
    })

    return () => {
      socket.off('messageRecivied')
      socket.disconnect()
      socketRef.current = null
    }
  }, [userId, toUserId])


  const sendMessage = () => {
    if (!newMessages.trim() || !socketRef.current) return
    socketRef.current.emit('sendMessage', {
      toUserId,
      text: newMessages
    })
    setNewMessages('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-[#e5ddd5]">
      <div className="bg-[#ededed] border-b border-gray-300 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#128c7e] flex items-center justify-center text-white font-semibold">
            {toUser?.photoUrl ? (
              <img src={toUser.photoUrl} className="w-full h-full rounded-full object-cover cursor-pointer" />
            ) : (
              <span>{toUser?.firstName?.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">
              {toUser?.firstName} {toUser?.lastName}
            </p>
            <p className="text-xs text-gray-600">online</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><Video size={18} className="text-gray-700" /></button>
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><Phone size={18} className="text-gray-700" /></button>
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><Search size={18} className="text-gray-700" /></button>
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><MoreVertical size={18} className="text-gray-700" /></button>
        </div>
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-2 py-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cfcfcf' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        <div className="space-y-2 px-2 md:px-6">
          <div className="flex justify-center my-3">
            <span className="text-xs bg-[#dcf8c6] text-gray-700 px-3 py-1 rounded shadow">
              TODAY
            </span>
          </div>

          {messages.map((msg, i) => {
            const isMe = msg.sender === 'me'
            return (
              <div key={i} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-3 py-2 rounded-lg shadow 
                    ${isMe
                      ? 'bg-[#dcf8c6] text-gray-900 rounded-br-none max-w-[70%] sm:max-w-[55%]'
                      : 'bg-white text-gray-900 rounded-bl-none max-w-[65%] sm:max-w-[50%]'
                    }`}
                >
                  <p className="text-sm leading-[1.4] break-words whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[10px] text-gray-600">{msg.time}</span>
                    {isMe && (
                      msg.status === 'delivered' ? (
                        <CheckCheck className="w-4 h-4 text-[#34b7f1]" />
                      ) : (
                        <Check className="w-4 h-4 text-gray-600" />
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-[#ededed] border-t border-gray-300 px-3 py-2">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><Smile className="text-gray-700" /></button>
          <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"><Paperclip className="text-gray-700" /></button>

          <input
            value={newMessages}
            onChange={(e) => setNewMessages(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 rounded-lg outline-none border border-gray-300 bg-white text-gray-900"
          />

          <button
            onClick={sendMessage}
            disabled={!newMessages.trim()}
            className="p-2.5 bg-[#128c7e] hover:bg-[#0b7a6a] rounded-full text-white disabled:opacity-40 cursor-pointer"
          >
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
