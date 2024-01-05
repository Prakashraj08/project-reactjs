/// <reference types="node" />
export var types: {
    access: (string | null)[];
    'allow-same-version': BooleanConstructor;
    'always-auth': BooleanConstructor;
    also: (string | null)[];
    audit: BooleanConstructor;
    'auth-type': string[];
    'bin-links': BooleanConstructor;
    browser: (StringConstructor | null)[];
    ca: (StringConstructor | ArrayConstructor | null)[];
    cafile: import("path").PlatformPath;
    cache: import("path").PlatformPath;
    'cache-lock-stale': NumberConstructor;
    'cache-lock-retries': NumberConstructor;
    'cache-lock-wait': NumberConstructor;
    'cache-max': NumberConstructor;
    'cache-min': NumberConstructor;
    cert: (StringConstructor | null)[];
    cidr: (StringConstructor | ArrayConstructor | null)[];
    color: (string | BooleanConstructor)[];
    depth: NumberConstructor;
    description: BooleanConstructor;
    dev: BooleanConstructor;
    'dry-run': BooleanConstructor;
    editor: StringConstructor;
    'engine-strict': BooleanConstructor;
    force: BooleanConstructor;
    'fetch-retries': NumberConstructor;
    'fetch-retry-factor': NumberConstructor;
    'fetch-retry-mintimeout': NumberConstructor;
    'fetch-retry-maxtimeout': NumberConstructor;
    git: StringConstructor;
    'git-tag-version': BooleanConstructor;
    'commit-hooks': BooleanConstructor;
    global: BooleanConstructor;
    globalconfig: import("path").PlatformPath;
    'global-style': BooleanConstructor;
    group: (StringConstructor | NumberConstructor)[];
    'https-proxy': (typeof import("url") | null)[];
    'user-agent': StringConstructor;
    'ham-it-up': BooleanConstructor;
    heading: StringConstructor;
    'if-present': BooleanConstructor;
    'ignore-prepublish': BooleanConstructor;
    'ignore-scripts': BooleanConstructor;
    'init-module': import("path").PlatformPath;
    'init-author-name': StringConstructor;
    'init-author-email': StringConstructor;
    'init-author-url': (string | typeof import("url"))[];
    'init-license': StringConstructor;
    'init-version': () => void;
    json: BooleanConstructor;
    key: (StringConstructor | null)[];
    'legacy-bundling': BooleanConstructor;
    link: BooleanConstructor;
    'local-address': never[];
    loglevel: string[];
    logstream: typeof import("stream").Stream;
    'logs-max': NumberConstructor;
    long: BooleanConstructor;
    maxsockets: NumberConstructor;
    message: StringConstructor;
    'metrics-registry': (StringConstructor | null)[];
    'node-options': (StringConstructor | null)[];
    'node-version': ((() => void) | null)[];
    'no-proxy': (StringConstructor | ArrayConstructor | null)[];
    offline: BooleanConstructor;
    'onload-script': (StringConstructor | null)[];
    only: (string | null)[];
    optional: BooleanConstructor;
    'package-lock': BooleanConstructor;
    otp: (StringConstructor | null)[];
    'package-lock-only': BooleanConstructor;
    parseable: BooleanConstructor;
    'prefer-offline': BooleanConstructor;
    'prefer-online': BooleanConstructor;
    prefix: import("path").PlatformPath;
    production: BooleanConstructor;
    progress: BooleanConstructor;
    provenance: BooleanConstructor;
    proxy: (boolean | typeof import("url") | null)[];
    'read-only': BooleanConstructor;
    'rebuild-bundle': BooleanConstructor;
    registry: (typeof import("url") | null)[];
    rollback: BooleanConstructor;
    save: BooleanConstructor;
    'save-bundle': BooleanConstructor;
    'save-dev': BooleanConstructor;
    'save-exact': BooleanConstructor;
    'save-optional': BooleanConstructor;
    'save-prefix': StringConstructor;
    'save-prod': BooleanConstructor;
    scope: StringConstructor;
    'script-shell': (StringConstructor | null)[];
    'scripts-prepend-node-path': (string | boolean)[];
    searchopts: StringConstructor;
    searchexclude: (StringConstructor | null)[];
    searchlimit: NumberConstructor;
    searchstaleness: NumberConstructor;
    'send-metrics': BooleanConstructor;
    shell: StringConstructor;
    shrinkwrap: BooleanConstructor;
    'sign-git-tag': BooleanConstructor;
    'sso-poll-frequency': NumberConstructor;
    'sso-type': (string | null)[];
    'strict-ssl': BooleanConstructor;
    tag: StringConstructor;
    timing: BooleanConstructor;
    tmp: import("path").PlatformPath;
    unicode: BooleanConstructor;
    'unsafe-perm': BooleanConstructor;
    usage: BooleanConstructor;
    user: (StringConstructor | NumberConstructor)[];
    userconfig: import("path").PlatformPath;
    umask: () => void;
    version: BooleanConstructor;
    'tag-version-prefix': StringConstructor;
    versions: BooleanConstructor;
    viewer: StringConstructor;
    _exit: BooleanConstructor;
};
