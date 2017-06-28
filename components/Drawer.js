import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './SideBar';

export default class MainDrawer extends Component {

    closeDrawer = () => {
      console.log("Open Drawer");
    };
    
    openDrawer = () => {
      console.log("Open Drawer");
    };

    render() {

        return (
            <Drawer
              ref={(ref) => { this._drawer = ref; }}
              content={<SideBar navigator={this._navigator} />}
              onClose={() => this.closeDrawer()}
            >
            // Main View
          </Drawer>
        );
    }
}
