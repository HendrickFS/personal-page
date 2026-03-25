import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ display: 'flex', gap: '48px', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', paddingTop: '60px', flexWrap: 'wrap' }}
    >
      {/* ASCII LOGO */}
      <div style={{ color: 'var(--blue)', fontWeight: 'bold', lineHeight: '1.2', whiteSpace: 'pre', fontSize: '10px' }}>
        {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡿⠋⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠈⠹⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣶⣶⣶⣾⣿⣿⡁⢀⡇⠀⠀⠀⠀⢣⡀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⣇⠀⣹⣿⣿⣶⣶⣶⣶⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⡴⠞⠛⠉⠉⠉⠉⠉⠛⠛⠿⢿⣿⣿⣴⡆⠀⠀⢀⣾⠈⢙⣶⣞⠉⢸⣆⠀⠀⠀⣶⣿⣿⣿⡿⠟⠛⠋⠉⠉⠉⠉⠙⠛⠷⣤⡀⠀⠀⠀⠀⠀
⠀⠀⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣷⣶⣴⣿⣇⣴⡿⠁⠹⣷⣄⣿⣷⣴⣶⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀
⠀⡰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢸⢃⣿⡿⠿⣿⣿⣿⠁⠀⠀⢹⣿⣿⡟⠿⣿⣇⢿⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡀⠀
⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡞⠉⠀⢉⣾⡿⠁⠀⣿⠛⢿⣄⠀⢀⣼⠟⢻⡇⠀⠹⣿⣎⠀⠈⠙⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣿⣿⣿⡀⢀⣠⡿⠃⠀⢀⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠻⣄⠀⠀⠻⣧⣀⠀⣸⣿⣿⣷⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣾⡿⠛⠋⠉⠉⠻⣿⣿⡟⠋⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⡀⠈⠛⣿⣿⣿⠋⠉⠉⠛⠻⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⠾⠛⠁⠀⠀⠀⠀⠀⢰⣿⠃⠀⠀⠀⠁⠀⠐⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠁⠀⠀⠀⢻⣿⠀⠀⠀⠀⠀⠀⠘⠻⢦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠉⠀⠀⠀⠀⠀⠀⠀⣠⣿⠇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⢿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠹⣦⡀⠀⠀⠀
⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡏⠀⢀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⢀⠀⠈⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠈⢳⡄⠀⠀
⠀⡼⠃⠀⠀⠀⠀⠀⠀⢀⣴⠿⠛⣿⠃⠀⠘⡆⠀⠀⠀⣴⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣄⠀⠀⠀⡞⠀⠀⣿⡟⠻⢷⣄⠀⠀⠀⠀⠀⠀⠀⠻⡄⠀
⣰⠁⠀⠀⠀⠀⠀⠀⢠⠟⠁⠀⠀⣿⠀⠀⢀⣿⢀⣠⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⣄⢸⣇⠀⠀⢸⡇⠀⠀⠙⢧⠀⠀⠀⠀⠀⠀⠀⢹⡀
⠇⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⣿⣷⣦⣾⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣤⣴⣿⡇⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⣇
⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⣠⣿⡿⠻⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⡿⠻⣿⣷⡀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠈
⠀⠀⠀⠀⠀⠀⠀⠗⠀⠀⠀⢠⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣧⠀⠀⠀⠠⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀`}
      </div>

      {/* Neofetch-style Info, without literal prompt */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px' }}>
        <h1 style={{ color: 'var(--green)', margin: 0, fontSize: '28px' }}>Hendrick Scheifer</h1>
        <h2 style={{ color: 'var(--mauve)', margin: 0, fontSize: '16px', fontWeight: 'normal', opacity: 0.9, marginBottom: '16px' }}>Fullstack Developer</h2>

        <div style={{ display: 'flex', gap: '16px' }}><span style={{ color: 'var(--blue)', fontWeight: 'bold', width: '120px' }}>Main Languages</span><span>TypeScript, Python</span></div>
        <div style={{ display: 'flex', gap: '16px' }}><span style={{ color: 'var(--blue)', fontWeight: 'bold', width: '120px' }}>Main Techs</span><span>React, Node.js, PostgreSQL, Django, Docker</span></div>
        <div style={{ display: 'flex', gap: '16px' }}><span style={{ color: 'var(--blue)', fontWeight: 'bold', width: '120px' }}>Focus</span><span>Web Apps, IoT Platforms, Automation</span></div>
        <div style={{ display: 'flex', gap: '16px' }}><span style={{ color: 'var(--blue)', fontWeight: 'bold', width: '120px' }}>Experience</span><span>3+ years</span></div>
        <div style={{ display: 'flex', gap: '16px' }}><span style={{ color: 'var(--blue)', fontWeight: 'bold', width: '120px' }}>Location</span><span>Remote / Campo Mourão, Brazil</span></div>

        {/* Color Palette Accents */}
        <div style={{ display: 'flex', gap: '0', marginTop: '32px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--bg-dark)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--red)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--green)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--yellow)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--blue)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--mauve)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--surface2)' }} />
          <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--text-main)' }} />
        </div>
      </div>
    </motion.div>
  );
}
