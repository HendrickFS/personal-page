import { motion } from 'framer-motion';

interface TerminalPromptProps {
  path?: string;
  command?: string;
  isBlinking?: boolean;
}

export default function TerminalPrompt({ path = '~', command, isBlinking = false }: TerminalPromptProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontWeight: 600, flexWrap: 'wrap' }}>
      <span style={{ color: 'var(--green)' }}>hendrick@portfolio</span>
      <span style={{ color: 'var(--text-main)' }}>:</span>
      <span style={{ color: 'var(--blue)' }}>{path}</span>
      <span style={{ color: 'var(--text-main)' }}>$</span>
      {command && <span style={{ color: 'var(--yellow)', marginLeft: '4px' }}>{command}</span>}
      {isBlinking && (
        <motion.span 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
          style={{ width: '8px', height: '16px', backgroundColor: 'var(--text-main)', display: 'inline-block' }} 
        />
      )}
    </div>
  );
}
