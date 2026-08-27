import React, { useState, useEffect } from 'react';
import { Briefcase, CheckSquare, Clock, DollarSign } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { KanbanBoard } from '../components/ui/KanbanBoard';
import { Project, Task, Expense } from '../types';
import * as Storage from '../lib/storage';

export const ProjectsModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'projects' | 'kanban' | 'expenses'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const pList = await Storage.getAll<Project>('projects');
    const eList = await Storage.getAll<Expense>('expenses');
    setProjects(pList);
    setExpenses(eList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const projectColumns: Column<Project>[] = [
    { key: 'projectCode', header: 'Project Code', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.projectCode}</span> },
    { key: 'name', header: 'Project Title', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'customerName', header: 'Customer', accessor: (item) => item.customerName || 'Internal' },
    { key: 'budget', header: 'Budget ($)', accessor: (item) => <span className="font-mono">${item.budget.toLocaleString()}</span> },
    { key: 'spent', header: 'Spent ($)', accessor: (item) => <span className="font-mono text-rose-400">${item.spent.toLocaleString()}</span> },
    { key: 'progressPercent', header: 'Completion Progress', accessor: (item) => (
      <div className="w-32 flex items-center gap-2">
        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: `${item.progressPercent}%` }} />
        </div>
        <span className="font-mono text-[11px] font-bold">{item.progressPercent}%</span>
      </div>
    ) },
    { key: 'status', header: 'Status', accessor: (item) => <Badge variant="info">{item.status.toUpperCase()}</Badge> }
  ];

  const expenseColumns: Column<Expense>[] = [
    { key: 'expenseNumber', header: 'Expense #', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.expenseNumber}</span> },
    { key: 'employeeName', header: 'Employee', accessor: (item) => item.employeeName },
    { key: 'category', header: 'Category', accessor: (item) => <Badge variant="neutral">{item.category.toUpperCase()}</Badge> },
    { key: 'amount', header: 'Amount ($)', accessor: (item) => <span className="font-mono font-bold">${item.amount.toFixed(2)}</span> },
    { key: 'date', header: 'Date', accessor: (item) => item.date },
    { key: 'status', header: 'Approval', accessor: (item) => <Badge variant="success">{item.status.toUpperCase()}</Badge> }
  ];

  const allTasks: Task[] = projects.flatMap((p) => p.tasks || []);
  const taskKanbanColumns = [
    { id: 'todo', title: 'To Do', badgeColor: 'bg-gray-500', items: allTasks.filter((t) => t.status === 'todo') },
    { id: 'in_progress', title: 'In Progress', badgeColor: 'bg-blue-500', items: allTasks.filter((t) => t.status === 'in_progress') },
    { id: 'review', title: 'Code Review & QA', badgeColor: 'bg-amber-500', items: allTasks.filter((t) => t.status === 'review') },
    { id: 'done', title: 'Completed', badgeColor: 'bg-emerald-500', items: allTasks.filter((t) => t.status === 'done') }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Project Portfolio & Timesheets
            <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/40">Task Kanban</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage project budgets, task kanban boards, timesheet hours, and employee reimbursements.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['projects', 'kanban', 'expenses'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'projects' ? 'Project Portfolio' : t === 'kanban' ? 'Task Kanban Board' : 'Employee Expenses'}
          </button>
        ))}
      </div>

      {subTab === 'projects' && (
        <DataGrid
          title="Project Portfolio Register"
          subtitle="Track project deliverables, customer commitments, and budget consumption"
          columns={projectColumns}
          data={projects}
          loading={loading}
        />
      )}

      {subTab === 'kanban' && (
        <KanbanBoard
          columns={taskKanbanColumns}
          renderCard={(task) => (
            <Card className="p-3 bg-gray-900 border-gray-700/80">
              <h5 className="text-xs font-semibold text-gray-100">{task.title}</h5>
              <p className="text-[11px] text-gray-400 mt-1">Assignee: {task.assigneeName}</p>
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-800 text-[11px]">
                <Badge variant={task.priority === 'urgent' ? 'danger' : 'warning'}>{task.priority.toUpperCase()}</Badge>
                <span className="font-mono text-gray-400">{task.loggedHours}/{task.estimatedHours} hrs</span>
              </div>
            </Card>
          )}
        />
      )}

      {subTab === 'expenses' && (
        <DataGrid
          title="Employee Expense Claims"
          subtitle="Travel, software, and operational expense reimbursements"
          columns={expenseColumns}
          data={expenses}
          loading={loading}
        />
      )}
    </div>
  );
};
