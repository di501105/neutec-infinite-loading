module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-recommended-vue'
  ],
  ignoreFiles: [
    'src/assets/scss/**/*.scss'
  ],
  defaultSeverity: 'warning',
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: {
    'max-nesting-depth': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ],
    'property-no-vendor-prefix': null,
    'selector-max-compound-selectors': null,
    'scss/at-import-partial-extension-blacklist': null,
    'scss/selector-no-redundant-nesting-selector': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-max-id': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
    'scss/dollar-variable-pattern': [/^foo-/, { ignore: 'global' }],
    'scss/at-import-no-partial-leading-underscore': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'scss/at-mixin-pattern': null,
    'max-empty-lines': null,
    'custom-property-empty-line-before': null
    // 'font-family-no-missing-generic-family-keyword': null
  }
}