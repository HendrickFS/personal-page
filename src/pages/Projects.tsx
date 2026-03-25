import { Table } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Helper function to parse simple YAML frontmatter
function parseMD(rawText: string) {
  const match = rawText.match(/---\n([\s\S]*?)\n---/);
  const metadata: Record<string, string> = {};
  if (match) {
    const frontmatter = match[1];
    frontmatter.split('\n').forEach(line => {
      const [key, ...values] = line.split(':');
      if (key && values.length > 0) metadata[key.trim()] = values.join(':').trim();
    });
  }
  const content = rawText.replace(/---\n[\s\S]*?\n---/, '').trim();
  return { metadata, content };
}

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import all .md files in the content/projects directory
    const mdFiles = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default' });
    
    const loadProjects = async () => {
      try {
        const paths = Object.keys(mdFiles);
        const loadedProjects = await Promise.all(
          paths.map(async (path) => {
            const rawContent = (await mdFiles[path]()) as string;
            const { metadata } = parseMD(rawContent);
            const filename = path.split('/').pop()?.replace('.md', '');
            
            return {
              key: metadata.id || filename,
              name: metadata.title || 'Untitled Project',
              tech: metadata.tech || 'Various',
              description: metadata.description || 'No description provided.',
              date: metadata.date || ''
            };
          })
        );
        
        loadedProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setProjects(loadedProjects);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const columns = [
    { title: 'Project Name', dataIndex: 'name', key: 'name', render: (text: string) => <span style={{ color: 'var(--green)', fontWeight: 'bold', fontSize: '16px' }}>{text}</span> },
    { title: 'Tech Stack', dataIndex: 'tech', key: 'tech', render: (text: string) => <span style={{ color: 'var(--blue)' }}>{text}</span> },
    { title: 'Description', dataIndex: 'description', key: 'description', render: (text: string) => <span style={{ color: 'var(--surface2)' }}>{text}</span> },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', maxWidth: '900px', margin: '0 auto', paddingTop: '40px' }}>
      <h2 style={{ color: 'var(--blue)', marginBottom: '32px', borderBottom: '1px solid var(--surface1)', paddingBottom: '16px', fontWeight: 'bold' }}>~/projects</h2>
      <style>
        {`
          .projects-table .ant-table { background: transparent !important; color: var(--text-main) !important; font-family: 'Fira Code', monospace; font-size: 15px; }
          .projects-table .ant-table-thead > tr > th { background: transparent !important; color: var(--mauve) !important; border-bottom: 2px solid var(--surface2) !important; font-family: 'Fira Code', monospace; }
          .projects-table .ant-table-tbody > tr > td { border-bottom: 1px solid var(--surface1) !important; padding: 20px 16px !important; cursor: pointer; }
          .projects-table .ant-table-tbody > tr:hover > td { background: var(--surface0) !important; }
          .projects-table .ant-table-cell::before { display: none !important; }
        `}
      </style>
      <div className="projects-table">
        <Table 
          loading={loading}
          dataSource={projects} 
          columns={columns} 
          pagination={false} 
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/projects/${record.key}`);
              }
            };
          }}
        />
      </div>
    </motion.div>
  );
}
