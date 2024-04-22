var e = React.createElement;

class HelloWorld extends React.Component
{
    render() {
        return e(
            "div",
            null,
            "Hello World"
        );
    }
}

console.log("hi")
const containerElement = document.getElementById('blabla');
ReactDOM.render(e(HelloWorld), containerElement);
