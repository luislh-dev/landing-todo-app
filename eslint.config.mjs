import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    extends: ["@nuxtjs/eslint-config-typescript",  'plugin:prettier/recommended'],
});
