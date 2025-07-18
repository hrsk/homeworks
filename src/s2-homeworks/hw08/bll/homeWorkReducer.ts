import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'down') {
                return state.slice().sort((a, b) => b.name.localeCompare(a.name))
            } else if (action.payload === 'up') {
                return state.slice().sort((a, b) => a.name.localeCompare(b.name))
            } else return state
        }
        case 'check': {

            return state.filter(user => user.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
