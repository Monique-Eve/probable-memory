const registerUser = () => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(() => {
            window.alert('Account created successfully!');
            window.location.assign('index.html');
        })
        .catch(err => window.alert(err.message));
}