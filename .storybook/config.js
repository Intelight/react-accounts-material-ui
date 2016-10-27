import { configure, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';

addDecorator(muiTheme());

const req = require.context('../src', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
