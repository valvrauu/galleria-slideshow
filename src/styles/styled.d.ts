import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        text: string,
        background: string,

        scrollbar: {
            track: {
                background: string,
            },
            thumb: {
                background: string,
            }
        },

        header: {
            border: {
                bottom: string
            }
        },

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
            },
            secondary: {
                color: string,
                background: string,
                hover: {
                    color: string,
                    background: string,
                }
            }
        },

        art: {
            name: {
                color: string,
                background: string
            },
            artistName: {
                color: string,
                background: string
            },
            hover: {
                background: string
            },
            outline: string
        },

        artDetails: {
            captionBox: {
                background: string,
                name: {
                    color: string,
                    background: string
                },
                artistName: {
                    color: string,
                    background: string
                },
            },
            contentBox: {
                background: string,
                year: {
                    color: string,
                    background: string
                },
                description: {
                    color: string,
                    background: string
                },
            },
            outline: string
        },

        artNavigation: {
            progressBar: {
                color: string,
                background: string
            },
            icon: {
                color: string,
                disabled: {
                    color: string,
                }
            }
        }
    }
}
