/**
 * Created with WebStorm
 * Description: Link$
 * Author: 张培博
 * Date: 2019/4/28
 */
import * as React from 'react';
export default class Link extends React.Component<any, any> {

  render() {
    return (
      <div>
        <input id="checked" defaultChecked />
        <input id="not" defaultChecked={false} />
        <input id="tertiary" defaultChecked  />
      </div>
    );
  }
}