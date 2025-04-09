'use client';

import { useState } from 'react';
import styles from './WhatsAppWidget.module.css';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message);
    const phone = '923296308609'; // your WhatsApp number (no +, dashes)
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    setMessage('');
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.chatBox}>
          <div className={styles.header}>
            <img src="/user.png" alt="Support" className={styles.avatar} />
            <div>
              <div className={styles.agent}>Huzaifa Support</div>
              <div className={styles.status}>🟢 Online</div>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.botMsg}>Hi 👋, how can I help you?</div>
            <textarea
              placeholder="Type your message..."
              className={styles.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.sendBtn} onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <div className={styles.floatingBtn} onClick={() => setOpen(!open)}>
        <div className={styles.pulse}></div>
        <FaWhatsapp className={styles.icon} />
      </div>
    </div>
  );
}
