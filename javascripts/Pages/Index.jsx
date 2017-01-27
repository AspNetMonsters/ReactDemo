class HelloMessage extends React.Component {
  render() {
    return <div>
        <Logo/>
        <p>
        Hello {this.props.name}
        </p>
        </div>;
  }
}

class Logo extends React.Component {
    render(){
        return <img src="https://aspnetmonsters.com/images/logo_579.png"/>;
    }

}

ReactDOM.render(<HelloMessage name="Monsters" />, mountNode);