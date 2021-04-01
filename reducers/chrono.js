import { LAUNCH, START, STOP, RESET, SAVE, RESET_SAVES } from '../constants/actions';


const initialState = {
    h: 0,
    m: 0,
    s: 0,
    statut: false,
    times: []
}

const reducerChrono = (state = initialState, action = {}) => {
    const { h, m, s, statut, times } = state;

    switch (action.type) {

        case LAUNCH:
            return {
                ...state,
                statut: true
            }

        case START:

            if (statut) {

                if (s < 59) {

                    return {
                        ...state,
                        s: s + 1
                    }
                } else {
                    if (m < 59) {

                        return {
                            ...state,
                            m: m + 1,
                            s: 0
                        }
                    } else {
                        return {
                            ...state,
                            h: h + 1,
                            m: 0
                        }
                    }
                }
            } else {
                return {
                    ...state,

                }

            }


        case STOP:
            return {
                ...state,
                statut: false
            }

        case RESET_SAVES:
            return {
                ...state,
                times: []
            }

        case RESET:
            return {
                ...state,
                h: 0,
                m: 0,
                s: 0,
                statut: false,
            }

        case SAVE:

            if (!statut) {
                return {
                    ...state,
                    times: times.concat(h + 'h ' + m + 'm ' + s + 's')
                }
            } else {
                return {
                    ...state,
                }
            }

        default:
            return initialState;
    }
}

export default reducerChrono;