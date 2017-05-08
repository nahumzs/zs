// import React from 'react';
// import PropTypes from 'prop-types';
// import { render } from 'react-sketchapp';
// import Headers from './components/Headers/Headers';
// import Page from './components/Page/Page';
//
// const Sketch = context => {
//   const myPage = () => <Headers />;
//   console.log(myPage);
//   render(
//     <Page context={context} name="Im batman" />,
//     context.document.currentPage()
//   )
// }
//
// export default Sketch;


import React from 'react';
import { Artboard, View, Text, render } from 'react-sketchapp';
import ColorsSketch from './components/Colors/Colors.sketch';
import TypographySketch from './components/Typography/Typography.sketch';

let content = [
  <TypographySketch />,
  <ColorsSketch />,
];

export default context => {
    let document = context.document;
    while(document.pages().length > 1) {
        document.removePage(document.currentPage())
    }

    let pages = [context.document.currentPage()];
    while(pages.length < content.length) {
        pages.push(document.addBlankPage());
    }

    content.forEach((item, i) => {
        render(item, pages[i])
        let name = (item.type.name || `Page ${i}`)
        pages[i].name = name
    })
}
