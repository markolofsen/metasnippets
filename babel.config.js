module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "minify",
      {
        "builtIns": false
      }
    ]
  ],
  "plugins": [
    // "@babel/plugin-transform-strict-mode"
  ]
}