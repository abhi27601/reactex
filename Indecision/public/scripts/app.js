"use strict";

console.log("aaaaaaaaaaa");

//JSX
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "Hell Boy !! you started"
    ),
    React.createElement(
        "h1",
        null,
        "My first react with Babel"
    )
);
//var template = React.createElement("p", null, "This is my first react app");
var user = {
    name: "Abhijit",
    age: 26,
    location: 'bangalore'

    //<p>My location: {getlocation(user.location)}</p>
};function getlocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "My location:",
            location
        );
    }
    /*else{
        return "";
    }*/
}
var username = "Abhi";
var userage = 26;
var userlocation = 'Bangalore';
var temp2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        username.toUpperCase(),
        "!"
    ),
    React.createElement(
        "p",
        null,
        "My Age: ",
        userage
    ),
    React.createElement(
        "p",
        null,
        "My location: ",
        userlocation
    )
);

var temp3 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name.toUpperCase() : 'Anonymous',
        "! From Object"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "My Age: ",
        user.age
    ),
    getlocation(user.location)
);
var app = {
    title: "Indecision App",
    subtitle: "To do list",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {

    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderindecision();
};
var removeall = function removeall() {
    app.options.length = 0;
    renderindecision();
};

var appid = document.getElementById("app");
var numbers = [55, 101, 1000];

var renderindecision = function renderindecision() {
    var temp5 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            " ",
            app.options.length > 0 ? 'Here are options' : 'No options'
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number:",
                number * 2
            );
        }),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "List one"
            ),
            React.createElement(
                "li",
                null,
                "List two"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                { onClick: removeall },
                "RemoveAll button"
            ),
            React.createElement(
                "button",
                { type: "submit" },
                " Add Button "
            )
        )
    );
    ReactDOM.render(temp5, appid);
};
renderindecision();
