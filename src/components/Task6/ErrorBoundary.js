import React, {Component} from "react";
export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false 
    };
    }
  componentDidCatch(error,info){
      console.log('error',error)
      console.log('info',info)
      this.state({hasError:true});
  }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Произошла Ошибка :(</h1>;
      }
  else{ 

      return this.props.children;
    }
    }
  }