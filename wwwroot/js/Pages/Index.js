class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Logo, null),
            React.createElement(
                "p",
                null,
                "Hello ",
                this.props.name
            )
        );
    }
}

class Logo extends React.Component {
    render() {
        return React.createElement("img", { src: "https://aspnetmonsters.com/images/logo_579.png" });
    }

}

ReactDOM.render(React.createElement(HelloMessage, { name: "Monsters" }), mountNode);