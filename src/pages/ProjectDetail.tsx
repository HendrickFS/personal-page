import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState<{ metadata: Record<string, string>, content: string } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const mdFiles = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default' });
        
        let found = false;
        for (const path in mdFiles) {
          const rawContent = await mdFiles[path]() as string;
          const { metadata, content } = parseMD(rawContent);
          const filename = path.split('/').pop()?.replace('.md', '');
          
          if (metadata.id === id || filename === id) {
            setProjectData({ metadata, content });
            found = true;
            break;
          }
        }
        
        if (!found) setError(true);
      } catch (e) {
        console.error("Failed to load project", e);
        setError(true);
      }
    };

    if (id) {
      loadProject();
    }
  }, [id]);

  if (error) {
    return (
      <div style={{ color: 'var(--red)', paddingTop: '40px', textAlign: 'center', width: '100%' }}>
        Project not found: {id}
        <br />
        <span onClick={() => navigate('/projects')} style={{ color: 'var(--blue)', cursor: 'pointer', textDecoration: 'underline', marginTop: '16px', display: 'inline-block' }}>Return to Projects</span>
      </div>
    );
  }

  if (!projectData) {
    return <div style={{ color: 'var(--surface2)', paddingTop: '40px', textAlign: 'center', width: '100%' }}>Loading project...</div>;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', paddingTop: '40px' }}>
      <div 
        onClick={() => navigate('/projects')} 
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--surface2)', cursor: 'pointer', marginBottom: '24px', transition: 'color 0.2s', fontSize: '14px' }}
      >
        <ArrowLeft size={16} /> back to ~/projects
      </div>
      
      <div style={{ backgroundColor: 'var(--surface0)', padding: '40px', borderRadius: '8px', border: '1px solid var(--surface1)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
        <h1 style={{ color: 'var(--green)', margin: '0 0 16px 0', fontSize: '32px' }}>{projectData.metadata.title || id}</h1>
        <div style={{ display: 'flex', gap: '24px', color: 'var(--surface2)', fontSize: '14px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--surface1)' }}>
          {projectData.metadata.date && <span>{projectData.metadata.date}</span>}
          {projectData.metadata.tech && <span style={{ color: 'var(--blue)' }}>{projectData.metadata.tech}</span>}
        </div>
        
        <style>
          {`
            .markdown-body { color: var(--text-main); font-family: 'Fira Code', monospace; line-height: 1.7; font-size: 15px; }
            .markdown-body h1, .markdown-body h2, .markdown-body h3 { color: var(--mauve); margin-top: 32px; margin-bottom: 16px; font-weight: bold; border-bottom: 1px solid var(--surface1); padding-bottom: 8px; }
            .markdown-body h2 { font-size: 24px; }
            .markdown-body h3 { font-size: 20px; border-bottom: none; }
            .markdown-body p { margin-bottom: 16px; }
            .markdown-body a { color: var(--blue); text-decoration: none; }
            .markdown-body a:hover { text-decoration: underline; }
            .markdown-body code { background: var(--bg-dark); padding: 4px 6px; border-radius: 4px; color: var(--yellow); font-size: 13px; }
            .markdown-body pre { background: var(--bg-dark); padding: 16px; border-radius: 8px; overflow-x: auto; margin: 24px 0; border: 1px solid var(--surface1); }
            .markdown-body pre code { background: transparent; padding: 0; color: var(--text-main); }
            .markdown-body ul, .markdown-body ol { padding-left: 24px; margin-bottom: 16px; }
            .markdown-body li { margin-bottom: 8px; }
            .markdown-body blockquote { border-left: 4px solid var(--surface2); margin: 0; padding-left: 16px; color: var(--surface2); }
            .markdown-body img { max-width: 100%; height: auto; border-radius: 8px; margin: 24px 0; max-height: 500px; object-fit: contain; }
          `}
        </style>
        <div className="markdown-body">
          <ReactMarkdown>{projectData.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}
