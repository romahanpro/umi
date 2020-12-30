import resolve from '@rollup/plugin-node-resolve'

export default [
    {
        input: 'src/main.js',
        output: {
            file: 'app/main.js',
            format: 'cjs',
            preferConst: true
        },
        plugins: [
            resolve(),
        ],
        external: [ 'electron', 'keytar', 'path' ],
    }, {
        input: 'src/renderer.js',
        output: {
            file: 'app/renderer.js',
            format: 'cjs',
            preferConst: true
        },
        plugins: [
            resolve(),
        ],
        external: [ 'electron' ],
    }, {
        input: 'src/worker.js',
        output: {
            file: 'app/worker.js',
            format: 'cjs',
            preferConst: true
        },
        plugins: [
            resolve(),
        ]
    }
]
