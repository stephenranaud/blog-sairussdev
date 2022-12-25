interface Props {
    theme?: 'dark' | 'light'
}

export default function LogoMain({ theme = 'light' }: Props) {
    return (<>
        {
            theme === 'dark' && <svg xmlns="http://www.w3.org/2000/svg" data-name="Calque 1" viewBox="0 0 300 300">
                <path fill="#1f1f1f" d="M0 0H300V300H0z"></path>
                <path fill="#dedede" d="M45.93 144.25H9L69.35 106v27.51zm23.42 38.33L9 144.25h37l23.42 11.5zM138.33 62.5h22.49v153.12h-22.49zM230.65 106L291 144.25h-37l-23.42-10.73zm23.42 38.24h37l-60.38 38.33v-26.82z"></path>
            </svg>
        }
        {
            theme  === 'light' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                <path fill="#e8e80f" d="M0 0H300V300H0z"></path>
                <path d="M45.93 144.25H9L69.35 106v27.51zm23.42 38.33L9 144.25h37l23.42 11.5z"></path>
                <path fill="#312159" d="M138.33 62.5h22.49v153.12h-22.49z"></path>
                <path d="M230.65 106L291 144.25h-37l-23.42-10.73zm23.42 38.24h37l-60.38 38.33v-26.82z"></path>
            </svg>
        }
    </>);
}