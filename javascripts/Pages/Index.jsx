class HelloMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: props.name };
    }
  render() {
    return <div>
                <Logo/>
                <p>
                    Hello {this.state.name}
                </p>
                <NameBox name={this.state.name} update={(name) => this.update(name)}/>
        </div>;
  }
  update(name)
  {
      this.setState({name: name.target.value});
  }
}

class NameBox extends React.Component{
    render(){
        return <div>
            <label htmlFor="name">Name</label>
            <input name="name" type="textbox" value={this.props.name} onChange={this.props.update}></input>
        </div>;
    }
}

class Logo extends React.Component {
    render(){
        return <img src="https://aspnetmonsters.com/images/logo_579.png"/>;
    }

}

//ReactDOM.render(<HelloMessage name="Monsters" />, mountNode);