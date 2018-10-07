import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-fab/paper-fab.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
/**
An action within a material design [Floating Action Button with Speed Dial](https://www.google.com/design/spec/components/buttons-floating-action-button.html#buttons-floating-action-button-transitions)

### Styling

Style                                                   | Description
------------------------------------------------------- | ------------
--paper-fab-speed-dial-action-label-color               | The text color of label
--paper-fab-speed-dial-action-label-background          | The background color of label
--paper-fab-speed-dial-action-background                | The background color of the Floating Action Button
--paper-fab-speed-dial-action-keyboard-focus-background | The background color of the Floating Action Button when focused

### Example

```html
<paper-fab-speed-dial-action icon="icons:content-copy">Copy</paper-fab-speed-dial-action>
```

@demo demo/index.html
*/
Polymer({
    is: 'paper-fab-speed-dial-action',
    _template: html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          @apply --layout-end-justified;
          margin-top: 15px;
          margin-right: 8px;
          /** For IE11: otherwise the label overlays the FAB */
          min-width: 270px;
        }

        .label {
          color: var(--paper-fab-speed-dial-action-label-color, black);
          background: var(--paper-fab-speed-dial-action-label-background, white);
          padding: 5px 10px;
          border-radius: 3px;
          margin-right: 20px;
        }

        .fab {
          --paper-fab-background: var(--paper-fab-speed-dial-action-background);
          --paper-fab-keyboard-focus-background: var(--paper-fab-speed-dial-action-keyboard-focus-background);
        }

        .label,.fab {
          display: inline-block;
        }
      </style>

      <div class="flex"><span class="label"><slot></slot></span></div>
      <paper-fab class="fab" icon=[[icon]] mini></paper-fab>
    `,
		properties: {
        /**
         * Icon that is shown next to the content
         */
        icon: String
		}
});
