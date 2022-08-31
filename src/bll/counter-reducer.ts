const initialState = {
    startValue: 0,
    maxValue: 5,
    incValue: 0,
    isChangeSettings: false
}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INC-VALUE":
            return {...state, incValue: action.value}
        case "SET-START-VALUE":
            return {...state, startValue: action.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.value}
        case "SET-IS-CHANGE-SETTINGS":
            return {...state, isChangeSettings: action.isChange}
        default:
            return state
    }
}

export const setIncValue = (value: number) => ({type: 'SET-INC-VALUE', value} as const)
export const setStartValue = (value: number) => ({
    type: 'SET-START-VALUE',
    value
} as const)
export const setMaxValue = (value: number) => ({type: 'SET-MAX-VALUE', value} as const)
export const setIsChangeSettings = (isChange: boolean) => ({
    type: 'SET-IS-CHANGE-SETTINGS',
    isChange
} as const)

type SetIncValueType = ReturnType<typeof setIncValue>
type SetStartValueType = ReturnType<typeof setStartValue>
type SetMaxValueType = ReturnType<typeof setMaxValue>
type SetIsChangeSettingsType = ReturnType<typeof setIsChangeSettings>

type CounterReducerActionType =
    SetIncValueType
    | SetStartValueType
    | SetMaxValueType
    | SetIsChangeSettingsType