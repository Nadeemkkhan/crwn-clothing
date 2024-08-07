import SignInForm from '../../componenets/sign-in-form/sign-in-form.component';
import SignUpForm from '../../componenets/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';


const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;