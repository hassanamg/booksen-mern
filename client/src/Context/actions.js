import axios from 'axios'
const API_URL = "http://localhost:4000"


export async function signup(dispatch, signupPayload) {

  try {
    dispatch({type: "REQUEST_SIGNUP"})
    const registerUser = await axios({

      method: "POST",
      url: `${API_URL}/signup`,
      data: signupPayload
    })
    console.log(registerUser)
   
    if(registerUser.data.status === "success") {
 
      dispatch({type: "SIGNUP_SUCCESS", payload: registerUser.data} )
      localStorage.setItem('currentUser', JSON.stringify(registerUser.data))
      console.log(registerUser.data.photo)
    }
        //  dispatch({ type: 'LOGIN_ERROR', error: registerUser.errors[0] });
  } catch(error) {
console.log(error)
 dispatch({ type: 'LOGIN_ERROR',  error: error.response.data.message });
  }
}
export async function loginUser(dispatch, loginPayload) {

   
    try {
        dispatch({type: "REQUEST_LOGIN"})
        const userData = await axios({

            method: 'POST',
            url: `${API_URL}/login`,
            data: loginPayload
            // headers:{"Content-Type" : "application/json"}
        })
        
        //let data = await response.json()
        //console.log(loginPayload.email)
        if(userData.data.status === "success") {
            dispatch({type:'LOGIN_SUCCESS', payload: userData.data})
            localStorage.setItem('currentUser', JSON.stringify(userData.data))
          
            return userData
        }
      dispatch({ type: 'LOGIN_ERROR', error: userData.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR',  error: error.response.data.message });
   //console.log(error.response.data.message)
  }
}
export async function logout(dispatch) {

    dispatch({type: 'LOGOUT'})
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
}