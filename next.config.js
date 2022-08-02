const webpack = require(`webpack`)
const { merge } = require(`webpack-merge`)
const fg = require(`fast-glob`)
const { basename } = require(`path`)

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  webpack(config) {
    // config.output = {
    //     ...config.output,
    //     globalObject: `this`,
    // }

    config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
    }

    // const files = fg.sync([`./src/entities/**/*.ts`])
    // const entries = {}

    // files.forEach((file) => {
    //   const filename = basename(file)?.split(`.`)?.[0]
    //   entries[`entities/${filename}`] = file
    // })

    return config
    
    // return merge(config, {
    //   entry() {
    //     return config.entry().then((entry) => ({ 
    //         ...entry,
    //         // entities: `./src/entities/index.ts`,
    //         ...entries,
    //     }))
    //   },
    // })
  },
}

module.exports = nextConfig
