import * as types from './ActionType'; //ActionTypes에서 export 한 것을 한번에 가져와 typs로 묶어준다.

export function showInfo (_info) {
    return {
        type : types.SHOW_INFO,
        info : _info //어떤 info를 가져다 줄지
    }
}

export function hideInfo () {
    return {
        type : types.HIDE_INFO
    }
}