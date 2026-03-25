import { Timeline, Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen } from 'lucide-react';

export default function Experience() {
  const experienceItems = [
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Software Engineer Intern</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>Skymirror, Budapest, Hungary</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '8px', fontSize: '13px' }}>January 2026 – Present</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px', fontStyle: 'italic' }}>Startup focused on innovative software solutions in the tech industry.</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Led the intern team on the Skymirror Academy curriculum review and enhancement.</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Fullstack Development Teacher</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>SEED-PR (State Department of Education of Paraná), Brazil</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '8px', fontSize: '13px' }}>January 2023 – Present</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px', fontStyle: 'italic' }}>State government department managing public elementary and high school education across Paraná, Brazil.</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Taught technical high school courses in Computer Science, Databases, Frontend and Backend Development, and Robotics to 300+ students.</li>
            <li>Founded and managed the “Code Club” to guide students through full projects with extra online web development classes.</li>
            <li>Led interdisciplinary projects integrating theory and practice across subjects to deliver real-world solutions.</li>
            <li>Taught Python, React, React Native, Node.js, Git, MySQL/SQLite, protocols/paradigms, and Arduino with C++ for robotics.</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Researcher / Fullstack Engineer</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>CeDRI - Research Centre in Digitalization and Intelligent Robotics, Bragança</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '8px', fontSize: '13px' }}>April 2025 – January 2026</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px', fontStyle: 'italic' }}>Research centre at the Polytechnic Institute of Bragança focused on digitalization, robotics, and industry innovation.</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Design Cyber-Physical Systems architectures to address industry problems across Europe, with emphasis on Portugal.</li>
            <li>Build Digital Twin solutions using Eclipse Ditto, InfluxDB, and Mosquitto for real-time manufacturing monitoring.</li>
            <li>Develop React interfaces with Axios and 3D visualization via three.js/React Three Fiber for Digital Twins.</li>
            <li>Automate data collection and integration using Python and shell scripts over HTTP and MQTT, deploying with Docker.</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Backend Developer</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>Newhappen</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>November 2022 – February 2023</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Built services in Node.js with TypeScript applying Clean Architecture for maintainable, testable codebases.</li>
            <li>Led automated testing adoption with Jest, covering unit and integration tests on legacy systems.</li>
            <li>Developed scalable user management and data processing APIs with robust validation and error handling.</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--green)',
      dot: <Briefcase size={16} color="var(--green)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Backend Developer</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>Haken</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>May 2022 – November 2022</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Maintained Node.js services using JavaScript with Clean Architecture patterns for modular services.</li>
            <li>Designed PostgreSQL data models with Prisma ORM, reducing database response times through optimizations.</li>
            <li>Delivered robust APIs with comprehensive error handling and performance improvements across modules.</li>
          </ul>
        </Card>
      ),
    }
  ];


  const researchItems = [
    {
      color: 'var(--mauve)',
      dot: <BookOpen size={16} color="var(--mauve)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--mauve)', fontWeight: 'bold', fontSize: '18px', marginBottom: '12px' }}>Digital Twin Architecture for Real-Time Industrial Monitoring</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Designed and deployed a scalable digital twin for real-time industrial monitoring using MQTT, Docker, and time-series databases.</li>
            <li>Built an interactive 3D React interface synchronized with physical assets for operational visualization and analytics</li>
            <li>Focused on extensibility for decision support and analytics while keeping synchronization with physical assets.</li>
            <li>Published findings at IOTSMS 2025, an international IEEE conference on IoT and smart systems.</li>
          </ul>
        </Card>
      ),
    },
    {
      color: 'var(--mauve)',
      dot: <BookOpen size={16} color="var(--mauve)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--mauve)', fontWeight: 'bold', fontSize: '18px', marginBottom: '12px' }}>Research on Note-Taking in Software Engineering Learning</div>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-main)', lineHeight: '1.6', fontSize: '14px' }}>
            <li>Conducted gray literature review and qualitative analysis on note-taking impact for software engineering learning.</li>
            <li>Presented and published findings at SEI/SICITE 2024, highlighting strategies that improve retention and productivity for software engineers.</li>
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
          <div style={{ color: 'var(--yellow)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Master’s Degree in Informatics</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>Polytechnic Institute of Bragança (IPB), Portugal</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>2025 – Present</div>
        </Card>
      )
    },
    {
      color: 'var(--yellow)',
      dot: <GraduationCap size={16} color="var(--yellow)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--yellow)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Bachelor’s Degree in Computer Science</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>UTFPR - Federal Technological University of Paraná</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>2022 – 2025</div>
        </Card>
      )
    },
    {
      color: 'var(--yellow)',
      dot: <GraduationCap size={16} color="var(--yellow)" />,
      children: (
        <Card style={{ backgroundColor: 'var(--surface0)', borderColor: 'var(--surface1)', marginBottom: '24px' }}>
          <div style={{ color: 'var(--yellow)', fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>Technical Computer Science (Integrated High School)</div>
          <div style={{ color: 'var(--text-main)', fontSize: '15px' }}>UTFPR - Federal Technological University of Paraná</div>
          <div style={{ color: 'var(--surface2)', marginBottom: '16px', fontSize: '13px' }}>2018 – 2021</div>
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

          <h3 style={{ color: 'var(--mauve)', fontSize: '20px', marginBottom: '32px', marginTop: '40px' }}>Research Experience</h3>
          <Timeline items={researchItems} />
        </Col>
      </Row>
    </motion.div>
  );
}
