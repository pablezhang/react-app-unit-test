/**
 * Created with WebStorm
 * Description: $
 * Author: 张培博
 * Date: 2019/4/28
 */

import * as  React from 'react';
import Link from '../src/Link'
import {mount} from 'enzyme'

const wrapper = mount(<Link bar='bar'/>); // mount/render/shallow when applicable
test('the best flavor is grapefruit', () => {
  expect(wrapper.props().bar).toEqual('bar');
});
