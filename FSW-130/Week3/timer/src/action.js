// const START_TIMER = 'START_TIMER'
// const STOP_TIMER = 'STOP_TIMER'
// const RESET_TIMER = 'RESET_TIMER'
export function startTimer() {
    return {
        type: "START_TIMER",
    }
}

export function resetTimer() {
    return {
        type: "RESET_TIMER",
    }
}

export function stopTimer() {
    return {
        type: "STOP_TIMER",
    }
}