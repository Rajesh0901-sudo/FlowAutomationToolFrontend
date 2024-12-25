import { runQueryAPI } from "../../services/api";

export const runQuery = (queryDetails) => async (dispatch) => {
  dispatch({ type: 'QUERY_START' });

  const [response,code] = await runQueryAPI(JSON.stringify(queryDetails))
  
//   if(code && code == 200){
//     dispatch({ type: 'QUERY_SUCCESS' });
//     alert(response.data.message);
//   }
//   else{
//     dispatch({ type: 'QUERY_FAILURE', payload: response });
//     alert(response.data.error);
//   }

  if (code && code===200){

    console.log(response)

    if(response.data?.message){
        dispatch({ type: 'QUERY_SUCCESS' });
        alert(response.data.message);
    }
    else{
        dispatch({ type: 'QUERY_FAILURE', payload: response.data });
        alert(response.data?.error);
    }
  }
  else{
    dispatch({ type: 'QUERY_FAILURE', payload: response.data });
    alert("An Error Occured while Running Query");
    
  }


};