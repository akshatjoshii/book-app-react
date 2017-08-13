/**
 * Created by Akshat on 12-08-2017.
 */
export default function (state=null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state;
}