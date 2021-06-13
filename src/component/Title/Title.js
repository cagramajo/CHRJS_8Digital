import React, { Component } from 'react'
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

export default Title;