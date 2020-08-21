import React, { useState, useEffect, Component }  from 'react';
import '../App.css';
import '../index.css';


function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  const [count2, seCount2] = useState(0);
  const [str, setStr] = useState("aasasa"); //boleh null


  function updateCount(inc){
    setCount(count + inc)
  }

  useEffect(() => {
    console.log('mount component');

    return function cleanup() {
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    console.log('count updated: ', count);
  }, [count])

  return (
    <div className="card top">
      <style jsx="true">{`
        h4 {
          background: aqua;
        }

        .btn{
          background: black;
          color: white;
        }
        .card{
          border: 1px solid;
          padding: 10px;
          margin: 20px;
          background: salmon;
        }
    `}</style>
      <h1 className="header-text">{props.title}</h1>
      <h4>{props.subTitle}</h4>
      {/* setnya disini */}
      <p>contoh string {str}</p> 
      {/* mengubahnya */}
      <button className="btn" onClick={() => setStr('cobaaaaaaaaaaaaaa')}>
       change string
      </button>

      <p>You clicked {count} times</p>
      <button onClick={() => updateCount(4)}>
        Click me
      </button>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => seCount2(count2 + 1)}>
        Click me
      </button>
    </div>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      count2: 2
     };
  }
  setCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  incCount2(){
    this.setState(state => {
      return {
        count2: state.count2 + 1
      }
    });
  }
  render() {
    return (
      <div className="card bottom">
        <h1 className="header-text">{this.props.title}</h1>
        <h4
        style={{
          color: 'red'
        }}
        >{this.props.subTitle}</h4>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount()}>
          Click me
        </button>


        <p>You clicked {this.state.count2} times</p>
        <button onClick={() => this.incCount2()}>
          Click me
        </button>
      </div>
    );
  }
}

function FunctionVsClass() {
  return (
    <div className="App">
      <FunctionComponent title="Function Comp" subTitle="subtitlee 1"/>
      <hr/>
      <ClassComponent title="Class comp" subTitle="subtitlee 2"/>
    </div>
  );
}

export default FunctionVsClass;
