import React from 'react';
import { yuan } from '@/components/Charts';
/**
 * 减少使用 dangerouslySetInnerHTML
 */
export default class Yuan extends React.PureComponent<any, any> {
  main;

  componentDidMount() {
    this.rendertoHtml();
  }

  componentDidUpdate() {
    this.rendertoHtml();
  }

  rendertoHtml = () => {
    const { children }: any = this.props;
    if (this.main) {
      this.main.innerHTML = yuan(children);
    }
  };

  render() {
    return (
      <span
        ref={ref => {
          this.main = ref;
        }}
      />
    );
  }
}
