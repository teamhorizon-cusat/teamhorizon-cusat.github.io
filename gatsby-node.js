exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.glb$/,
            use: [
              `url-loader`,
            ],
          },
        ],
      },
    })
  }