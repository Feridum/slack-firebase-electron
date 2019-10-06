import firebase from "firebase/app";
import 'firebase/firestore';
import {firebaseConfig} from "./config";

export const USER = 'prelegent-electron';


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();
export const Timestamp = firebase.firestore.Timestamp;