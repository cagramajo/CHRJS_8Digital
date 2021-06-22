/* import React, { Component } from 'react'
import {Header, Icon} from 'semantic-ui-react'

class Title extends Component {
    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>Mi e-comerce</Header.Content>
                </Header>
            </div>
        )
    }
}

export default Title; */

import React from "react";

export default function Title() {
  return (
    <div>
      <div>
        <h2 class="ui icon center aligned header">
          <i aria-hidden="true" class="users circular icon"></i>
          <div class="content">Mi e-comerce</div>
        </h2>
        <img
          src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
          class="ui large centered image"
        />
      </div>
    </div>
  );
}
