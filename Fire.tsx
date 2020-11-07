import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCwTU6CX9cBOrIDjEwwVT37vLJkVRQcZWY',
  authDomain: 'doom-fff37.firebaseapp.com',
  databaseURL: 'https://doom-fff37.firebaseio.com',
  projectId: 'doom-fff37',
  storageBucket: 'doom-fff37.appspot.com',
  messagingSenderId: '715745267751',
  appId: '1:715745267751:web:11d54357ec4e9e8bbc7e02',
};

class Fire {
  static shared: Fire;
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  addPost = async ({
    redBlood,
    platelets,
    wholeBlood,
    name,
    bloodType,
    hospitalName,
    text,
    localUri,
  }: any) => {
    const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`);

    return new Promise((res, rej) => {
      this.firestore
        .collection('posts')
        .add({
          redBlood,
          platelets,
          wholeBlood,
          name,
          bloodType,
          hospitalName,
          text,
          uid: this.uid,
          timestamp: this.timestamp,
          image: remoteUri,
        })
        .then((ref) => {
          res(ref);
        })
        .catch((error) => {
          rej(error);
        });
    });
  };

  uploadPhotoAsync = async (uri: any, filename: any) => {
    return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = firebase
        .storage()
        .ref(filename)
        .put(file);

      upload.on(
        'state_changed',
        (snapshot) => {},
        (err) => {
          rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        },
      );
    });
  };

  createUser = async (user: any) => {
    let remoteUri = null;

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      let db = this.firestore.collection('users').doc(this.uid);

      db.set({
        name: user.name,
        email: user.email,
        avatar: null
      });

      if (user.avatar) {
        remoteUri = await this.uploadPhotoAsync(
          user.avatar,
          `avatars/${this.uid}`
        );

        db.set({ avatar: remoteUri }, { merge: true });
      }
    } catch (error) {
      alert('Error: ', error);
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;
