/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from 'RCTExport';
import * as TurboModuleRegistry from 'TurboModuleRegistry';

export interface Spec extends TurboModule {
  +getSize: (url: string) => Promise<Object>;
  +getSizeWithHeaders: (url: string, headers: Object) => Promise<Object>;
  +prefetchImage: (url: string, requestId: number) => Promise<Object>;
  +abortRequest: (requestId: number) => void;
  +queryCache: (uris: Array<string>) => Promise<Object>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeImageLoader');
