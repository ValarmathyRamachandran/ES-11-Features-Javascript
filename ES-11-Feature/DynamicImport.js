function eventHandler() {
    import('./module1.js')
        .then((ns) => {
            // use the module 
            ns.func();
        })
        .catch((error) => {
            // handle error
        });
}

import {show} from './dialog.js';

let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    show('Hi');
});

let btn = document.querySelector('#show');

btn.addEventListener('click', function() {
    import('./dialog.js')
        .then(( dialog ) => {
            dialog.show();
        })
        .catch( error => {
            // handle error here
        });
});