import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="bg-navy-700 text-white px-4 py-2 rounded-t-lg text-sm font-medium">
          {title}
        </div>
      )}
      
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 btn btn-primary btn-icon-only btn-icon-only-small z-10"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
        
        <pre className={`bg-navy-900 text-surface-100 p-4 overflow-x-auto text-sm ${title ? 'rounded-b-lg' : 'rounded-lg'}`}>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;