// creating element

var React = require('react');
var ReactDOM = require('react-dom');

//var h1 = React.createElement(ReactElement, Props {}, Children);

var h1 = React.createElement('h1', {className: 'h1', key: 'h1'}, 'new element');
var div = document.getElementById('react-element');

ReactDOM.render(h1, div);

// creating nodes with fragment in a container

var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'this is a h1');
var p = React.createElement('p', {className: 'content', key: 'content'}, 'this is a p');

reactFragment = [h1, p];

var section = React.createElement('section', {className: 'container', key: 'container'}, reactFragment);

var div = document.getElementById('react-container');

ReactDOM.render(section, div);


var list1 = React.createElement('li', {className: 'item-1', key: 'item-1'}, 'Item-1');
var list2 = React.createElement('li', {className: 'item-2', key: 'item-2'}, 'Item-2');
var list3 = React.createElement('li', {className: 'item-3', key: 'item-3'}, 'Item-3');

var reactFragmentList = [list1, list2, list3];

var ul = React.createElement('ul', {className: 'list-items', key: 'list-items'}, reactFragmentList);

var div = document.getElementById('react-list');

ReactDOM.render(ul, div);

//creating nodes with createFactory

var createListItems = React.createFactory('li');

var element1 = createListItems({className: 'item-01', key: 'item-01'}, 'item-01');
var element2 = createListItems({className: 'item-02', key: 'item-02'}, 'item-02');
var element3 = createListItems({className: 'item-03', key: 'item-03'}, 'item-03');

var reactFragmentUL = [element1, element2, element3];

var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragmentUL);
var list = document.getElementById('react-list-items');

ReactDOM.render(listOfItems, list);

// creating elements simplfying factories

var element01 = React.DOM.li({className: 'item-001', key: 'item-001'}, 'item-001');
var element02 = React.DOM.li({className: 'item-002', key: 'item-002'}, 'item-002');
var element03 = React.DOM.li({className: 'item-003', key: 'item-003'}, 'item-003');

var reactFragmentListUL = [element01, element02, element03];
var listUL = React.DOM.ul({className: 'item-ul'}, reactFragmentListUL);
var container = document.getElementById('react-list-ul');
ReactDOM.render(listUL, container);

// creating element usin JSX

var listOfItemsJSX = <ul className="list-jsx">
                      <li className="item1">
                      </li>
                      <li className="item2">
                      </li>
                      <li className="item3">
                      </li>
                    </ul>;

var listContent = document.getElementById('react-list-jsx')

ReactDOM.render(listOfItemsJSX, listContent);













// end
