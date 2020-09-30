import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should change value to opposite value', () => {

    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(true)
})

test('reducer should change value to opposite value', () => {

    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(false)
})

test('reducer should change value to opposite value', () => {

    const state: StateType = {
        collapsed: true
    }
    expect( () => { reducer(state, {type: "FAKETYPE"}) }).toThrowError(); // Говорим тут, что ожидается ошибка ( и тест пройдет успешно )
})