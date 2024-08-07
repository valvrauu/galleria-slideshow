import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        text: string,
        background: string,

        logo: {
            text: string,
            background: string
        },

        link: {
            primary: {
                color: string,
                background: string,
                hover: {
                    color: string,
                    background: string,
                }
            }
        }
    }
}
