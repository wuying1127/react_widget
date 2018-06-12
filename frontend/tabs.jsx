import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0;
      title: [];
      content: [];
    }
  };

  render() {
    return (
      <ul>
        <li>
          <h1>One</h1>
          <article>I am the first</article>
        </li>

        <li>
          <h1>Second</h1>
          <article>I am the second</article>
        </li>

        <li>
          <h1>Third</h1>
          <article>I am the thrid</article>
        </li>
      </ul>
    )
  };
};

export default Tabs;
