import {useNavigate} from 'react-router-dom';

function useReturn() {
    const navigate = useNavigate()

    const goToReturn = () => {
        navigate(-1)
    }

    return goToReturn
}

export default useReturn;