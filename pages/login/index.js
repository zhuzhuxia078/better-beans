import { useAuth } from '../../firebase/auth_context';
import Meta from '../../components/Meta';

export default function LoginPage() {
  const { signInWithFirebase } = useAuth();
  return (
    <div className="container">
      <Meta />
      <div className="container">
        <h1>Login page</h1>
        <button
          type="button"
          className="google-btn-container"
          onClick={signInWithFirebase}
        >
          <div className="google-btn">
            <img
              className="google-logo"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              alt="google"
              width="25px"
              height="25px"
            />
            <h3 className="google-signin">
              Continue with Google
            </h3>
          </div>
        </button>
      </div>
    </div>
  );
}
