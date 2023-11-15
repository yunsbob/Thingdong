export interface ThingsModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThingsStatus {
  deviceId: string;
  smartThingsStatus: boolean;
}
