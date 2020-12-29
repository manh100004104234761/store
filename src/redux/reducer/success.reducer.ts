export interface ISuccessState {
  status: boolean;
  message: string;
}
const initialState = {
  status: false,
  message: '',
};

export default function reducer(
  state: ISuccessState = initialState,
  action: any
) {
  switch (action.type) {
    case 'SET_SUCCESS_NOTI': {
      return {
        status: true,
        message: action.payload,
      };
    }
    case 'CLEAR_SUCCESS_NOTI': {
      // Don't go lower than zero
      return initialState;
    }
    default: {
      return state;
    }
  }
}
