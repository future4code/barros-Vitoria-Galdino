import {useNavigate} from 'react-router-dom';

function useBack(page) {
    const navigate = useNavigate()

    const goTo = () => {
        navigate(page)
    }

    return goTo
}

export default useBack;