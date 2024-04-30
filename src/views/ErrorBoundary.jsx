import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error, errorInfo){
        console.error('Error caught by errorBoundary', error, errorInfo);
    }
    
  render() {
    if (this.state.hasError) {
        <div className='h-screen flex justify-center items-center bg-black'>
    <div className=' text-white font-semibold text-2xl'>Oops!, Something went wrong...</div>
  </div>
  ;
      }
  
      return this.props.children;
  }
}


export default ErrorBoundary;