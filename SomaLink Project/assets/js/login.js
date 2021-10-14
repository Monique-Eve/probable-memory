const loginUser = () => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(() => {
            window.alert('Login successfulx!');
            window.location.assign('home.html');
        })
        .catch(err => window.alert(err.message));
}