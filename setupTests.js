const { configure }  =require ('enzyme');
const Adapter = require ('enzyme-adapter-react-16');
// import {default as Adapter} from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });