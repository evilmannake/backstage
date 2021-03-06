/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Transformer } from './index';

type AddLinkClickListenerOptions = {
  onClick: (e: MouseEvent, newUrl: string) => void;
};

export const addLinkClickListener = ({
  onClick,
}: AddLinkClickListenerOptions): Transformer => {
  return dom => {
    Array.from(dom.getElementsByTagName('a')).forEach(elem => {
      elem.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        if (target?.getAttribute('href')) {
          onClick(e, target.getAttribute('href')!);
        }
      });
    });

    return dom;
  };
};
