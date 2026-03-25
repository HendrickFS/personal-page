import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minus, X } from 'lucide-react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'var(--bg-dark)',
        borderRadius: '8px',
        border: '1px solid var(--surface1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        maxHeight: '90vh'
      }}
    >
      {/* Window Header */}
      <div style={{
        backgroundColor: 'var(--surface0)',
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--surface1)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--red)' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--yellow)' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--green)' }} />
        </div>
        <div style={{ 
          fontSize: '12px', 
          color: 'var(--text-main)', 
          fontWeight: 600,
          opacity: 0.8
        }}>
          {title}
        </div>
        <div style={{ display: 'flex', gap: '12px', color: 'var(--surface2)' }}>
          <Minus size={14} />
          <Maximize2 size={14} />
          <X size={14} />
        </div>
      </div>

      {/* Window Content */}
      <div style={{
        padding: '32px',
        flex: 1,
        overflowY: 'auto'
      }}>
        {children}
      </div>
    </motion.div>
  );
}
