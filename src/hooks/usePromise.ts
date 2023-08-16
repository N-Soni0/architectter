import { useCallback, useState } from "react"

export const usePromise = <TArgs, R>(asyncFunction: (...args: TArgs[]) => Promise<R>) => {
    const [result, setResult] = useState<Maybe<R>>(null);
    const [error, setError] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const run = useCallback(async (...args: TArgs[]) => {
        try {
            setIsLoading(true);
            const fetchedResult = await asyncFunction(...args)

            setResult(fetchedResult);
            return fetchedResult;
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
        
    }, [asyncFunction])

    return {
        result,
        error,
        isLoading,
        run
    }
}