import React from 'react';

interface ProjectPreviewVisualProps {
  projectId: string;
}

export const ProjectPreviewVisual: React.FC<ProjectPreviewVisualProps> = ({ projectId }) => {
  switch (projectId) {
    case 'hellobye-ecommerce':
      return (
        <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 select-none">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">hellobyebd.com/admin/catalog</span>
            </div>
            <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">Spring Boot + Vue</span>
          </div>

          {/* Catalog Dashboard Mockup */}
          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 block">Active SKUs</span>
              <span className="text-xs font-bold text-white font-mono">1,480 items</span>
            </div>
            <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 block">Courier Status</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">Synced (Live)</span>
            </div>
            <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 block">Auth Layer</span>
              <span className="text-xs font-bold text-indigo-400 font-mono">JWT + RBAC</span>
            </div>
          </div>

          {/* Mock Table Rows */}
          <div className="space-y-1 font-mono text-[9px] text-slate-300">
            <div className="flex items-center justify-between p-1 bg-slate-900/50 rounded border border-slate-800/60">
              <span className="text-slate-200">#ORD-9821 · Apparel Variant (XL)</span>
              <span className="text-emerald-400">Processing · Courier API</span>
            </div>
            <div className="flex items-center justify-between p-1 bg-slate-900/50 rounded border border-slate-800/60">
              <span className="text-slate-200">#ORD-9820 · Electronics SKU-41</span>
              <span className="text-sky-400">Delivered · Verified</span>
            </div>
          </div>
        </div>
      );

    case 'amrapari-campus':
      return (
        <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">amrapari/gateway:8080</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/40">Microservices</span>
          </div>

          {/* Microservice Topology Graphic */}
          <div className="flex items-center justify-around py-2">
            <div className="text-center p-1.5 bg-slate-900 border border-slate-800 rounded w-20">
              <span className="text-[9px] font-mono text-sky-400 block font-bold">Gateway</span>
              <span className="text-[8px] text-slate-400">Routing</span>
            </div>
            <span className="text-slate-600 font-mono text-xs">⇄</span>
            <div className="text-center p-1.5 bg-slate-900 border border-indigo-500/30 rounded w-24">
              <span className="text-[9px] font-mono text-indigo-400 block font-bold">RabbitMQ</span>
              <span className="text-[8px] text-slate-400">Event Bus</span>
            </div>
            <span className="text-slate-600 font-mono text-xs">⇄</span>
            <div className="text-center p-1.5 bg-slate-900 border border-slate-800 rounded w-20">
              <span className="text-[9px] font-mono text-emerald-400 block font-bold">Services</span>
              <span className="text-[8px] text-slate-400">Academic/Auth</span>
            </div>
          </div>

          <div className="p-1 bg-slate-900/60 rounded border border-slate-800 font-mono text-[9px] flex items-center justify-between text-slate-400">
            <span>Status: Healthy · Service Discovery active</span>
            <span className="text-emerald-400">PostgreSQL Attached</span>
          </div>
        </div>
      );

    case 'eventx-cuet':
      return (
        <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">eventx.cuet.ac.bd</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">CUET Team Project</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-1">
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 block">Club Hackathons</span>
              <span className="text-xs font-semibold text-white">Verification Queue: 12</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[9px] font-mono text-slate-400 block">Venue Allocations</span>
              <span className="text-xs font-semibold text-sky-400">Conflict Checked</span>
            </div>
          </div>

          <div className="p-1.5 bg-slate-900/60 rounded border border-slate-800/80 font-mono text-[9px] flex items-center justify-between text-slate-300">
            <span>Role: Student / Club Organizer / Volunteer</span>
            <span className="text-emerald-400 font-bold">MySQL + JPA</span>
          </div>
        </div>
      );

    case 'quantum-cosmo-school':
      return (
        <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">cosmo.edu/portal</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">3,000+ Enrolled</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 my-1 text-center font-mono text-[9px]">
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 block">Students</span>
              <span className="text-xs font-bold text-white">3,200+</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 block">Evaluations</span>
              <span className="text-xs font-bold text-emerald-400">Automated</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 block">Stack</span>
              <span className="text-xs font-bold text-sky-400">Spring Boot</span>
            </div>
          </div>

          <div className="p-1 bg-slate-900/60 rounded border border-slate-800 font-mono text-[9px] flex items-center justify-between text-slate-400">
            <span>Thymeleaf SSR + REST Endpoints</span>
            <span className="text-indigo-400">Docker Containerized</span>
          </div>
        </div>
      );

    case 'ai-nlp-experiments':
      return (
        <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between overflow-hidden relative border-b border-slate-800 select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">fastapi:8000/v1/qa/bert</span>
            </div>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/40">BERT & SQuAD</span>
          </div>

          <div className="p-2 rounded bg-slate-900/80 border border-slate-800 font-mono text-[9px] space-y-1">
            <div className="flex justify-between text-slate-400">
              <span className="text-purple-400">POST /predict/sentiment</span>
              <span className="text-emerald-400">200 OK (38ms)</span>
            </div>
            <div className="text-slate-300">
              &gt; Context: SQuAD QA Embeddings verified
            </div>
          </div>

          <div className="p-1 bg-slate-900/60 rounded border border-slate-800 font-mono text-[9px] flex items-center justify-between text-slate-400">
            <span>FastAPI Container + Scikit-learn Pipelines</span>
            <span className="text-sky-400">PyTorch / Transformers</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 bg-slate-950 flex items-center justify-center border-b border-slate-800">
          <span className="font-mono text-xs text-slate-500">System Architecture</span>
        </div>
      );
  }
};
