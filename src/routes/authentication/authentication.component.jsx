import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';
  
import SignUpForm from '../../componenets/sign-up-form/sign-up-form.component';
  const Authentication = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default Authentication;