import { runQueryAPI } from "../../services/api";

export const runQuery = (queryDetails) => async (dispatch) => {
  dispatch({ type: 'QUERY_START' });

  var[response,code] = await runQueryAPI(queryDetails)
  
  if(code && code == 200){
    dispatch({ type: 'QUERY_SUCCESS' });
    alert(response.data.message);
  }
  else{
    dispatch({ type: 'QUERY_FAILURE', payload: response });
    alert(response);
  }




};