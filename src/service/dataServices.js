import firebase from 'react-native-firebase'
export function getProducts(){
    return(
        firebase.firestore().collection('data')
    )
};
