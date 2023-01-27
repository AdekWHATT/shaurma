import { observable, action } from "mobx";
import firebase from "./firebasemy";

class FirebaseStore {
  @observable 
  myData = null;

  @action
  fetchMyData = async () => {
    const snapshot = await firebase.database().ref("/path/to/data").once("value");
    this.myData = snapshot.val();
  }
}

const firebaseStore = new FirebaseStore();
export default firebaseStore;
