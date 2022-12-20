import { EditManageCase } from "./EditManageCase"
import { ShowListImage } from "./ShowListImage"


export const MODAL_NAME = {
    EDIT_MANAGECASE: "EDIT_MANAGECASE",
    OPEN_IMAGEFILE: "OPEN_IMAGEFILE"
}

export const ModalTheme = ({ title, visible, onClose, useFor, data }) => {
    return (
        renderModalContent(useFor, onClose, data, title, visible)
    )
}

const renderModalContent = (useFor, onClose, data, title, visible) => {
    switch (useFor) {
        case MODAL_NAME.EDIT_MANAGECASE:
            return <EditManageCase title={title || "modal"} visible={visible} onClose={onClose} data={data} />
        case MODAL_NAME.OPEN_IMAGEFILE:
            return <ShowListImage title={title || "modal"} visible={visible} onClose={onClose} data={data} />
        default:
            break;
    }
}