export interface ThingsModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThingsStatus {
  deviceId: string;
  smartThingsStatus: boolean;
}

export interface ThingsCommands {
  component: string;
  capability: string;
  command: string;
  arguments: [];
}

export interface ToggleThingsStatus {
  commands: ThingsCommands[]
}