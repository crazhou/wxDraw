import babel from 'rollup-plugin-babel';


export default {
    entry: 'src/index.js',
    format: 'cjs',
    dest: 'dist/wxdraw.js',
    plugins: [
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            babelrc: true
        })
    ],
    watch: {
        include: 'src/**'
    },
    banner: ""
};
