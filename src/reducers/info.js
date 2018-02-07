import * as types from '../actions/ActionType';

const initialState = { //default 값
    name : "user",
    mobile : "000-0000-0000",
    company : { //만약 아래에서 ...state가 없을 경우, company 내용은 사라지게 된다.
        name : "ese",
        ceo : "park"
    }
}

export default function info (state, action) {
    //만약 parameter로 state = initialState로 선언했을 경우, default value 값을 자동으로 넣어주므로 아래 내용은 생략해도 된다.
    console.log(state, action);
    if (typeof state === 'undefined') { //Store 처음 생성 시 한번 실행되도록 생성
        return initialState
    }

    //참고 공부 자료: es6 spread | es6 default value
    switch (action.type) {
        case types.SHOW_INFO: //...state: es6 문법으로, 기존 state에서 이하에 해당하는 key 값을 변경해준다.
            return {...state, name : action.info.name, mobile : action.info.mobile};
        case types.HIDE_INFO:
            return {...state, name : "", mobile : ""};
        default :
            return state;
    }
}