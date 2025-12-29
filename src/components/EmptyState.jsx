import React from 'react';
import { Lock } from 'lucide-react';

const EmptyState = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'var(--intro-background)',
            borderBottom: '6px solid var(--unread-marker-background)',
            textAlign: 'center'
        }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                alt="WhatsApp"
                style={{ width: '80px', marginBottom: '20px', opacity: 0.6, filter: 'grayscale(100%)' }}
            />
            <h1 style={{ fontWeight: 300, color: '#41525d', margin: '20px 0 10px 0' }}>WhatsApp para Windows</h1>
            <p style={{ color: '#667781', fontSize: '14px', lineHeight: '20px', maxWidth: '400px' }}>
                Envía y recibe mensajes sin necesidad de tener tu teléfono conectado. <br />
                Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
            </p>

            <div style={{ position: 'absolute', bottom: '40px', fontSize: '13px', color: '#8696a0', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Lock size={12} /> Cifrado de extremo a extremo
            </div>
        </div>
    );
};

export default EmptyState;
