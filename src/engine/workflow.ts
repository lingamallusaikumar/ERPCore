// ERPCore Visual Workflow Engine

import { Workflow, WorkflowNode, Approval, Notification } from '../types';
import * as Storage from '../lib/storage';

export interface WorkflowExecutionResult {
  workflowId: string;
  workflowName: string;
  triggerPayload: Record<string, any>;
  nodesExecuted: string[];
  approvalCreated?: Approval;
  notificationCreated?: Notification;
  status: 'completed' | 'paused_for_approval' | 'condition_failed';
}

export async function executeWorkflow(workflowId: string, triggerPayload: Record<string, any>): Promise<WorkflowExecutionResult> {
  const workflow = await Storage.getById<Workflow>('workflows', workflowId);
  if (!workflow || !workflow.active) {
    return { workflowId, workflowName: 'Unknown', triggerPayload, nodesExecuted: [], status: 'condition_failed' };
  }

  const nodesExecuted: string[] = [];
  let approvalCreated: Approval | undefined;
  let notificationCreated: Notification | undefined;
  let currentStatus: 'completed' | 'paused_for_approval' | 'condition_failed' = 'completed';

  for (const node of workflow.nodes) {
    nodesExecuted.push(node.title);

    if (node.type === 'condition') {
      const field = node.config?.field;
      const operator = node.config?.operator;
      const targetVal = node.config?.value;
      const actualVal = triggerPayload[field];

      let pass = true;
      if (operator === 'gt') pass = Number(actualVal) > Number(targetVal);
      else if (operator === 'gte') pass = Number(actualVal) >= Number(targetVal);
      else if (operator === 'eq') pass = String(actualVal) === String(targetVal);
      else if (operator === 'lt') pass = Number(actualVal) < Number(targetVal);

      if (!pass) {
        currentStatus = 'condition_failed';
        break;
      }
    } else if (node.type === 'approval') {
      const approverRole = node.config?.approverRole || 'FIN_MGR';
      const refNum = triggerPayload.invoiceNumber || triggerPayload.orderNumber || triggerPayload.requestNumber || 'REF-GEN';

      approvalCreated = {
        id: `appr-${Date.now()}`,
        approvalNumber: `APPR-${Math.floor(1000 + Math.random() * 9000)}`,
        module: workflow.module,
        referenceRecordId: triggerPayload.id || 'GEN-REC',
        referenceNumber: refNum,
        title: `${workflow.name} Approval Request for ${refNum}`,
        requestedBy: triggerPayload.createdBy || 'System Workflow',
        approverRole,
        amount: triggerPayload.grandTotal || triggerPayload.value || 0,
        status: 'pending',
        requestDate: new Date().toISOString()
      };

      await Storage.saveItem('approvals', approvalCreated);
      currentStatus = 'paused_for_approval';
      break;
    } else if (node.type === 'notification') {
      notificationCreated = {
        id: `notif-${Date.now()}`,
        title: `Workflow Alert: ${workflow.name}`,
        message: `Workflow executed for record ${triggerPayload.referenceNumber || 'Record'}`,
        type: 'info',
        module: workflow.module,
        timestamp: new Date().toISOString(),
        read: false
      };
      await Storage.saveItem('notifications', notificationCreated);
    }
  }

  return {
    workflowId: workflow.id,
    workflowName: workflow.name,
    triggerPayload,
    nodesExecuted,
    approvalCreated,
    notificationCreated,
    status: currentStatus
  };
}
