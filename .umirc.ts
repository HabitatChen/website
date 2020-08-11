import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: 'habitat',
            dll: true,
            locale: {
                enable: true,
                default: 'en-US',
            },
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
    chainWebpack() {

    },
    cssLoaderOptions: {
        localeIdentNmae: ['local']
    },
    disableCSSModules: true
}

export default config;
