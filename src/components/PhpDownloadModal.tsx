import React, { useState } from 'react';
import { Download, Terminal, Check, FolderArchive, Server, Copy, ExternalLink, X } from 'lucide-react';

interface PhpDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhpDownloadModal: React.FC<PhpDownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('php -S localhost:8000');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="php-download-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        id="php-download-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-montserrat text-lg sm:text-xl font-bold tracking-wider text-white uppercase">
                Falcha Studio — PHP Edition
              </h2>
              <p className="text-xs text-slate-400 font-montserrat tracking-widest uppercase mt-0.5">
                Complete Standalone Package (.ZIP)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Download the production-ready PHP version of this website. It contains modular PHP templates (<code className="text-amber-300 text-xs px-1.5 py-0.5 rounded bg-white/5">index.php</code>, <code className="text-amber-300 text-xs px-1.5 py-0.5 rounded bg-white/5">header.php</code>, <code className="text-amber-300 text-xs px-1.5 py-0.5 rounded bg-white/5">data.php</code>), all high-res assets, and contact handlers ready to run on any PHP host.
          </p>

          {/* Primary Download Button */}
          <div className="pt-2">
            <a
              id="modal-direct-download-php"
              href="/falcha-filmation-studio-php.zip"
              download="falcha-filmation-studio-php.zip"
              className="w-full flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-montserrat font-bold text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PHP Website Package (.zip — 3.8 MB)</span>
            </a>
          </div>

          {/* Setup Instructions */}
          <div className="pt-3 space-y-3">
            <h3 className="text-xs font-montserrat font-bold uppercase tracking-widest text-slate-300 flex items-center space-x-2">
              <Server className="w-3.5 h-3.5 text-teal-400" />
              <span>How to Run Locally</span>
            </h3>
            <div className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-slate-200">
              <div className="flex items-center space-x-2 overflow-x-auto">
                <Terminal className="w-4 h-4 text-slate-500 shrink-0" />
                <span>php -S localhost:8000</span>
              </div>
              <button
                onClick={handleCopyCmd}
                className="ml-3 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors shrink-0 flex items-center space-x-1"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px] uppercase font-montserrat">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1.5 font-light">
              <p className="font-semibold text-white">For cPanel / Apache / Nginx / XAMPP:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Extract and place files inside your <code className="text-slate-200">public_html</code> or <code className="text-slate-200">htdocs</code> directory.</li>
                <li>Zero dependencies or composer installs needed — works out-of-the-box on PHP 7.4+.</li>
                <li>Includes <code className="text-slate-200">.htaccess</code> for Apache URL rewrites and asset caching.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
