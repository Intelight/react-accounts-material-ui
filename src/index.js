import React from 'react';
import Accounts from 'graphql-accounts';
import {
  Paper
} from 'material-ui';
import Flexbox from 'flexbox-react';

const styles = {
  content: {
    padding: '20px 40px',
  },
  button: {
    margin: 12,
  },
  title: {
    textAlign: 'center',
  },
};

Accounts.ui.Title = () => <div style={styles.title}><h2>{Accounts.ui._options.title}</h2></div>

Accounts.ui.Wrapper = ({
  children,
}) =>
  <Flexbox flexDirection="column" justifyContent="center">
    <Paper style={styles.content}>
      {children}
    </Paper>
  </Flexbox>
