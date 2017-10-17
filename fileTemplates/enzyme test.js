#set( $component = $NAME.replace(".test", "") )
import React from 'react';
import {shallow, mount} from 'enzyme';
import $component from '../index';

describe('<${component} />', () => {
it('#[[$name$]]#', () => {
const wrapper=shallow(<${component} />);
#[[$body$]]#
});
});