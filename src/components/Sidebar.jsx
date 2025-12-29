import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquarePlus, MoreVertical, CircleDashed, Users, Search, Filter } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Sidebar.css';

const Sidebar = () => {
    const { contacts, currentUser } = useAppContext();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const filtered = contacts.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="sidebar">
            <header className="sidebar-header">
                <div className="user-avatar">
                    <img src={currentUser.avatar} alt="Me" />
                </div>
                <div className="header-actions">
                    <button title="Comunidades">
                        <Users size={20} strokeWidth={2} color="#54656f" />
                    </button>
                    <button title="Estados">
                        <CircleDashed size={20} strokeWidth={2} color="#54656f" />
                    </button>
                    <button title="Canales">
                        <MessageSquarePlus size={20} strokeWidth={2} color="#54656f" />
                        {/* Using MsgSquarePlus as placeholder for Channels since Lucide might not have the exact grid icon */}
                    </button>
                    <button title="Nuevo chat">
                        <MessageSquarePlus size={20} strokeWidth={2} color="#54656f" />
                    </button>
                    <button title="Menú">
                        <MoreVertical size={20} strokeWidth={2} color="#54656f" />
                    </button>
                </div>
            </header>

            <div className="search-container">
                <div className="search-wrapper">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Busca un chat o inicia uno nuevo."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button className="filter-btn">
                    <Filter size={18} color="#54656f" />
                </button>
            </div>

            <div className="contact-list-container">
                {filtered.map(contact => (
                    <div key={contact.id} className="contact-row" onClick={() => navigate(`/chat/${contact.id}`)}>
                        <div className="contact-avatar">
                            <img src={contact.avatar} alt="" />
                        </div>
                        <div className="contact-info">
                            <div className="info-top">
                                <span className="contact-name">{contact.name}</span>
                                <span className={`contact-time ${contact.unread > 0 ? 'unread' : ''}`}>{contact.time}</span>
                            </div>
                            <div className="info-bottom">
                                <div className="last-message">
                                    {contact.status === 'read' && <span className="double-check">✓✓</span>}
                                    {contact.isGroup && <span className="msg-preview">{contact.lastMessage}</span>}
                                    {!contact.isGroup && <span className="msg-preview">{contact.lastMessage}</span>}
                                </div>
                                <div className="meta-icons">
                                    {contact.muted && <span className="muted-icon">🔇</span>}
                                    {contact.unread > 0 && <div className="unread-badge">{contact.unread}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
