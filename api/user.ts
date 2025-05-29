import {getApp} from '@react-native-firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  FirebaseAuthTypes,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
//import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  /* try {
    const response = await fetch('https://www.google.com');
    console.log('Conexión OK:', response.status);
  } catch (e) {
    console.log('❌ Sin conexión a internet');
  } */
  try {
    const app = getApp();
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, {displayName: fullName});
    //const user = await auth().createUserWithEmailAndPassword(email, password);
    //await user.user.updateProfile({ displayName: fullName });
    //console.log(userCredential);
    return userCredential;
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;

    if (authError.code === 'auth/email-already-in-use') {
      //console.log('That email address is already in use!');
      return {error: 'The email you entered is already in use.'};
    } else if (authError.code === 'auth/invalid-email') {
      //console.log('That email address is invalid');
      return {error: 'Please enter a valid email address.'};
    }
    //console.log(authError);
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const app = getApp();
    const auth = getAuth(app);
    const response = await signInWithEmailAndPassword(auth, email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
    if (authError.code === 'auth/wrong-password') {
      return {status: false, error: 'Please enter a correct password'};
    } else if (authError.code === 'auth/user-not-found') {
      return {
        status: false,
        error:
          'The email you entered does not exist. Please create a new account.',
      };
    }
    return {status: false, error: 'Something went wrong'};
  }
};

export const logOut = async () => {
  const app = getApp();
  const auth = getAuth(app);
  await signOut(auth);
};
