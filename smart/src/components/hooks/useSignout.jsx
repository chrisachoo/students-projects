import { useAuthContext } from "./useAuthContext"

export const useSignout = () => {
    const { dispatch } = useAuthContext()

    const signout = () => {
        sessionStorage.removeItem('user')
        dispatch({type: 'SIGNOUT'})
    }

    return {signout}
}