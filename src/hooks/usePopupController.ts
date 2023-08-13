import { usePopUpStore } from "@/store/popUpStore";
import { useEffect, useState } from "react"
import { useId } from "./useId";

export const usePopupController = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const closePopup = usePopUpStore(state => state.close);
    const openPopup = usePopUpStore(state => state.open);
    const push = usePopUpStore(state => state.push);
    const remove = usePopUpStore(state => state.remove);
    const popups = usePopUpStore(state => state.popUps);
    const popupId = useId();

    useEffect(() => {
        console.log(popups)
    }, [popups])

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

    const togglePopup = () => {
        if (!popupId) return;

        isOpened ? closePopup(popupId) : openPopup(popupId)
    }

    return { isOpened, popupId, closePopup, openPopup, togglePopup }
}