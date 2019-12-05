import React, { Component } from "react";

export default function asyncComponent(importComponent: Function) {
  class AsyncComponent extends Component<{}, { component: any }> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <p>Loading...</p>;
    }
  }

  return AsyncComponent;
}
