import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // ...Custom flat configs append after nuxt's configs
)
    .prepend(
        // ...Prepend some flat configs in front
    )
    // Override some rules in a specific config, based on their name

// ...you can chain more operations as needed
