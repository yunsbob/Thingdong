export const changeModalOpen = (
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setModalOpen(!modalOpen);
};
