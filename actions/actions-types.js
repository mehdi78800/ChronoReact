import { LAUNCH, START, STOP, RESET, SAVE , RESET_SAVES} from '../constants/actions';

export const launchChrono = () => {
    return {
        type: LAUNCH
    }
}

export const startChrono = () => {
    return {
        type: START
    }
}

export const stopChrono = () => {
    return {
        type: STOP
    }
}

export const resetChrono = () => {
    return {
        type: RESET
    }
}

export const saveChrono = () => {
    return {
        type: SAVE
    }
}

export const resetSaves = () => {
    return {
        type: RESET_SAVES
    }
}