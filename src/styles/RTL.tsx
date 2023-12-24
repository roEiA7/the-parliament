import React, { ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props: { children: ReactNode }) => {
    return <CacheProvider value={cacheRtl}> {props.children} </CacheProvider>
}

export default RTL;