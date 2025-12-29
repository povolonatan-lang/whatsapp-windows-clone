import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import EmptyState from './components/EmptyState';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Desktop Default */}
            <Route index element={<EmptyState />} />
            <Route path="chat/:id" element={<ChatWindow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
