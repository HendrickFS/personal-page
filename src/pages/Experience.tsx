import { Timeline, Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experienceItems = [
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Senior Fullstack Developer</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>TechCorp</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>Jan 2022 - Present</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <li>Architected high-performance React applications</li>
            <li>Migrated monolithic backend to Node.js microservices</li>
            <li>Improved database query response times by 40%</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--blue)',
      dot: <Briefcase size={16} color="var(--blue)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--blue)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Frontend Developer</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>StartupInc</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>Mar 2019 - Dec 2021</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <li>Built responsive UI components with React & Redux</li>
            <li>Integrated Stripe payment processing workflows</li>
            <li>Mentored junior developers in best practices</li>
          </ul>
        </Card>
      ),
    }
  ];

  const educationItems = [
    {
      color: 'var(--yellow)',
      dot: <GraduationCap size={16} color="var(--yellow)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--yellow)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>B.S. in Computer Science</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>State University</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>Sep 2015 - May 2019</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <li>Focus on algorithms & data structures</li>
            <li>President of the Programming Club</li>
          </ul>
        </Card>
      )
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingTop: '40px' }}>
      <h2 style={{ color: 'var(--blue)', marginBottom: '40px', borderBottom: '1px solid var(--surface1)', paddingBottom: '16px', fontWeight: 'bold' }}>Background Overview</h2>
      <style>
        {`
          .exp-timeline .ant-timeline-item-tail { border-inline-start: 2px solid var(--surface2) !important; }
          .exp-timeline .ant-card-body { padding: 24px; font-family: 'Fira Code', monospace; }
        `}
      </style>
      
      <Row gutter={{ xs: 8, sm: 16, md: 48 }} className="exp-timeline" style={{ marginLeft: '12px' }}>
        <Col xs={24} md={12}>
          <h3 style={{ color: 'var(--green)', fontSize: '20px', marginBottom: '32px' }}>Experience</h3>
          <Timeline items={experienceItems} />
        </Col>
        <Col xs={24} md={12}>
          <h3 style={{ color: 'var(--yellow)', fontSize: '20px', marginBottom: '32px' }}>Education</h3>
          <Timeline items={educationItems} />
        </Col>
      </Row>
    </motion.div>
  );
}
