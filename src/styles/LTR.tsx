import React, { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme, ThemeProvider } from "@mui/material";

const ltrTheme = createTheme({
    direction: 'ltr', // Force LTR direction for this theme
});

// Create rtl cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer],
});

const LTR = (props: { children: ReactNode }) => {
    return <ThemeProvider theme={ltrTheme}>
        <CacheProvider value={cacheRtl}> {props.children} </CacheProvider>
    </ThemeProvider>
};

export default LTR;
