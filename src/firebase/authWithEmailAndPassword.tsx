import {
  getAuth,
  UserCredential,
  getIdTokenResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, get, child } from "firebase/database";
import firebase from "firebase/app";

export async function authWithEmailAndPassword(
  email: string,
  password: string,
): Promise<UserCredential | void> {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Проверка, является ли пользователь новым
    const idTokenResult = await getIdTokenResult(userCredential.user);
    if (idTokenResult.claims.newUser) {
      console.log("Новый пользователь!");
    }

    return userCredential;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      // Если пользователь уже существует, попробуем войти
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        ).then((userCredential) => {
          // Signed in
          const user = userCredential;
          console.log("user" + JSON.stringify(user.user.email));

          /*  const db = getDatabase();
              const tasksRef = ref(db);
              get(child(tasksRef,'tasks/')).then((snapshot) => {
                if (snapshot.exists()) {
                  console.log("DB "+ JSON.stringify(snapshot.val()));
                }
          
            }) */
          console.log("userCredential" + userCredential);
          return userCredential;
        });
        console.log("userCredential" + userCredential);
        return userCredential;
      } catch (signInError: any) {
        const errorMessage = signInError.message;
        console.log("Ошибка входа: " + errorMessage);
        // renderErrorModal(errorMessage);
        return;
      }
    } else {
      const errorCode = error.code;
      console.log("Ошибка: " + errorCode);

      const errorMessage = error.message;
      console.log("Сообщение об ошибке: " + errorMessage);
      // renderErrorModal(errorMessage);
      return;
    }
  }
}
