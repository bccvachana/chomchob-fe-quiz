import { map } from 'lodash/fp';
import { ICommonObject } from 'types/common';

export const mapWithIndex = (map as ICommonObject).convert({ cap: false });
