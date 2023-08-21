import { GoogleAuthProvider } from "firebase/auth";
import undraw from "../../assets/signUp.svg";
import { useAuth } from "../../contexts/auth-context";
const SignUp = () => {
  const { googleSignIn } = useAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center">
      <div>
        <img src={undraw} className="w-80"></img>
        <div className="flex justify-center">
          <button
            onClick={handleGoogle}
            className="px-6 py-3 mt-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
          >
            Google SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
