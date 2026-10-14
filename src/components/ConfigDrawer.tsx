import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, SlidersHorizontal, RotateCcw, Check, Sparkles, AlertCircle } from 'lucide-react';

export const ConfigDrawer: React.FC = () => {
  const { info, updateInfo, resetInfo, isConfigDrawerOpen, setIsConfigDrawerOpen } = usePortfolio();

  const [formData, setFormData] = useState({
    email: info.email,
    linkedin: info.linkedin || '',
    isOpenToOpportunities: info.isOpenToOpportunities,
    statusText: info.statusText
  });

  const [savedNotification, setSavedNotification] = useState(false);

  if (!isConfigDrawerOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateInfo({
      email: formData.email,
      linkedin: formData.linkedin.trim(),
      isOpenToOpportunities: formData.isOpenToOpportunities,
      statusText: formData.statusText
    });
    setSavedNotification(true);
    setTimeout(() => {
      setSavedNotification(false);
      setIsConfigDrawerOpen(false);
    }, 1200);
  };

  const handleReset = () => {
    resetInfo();
    setFormData({
      email: 'alamparvej2024@gmail.com',
      linkedin: '',
      isOpenToOpportunities: true,
      statusText: 'Open to Software Engineering Opportunities'
    });
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs no-print">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 h-full flex flex-col shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="config-drawer-title"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-sky-500" />
            <h3 id="config-drawer-title" className="text-sm font-bold text-slate-900 dark:text-white">
              Portfolio Settings
            </h3>
          </div>
          <button
            onClick={() => setIsConfigDrawerOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational callout */}
        <div className="my-4 p-3 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/50 text-xs text-sky-800 dark:text-sky-300">
          Update your contact email, LinkedIn link, and job availability status in real-time. Changes persist in your browser.
        </div>

        {savedNotification && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>Preferences updated successfully!</span>
          </div>
        )}

        {/* Configuration Form */}
        <form onSubmit={handleSave} className="space-y-5 flex-1">
          {/* Email input */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Professional Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
              required
            />
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Default: alamparvej2024@gmail.com
            </span>
          </div>

          {/* LinkedIn input */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              value={formData.linkedin}
              placeholder="https://linkedin.com/in/your-profile"
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors"
            />
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Leave blank to automatically hide LinkedIn icons until confirmed.
            </span>
          </div>

          {/* Status Indicator Toggle */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Opportunities Status Badge
              </label>
              <input
                type="checkbox"
                checked={formData.isOpenToOpportunities}
                onChange={(e) => setFormData({ ...formData, isOpenToOpportunities: e.target.checked })}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 dark:border-slate-700"
              />
            </div>

            {formData.isOpenToOpportunities && (
              <div className="mt-2">
                <input
                  type="text"
                  value={formData.statusText}
                  onChange={(e) => setFormData({ ...formData, statusText: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>

        {/* Direct Code file reference */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400">
          Source file: <code className="text-slate-300">src/data/portfolioData.ts</code>
        </div>
      </div>
    </div>
  );
};
