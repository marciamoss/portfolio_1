import * as React from 'react';
import {
  PageSection,
  Title,
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Portfolio: React.FunctionComponent<ISupportProps> = () => (
  <PageSection className='wall-paper'>
      <Title headingLevel="h1" size="lg">
        Project list....
      </Title>
  </PageSection>
);

export { Portfolio };
