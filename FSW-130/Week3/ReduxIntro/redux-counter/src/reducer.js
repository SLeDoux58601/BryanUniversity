import { START_TIMER, RESET_TIMER } from './actions'

const initalState = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0
}

function reducer(state = initalState, action) {


    switch (action.type) {
        case START_TIMER:
            if (state.milliseconds === 10) {
                return {
                    minutes: state.minutes,
                    seconds: state.seconds + 1,
                    milliseconds: state.milliseconds = 0
                }
            }
            else if (state.seconds === 59) {
                return {
                     minutes: state.minutes + 1,
                    seconds: state.seconds = 0,
                    milliseconds: state.milliseconds
                }
            }
            else {
                return{
                minutes: state.minutes,
                seconds: state.seconds,
                milliseconds: state.milliseconds + 1
            }
        }
       
        case RESET_TIMER:
            return {
                seconds: state.seconds = 0,
                minutes: state.minutes = 0,
                milliseconds: state.milliseconds = 0
            }
        default: {
            return state
        }
    }
}

export default reducer