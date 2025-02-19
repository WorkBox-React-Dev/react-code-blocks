import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import CopyBlock, { CopyBlockProps } from './components/CopyBlock';
const CopyBlockWithTheme = withTheme(CopyBlock);

export default function(props: PropsWithChildren<CopyBlockProps>) {
  return <CopyBlockWithTheme {...props} />;
}
