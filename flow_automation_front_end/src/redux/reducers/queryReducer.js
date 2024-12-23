

const initialState = {
  status: '',
  error: null,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUERY_START':
      return { ...state, status: 'running', error: null };
    case 'QUERY_SUCCESS':
      return { ...state, status: 'success', error: null };
    case 'QUERY_FAILURE':
      return { ...state, status: 'failure', error: action.payload };
    default:
      return state;
  }
};

export default queryReducer;