import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

// Exact data from screenshot analysis
const INITIAL_CONTACTS = [
    {
        id: 1,
        name: 'Diplomatura',
        avatar: 'https://ui-avatars.com/api/?name=D&background=1f2c34&color=fff',
        lastMessage: '~Rodri: Ya terminaron el examen?',
        time: '6:13 p.m.',
        unread: 1,
        muted: true, // Muted icon
        isGroup: true
    },
    {
        id: 2,
        name: 'La iglesia de Prinzipus 0 😈',
        avatar: 'https://ui-avatars.com/api/?name=I&background=ffffff&color=000',
        lastMessage: 'Alejo: God',
        time: '5:23 p.m.',
        unread: 1,
        isGroup: true
    },
    {
        id: 3,
        name: 'Futbol SemEnal',
        avatar: 'https://ui-avatars.com/api/?name=F&background=ef4444&color=fff',
        lastMessage: 'Manuel: Buenos equipos',
        time: '5:02 p.m.',
        unread: 1,
        isGroup: true
    },
    {
        id: 4,
        name: 'Viejo',
        avatar: 'https://ui-avatars.com/api/?name=V&background=71717a&color=fff',
        lastMessage: 'ya salio la nueva temporada de JJK',
        time: '3:36 p.m.',
        unread: 0,
        status: 'read' // Blue ticks
    },
    {
        id: 5,
        name: 'Manuel',
        avatar: 'https://ui-avatars.com/api/?name=M&background=00a884&color=fff',
        lastMessage: 'vamos al cine hoy!!',
        time: '2:19 p.m.',
        unread: 0,
        status: 'read'
    }
];

const INITIAL_MESSAGES = {
    1: [
        { id: 1, text: 'Hola a todos', sender: 'other', time: '6:00 p.m.', senderName: 'Nacho' },
        { id: 2, text: 'Ya terminaron el examen?', sender: 'other', time: '6:13 p.m.', senderName: 'Rodri' }
    ],
    2: [
        { id: 1, text: 'God', sender: 'other', time: '5:23 p.m.', senderName: 'Alejo' }
    ],
    3: [
        { id: 1, text: 'Buenos equipos', sender: 'other', time: '5:02 p.m.', senderName: 'Manuel' }
    ],
    4: [
        { id: 1, text: 'Como estas viejo?', sender: 'me', time: '3:30 p.m.', status: 'read' },
        { id: 2, text: 'ya salio la nueva temporada de JJK', sender: 'me', time: '3:36 p.m.', status: 'read' }
    ],
    5: [
        { id: 1, text: 'vamos al cine hoy!!', sender: 'me', time: '2:19 p.m.', status: 'read' }
    ]
};



export const AppProvider = ({ children }) => {
    const [contacts, setContacts] = useState(INITIAL_CONTACTS);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [currentUser] = useState({ name: 'Me', id: 'me', avatar: 'https://ui-avatars.com/api/?name=Me' });

    const sendMessage = (chatId, text) => {
        const newMessage = {
            id: Date.now(),
            text,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase(),
            status: 'sent'
        };

        setMessages(prev => ({
            ...prev,
            [chatId]: [...(prev[chatId] || []), newMessage]
        }));

        // Update contact list preview
        setContacts(prev => prev.map(c =>
            c.id === Number(chatId) ? { ...c, lastMessage: text, time: newMessage.time, status: 'sent' } : c
        ));
    };

    return (
        <AppContext.Provider value={{ contacts, messages, currentUser, sendMessage }}>
            {children}
        </AppContext.Provider>
    );
};
