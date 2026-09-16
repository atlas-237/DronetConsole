export interface NewMissionData { name: string; description: string; }
export interface NewMissionModalProps { open: boolean; onClose?: () => void; onCreate?: (mission: NewMissionData) => void; }
