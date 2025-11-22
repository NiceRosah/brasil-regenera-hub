import React from "react";

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: any; info?: any }
> {
  constructor(props:any){
    super(props);
    this.state = { error: null, info: undefined };
  }
  static getDerivedStateFromError(error:any) { return { error }; }
  componentDidCatch(error:any, info:any) { this.setState({ error, info }); console.error(error, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{padding:24}}>
          <h1>Erro na aplicação</h1>
          <pre>{String(this.state.error)}{this.state.info?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
