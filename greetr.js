(function(global, $) {
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

var supportedLangs = ['en', 'es'];

var formalGreetings = {
    en: 'Greetings ',
    es: 'Saludos '
}

var casualGreetings = {
    en: 'Hello ',
    es: 'Hola '
}
var formalGreeting = function(firstname, lastname, language) {
    return formalGreetings[language] + firstname + ' ' + lastname;
}
var casualGreeting = function(firstname, language) {
    return casualGreetings[language] + firstname + '!!';
}
var validateLang = function(lang) {
    if(supportedLangs.indexOf(lang) === -1) {
        throw 'Language not supported'
    }
}
Greetr.prototype = {
    setLang: function(lang) {
        validateLang(lang);
        this.language = lang;
        return this;
    },
    greet: function(formal) {
        validateLang(this.language);
        if(formal) {
            console.log(formalGreeting(this.firstname, this.lastname, this.language));
        } else {
            console.log(casualGreeting(this.firstname, this.language));
        }
        return this;
    }
}

Greetr.init = function (firstname, lastname, language) {
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = language || 'en';
};

Greetr.init.prototype = Greetr.prototype;

global.Greetr = global.G$ = Greetr;

}(window, jQuery));
