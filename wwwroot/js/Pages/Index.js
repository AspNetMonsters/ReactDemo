class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Logo, null),
            React.createElement(
                "p",
                null,
                "Hello ",
                this.state.name
            ),
            React.createElement(NameBox, { name: this.state.name, update: name => this.update(name) })
        );
    }
    update(name) {
        this.setState({ name: name.target.value });
    }
}

class NameBox extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "label",
                { htmlFor: "name" },
                "Name"
            ),
            React.createElement("input", { name: "name", type: "textbox", value: this.props.name, onChange: this.props.update })
        );
    }
}

class Logo extends React.Component {
    render() {
        return React.createElement("img", { src: "https://aspnetmonsters.com/images/logo_579.png" });
    }

}

//ReactDOM.render(<HelloMessage name="Monsters" />, mountNode);