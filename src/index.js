import React from 'react';
import Accounts from 'graphql-accounts';
import {
  Paper,
  TextField,
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

const Title = () => <div style={styles.title}><h2>{Accounts.ui._options.title}</h2></div>;

export { Title };

Accounts.ui.Title = Title;

const Wrapper = ({
  children,
}) =>
  <Flexbox flexDirection="column" justifyContent="center">
    <Paper style={styles.content}>
      {children}
    </Paper>
  </Flexbox>;

Wrapper.propTypes = {
  children: React.PropTypes.node,
};

export { Wrapper };

Accounts.ui.Wrapper = Wrapper;

const LoginFields = () => (
  <Flexbox flexDirection="column">
    <TextField
      fullWidth
      name="user"
      floatingLabelText="Username or email"
    />
    <TextField
      fullWidth
      name="password"
      type="password"
      hintText="Password"
      floatingLabelText="Password"
    />
  </Flexbox>
);

const Fields = ({
  formType,
}) => { // eslint-disable-line consistent-return
  switch (formType) {
    case 'login':
      return <LoginFields />;
    default:
      break;
  }
};

Fields.propTypes = {
  formType: React.PropTypes.string,
};

export { Fields };

Accounts.ui.Fields = Fields;
