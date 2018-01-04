window.$ = window.jQuery = require('jquery');
//window.Popper = require('popper.js').default;
//require('bootstrap');

function updateTermsCheck(target) {
    const $terms = $(target);

    $terms.parents('.js-form').find('.js-submit').prop('disabled', !$terms.prop('checked'));
}

$(document).ready(() => {
    $('.js-terms')
        .each((i, target) => updateTermsCheck(target))
        .change(event => updateTermsCheck(event.target));

    const user = localStorage.getItem('auth.user');
    const pass = localStorage.getItem('auth.pass');

    if (user) {
        $('.js-auth-user').val(user).prop('readonly', true);
        $('.js-auth-pass').val(pass);
        $('.js-auth-pass-group').hide();
        $('.js-voucher-form').hide();
    }
});

window.saveCredentials = function () {
    localStorage.setItem('auth.user', $('.js-auth-user').val());
    localStorage.setItem('auth.pass', $('.js-auth-pass').val());
};

window.clearCredentials = function () {
    localStorage.clear();
};
