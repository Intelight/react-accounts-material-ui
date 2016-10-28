import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Fields } from './index';

storiesOf('Accounts', module)
  .addWithInfo('login fields', () => (
    <div style={{ maxWidth: 500 }}>
      <Fields formType="login" />
    </div>
  ));
