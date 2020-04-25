const initalState = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    stop: false
}
/* var dt = new Date(0) */
function reducer(state = initalState, action) {


    switch (action.type) {
        case "START_TIMER":
            if (state.milliseconds === 99) {
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
        // return {

        //     number: state.number,
        //     number2: state.number2 + 1
        //     /* number: setInterval(state.number, 1000) */
        // }
        // Don't need stop action
        case "STOP_TIMER":
            return {
                stop: true,
                ...state
            }
        case "RESET_TIMER":
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