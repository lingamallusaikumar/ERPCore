import React, { useState, useEffect } from 'react';
import { Layers, CheckCircle2, XCircle, ArrowRight, Play, Filter, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Workflow, Approval } from '../types';
import * as Storage from '../lib/storage';

export const WorkflowsModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'canvas' | 'approvals'>('canvas');
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [approvals, setApprovals] = useState<Approval[]>([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const wList = await Storage.getAll<Workflow>('workflows');
    const aList = await Storage.getAll<Approval>('approvals');
    setWorkflows(wList);
    setApprovals(aList);
    if (wList.length > 0) setSelectedWorkflow(wList[0]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApprove = async (appr: Approval) => {
    appr.status = 'approved';
    appr.comments = 'Approved by Finance Manager';
    await Storage.saveItem('approvals', appr);
    loadData();
  };

  const handleReject = async (appr: Approval) => {
    appr.status = 'rejected';
    appr.comments = 'Rejected due to budget constraints';
    await Storage.saveItem('approvals', appr);
    loadData();
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Visual Workflow Automation & Approval Center
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">Node Flow Canvas</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Design visual trigger/condition/action workflow logic and manage pending enterprise approval queues.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        <button
          onClick={() => setSubTab('canvas')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            subTab === 'canvas'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Visual Workflow Builder
        </button>
        <button
          onClick={() => setSubTab('approvals')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            subTab === 'approvals'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Approval Inbox Queue ({approvals.filter((a) => a.status === 'pending').length})
        </button>
      </div>

      {subTab === 'canvas' && selectedWorkflow && (
        <div className="space-y-6">
          <Card title={selectedWorkflow.name} subtitle={selectedWorkflow.description}>
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Trigger Event:</span>
                <Badge variant="purple">{selectedWorkflow.triggerEvent}</Badge>
              </div>

              {/* Visual Node Flow Visualizer Canvas */}
              <div className="p-6 rounded-xl bg-gray-950 border border-gray-800 overflow-x-auto">
                <p className="text-[10px] font-semibold uppercase text-gray-500 tracking-wider mb-4">Node Execution Path</p>
                <div className="flex items-center gap-4 min-w-[700px]">
                  {selectedWorkflow.nodes.map((node, index) => (
                    <React.Fragment key={node.id}>
                      <div className="p-4 rounded-xl glass-panel bg-gray-900 border border-gray-700 min-w-44 text-center space-y-2 shadow-lg">
                        <Badge variant={node.type === 'trigger' ? 'purple' : node.type === 'condition' ? 'warning' : node.type === 'approval' ? 'danger' : 'success'}>
                          {node.type.toUpperCase()}
                        </Badge>
                        <h5 className="text-xs font-semibold text-gray-100">{node.title}</h5>
                        {node.type === 'condition' && (
                          <p className="text-[10px] text-amber-400 font-mono">Amount &gt; $10,000</p>
                        )}
                        {node.type === 'approval' && (
                          <p className="text-[10px] text-rose-400 font-mono">Role: FIN_MGR</p>
                        )}
                      </div>
                      {index < selectedWorkflow.nodes.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-500 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {subTab === 'approvals' && (
        <Card title="Approval Inbox Center" subtitle="Review and act on pending workflow approvals">
          <div className="overflow-x-auto">
            <table className="erp-table">
              <thead>
                <tr>
                  <th>Approval #</th>
                  <th>Title / Record</th>
                  <th>Module</th>
                  <th>Requested By</th>
                  <th>Amount ($)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((appr) => (
                  <tr key={appr.id}>
                    <td className="font-mono text-emerald-400 font-semibold">{appr.approvalNumber}</td>
                    <td className="font-medium">{appr.title}</td>
                    <td><Badge variant="info">{appr.module.toUpperCase()}</Badge></td>
                    <td className="text-gray-400">{appr.requestedBy}</td>
                    <td className="font-mono font-bold">${appr.amount?.toLocaleString() || '0'}</td>
                    <td>
                      <Badge variant={appr.status === 'approved' ? 'success' : appr.status === 'rejected' ? 'danger' : 'warning'}>
                        {appr.status.toUpperCase()}
                      </Badge>
                    </td>
                    <td>
                      {appr.status === 'pending' ? (
                        <div className="flex gap-2">
                          <Button size="sm" variant="success" onClick={() => handleApprove(appr)}>Approve</Button>
                          <Button size="sm" variant="danger" onClick={() => handleReject(appr)}>Reject</Button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">{appr.comments}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};
