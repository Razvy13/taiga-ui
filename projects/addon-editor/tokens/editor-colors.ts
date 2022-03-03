import {InjectionToken} from '@angular/core';
import {defaultEditorColors} from '@taiga-ui/addon-editor';

export const TUI_EDITOR_DEFAULT_COLORS = new InjectionToken<ReadonlyMap<string, string>>(
    'Default Editor colors',
    {
        factory: () => defaultEditorColors,
    },
);
