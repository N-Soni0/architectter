import { generateId } from "@/utils/generateId";
import { useEffect, useState } from "react"

export const useId = () => {
    const [id, setId] = useState<Maybe<string>>(null);

    useEffect(() => {
        setId(generateId());

        return () => {
            setId(null)
        }
    }, [])

    return id;
}