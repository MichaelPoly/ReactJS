function message(text) {
    console.log('message(text)', text);
}

function showUser() {
    console.log('showUser()');
}

export {message, showUser};

export default function (email) {
    console.log(email);
};