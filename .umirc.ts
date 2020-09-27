import { IConfig } from 'umi-types';
import path from 'path'

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
    chainWebpack(config, { webpack }) {
        config.module
            .rule('react-docgen-typescript-loader')
            .test(/\.tsx?$/)
            .use(require.resolve('react-docgen-typescript-loader'))
            .loader(require.resolve('react-docgen-typescript-loader'))
            .options({
                shouldExtractLiteralValuesFromEnum: true,
                propFilter: (prop) => {
                    if (prop.parent) {
                        return !prop.parent.fileName.includes('node_modules')
                    }
                    return true
                }
            })
    },
    cssLoaderOptions: {
        localeIdentNmae: ['local']
    },
    disableCSSModules: true,
    externals: {
        // pkConfig: 'DataConfig',
    }
}

export default config;
