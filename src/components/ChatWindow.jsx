import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MoreVertical, Search, Smile, Plus, Mic, Send, ArrowLeft, Phone, Video } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './ChatWindow.css';

const ChatWindow = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contacts, messages, sendMessage, currentUser, darkMode, markChatAsRead } = useAppContext();
    const [text, setText] = useState('');
    const bottomRef = useRef(null);

    const contact = contacts.find(c => c.id === Number(id));
    const chatMessages = messages[id] || [];

    // Dynamic icon color
    const iconColor = darkMode ? '#8696a0' : '#54656f';

    useEffect(() => {
        if (contact && contact.unread > 0) {
            markChatAsRead(id);
        }
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    }, [chatMessages, id, markChatAsRead, contact]);

    const handleSend = (e) => {
        e.preventDefault();
        if (text.trim()) {
            sendMessage(id, text);
            setText('');
        }
    };

    if (!contact) return <div className="chat-window empty">Select a chat</div>;

    return (
        <div className="chat-window">
            <header className="chat-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <ArrowLeft size={24} color={iconColor} />
                </button>
                <img src={contact.avatar} alt={contact.name} className="header-avatar" />
                <div className="header-info">
                    <span className="header-name">{contact.name}</span>
                    <span className="header-status">online</span>
                </div>
                <div className="header-actions">
                    <button title="Videollamada"><Video size={20} color={iconColor} /></button>
                    <button title="Llamada"><Phone size={20} color={iconColor} /></button>
                    <div className="divider"></div>
                    <button title="Buscar"><Search size={20} color={iconColor} /></button>
                    <button title="Menú"><MoreVertical size={20} color={iconColor} /></button>
                </div>
            </header>

            <div className="messages-area">
                {chatMessages.map(msg => (
                    <div key={msg.id} className={`message-row ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                        <div className="message-bubble">
                            <div className="bubble-content">
                                {msg.sender === 'other' && contact.isGroup && <span className="sender-name">{msg.senderName}</span>}
                                <span className="message-text">{msg.text}</span>
                                <span className="message-meta">
                                    <span className="message-time">{msg.time}</span>
                                    {msg.sender === 'me' && (
                                        <span className={`ticks ${msg.status === 'read' ? 'blue' : 'grey'}`}>
                                            {msg.status === 'read' ? '✓✓' : '✓✓'}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            <footer className="chat-footer">
                <button title="Emojis"><Smile size={24} color={iconColor} /></button>
                <button title="Adjuntar"><Plus size={24} color={iconColor} /></button>
                <form onSubmit={handleSend} className="input-form">
                    <input
                        type="text"
                        placeholder="Escribe un mensaje"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
                {text ? (
                    <button onClick={handleSend}><Send size={24} color={iconColor} /></button>
                ) : (
                    <button title="Nota de voz"><Mic size={24} color={iconColor} /></button>
                )}
            </footer>
        </div>
    );
};

export default ChatWindow;
