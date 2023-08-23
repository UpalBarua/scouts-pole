import { GoogleAuthProvider } from "firebase/auth";
import undraw1 from "../../assets/signIn.svg";
import { useAuth } from "../../contexts/auth-context";
const SignIn = () => {
  const { googleSignIn } = useAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleSignIn(provider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="flex justify-center mt-8">
      <div>
        <img src={undraw1} className=" w-96"></img>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="px-6 py-3 mt-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
