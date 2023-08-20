import { usePopUpStore } from "@/store/popUpStore";
import { useEffect, useState } from "react"
import { useId } from "./useId";

export const usePopupController = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const popupId = useId();

    const closePopup = usePopUpStore(state => state.close);
    const openPopup = usePopUpStore(state => state.open);
    const push = usePopUpStore(state => state.push);
    const remove = usePopUpStore(state => state.remove);
    
    useEffect(() => {
        if (!popupId) return;

        push(
            popupId,
            () => setIsOpened(false),
            () => setIsOpened(true),
        )

        return () => {
            remove(popupId)
        }
    }, [popupId])

    const toggle = () => {
        if (!popupId) return;

        isOpened ? closePopup(popupId) : openPopup(popupId)
    }

    const close = () => {
        if (!popupId) return;
        closePopup(popupId)
    }

    const open = () => {
        if (!popupId) return;
        openPopup(popupId)
    }

    return { isOpened, popupId, close, open, toggle }
}