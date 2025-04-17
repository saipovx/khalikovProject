module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Найдём sass-loader
        webpackConfig.module.rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((one) => {
              if (String(one.test).includes('scss') && one.use) {
                one.use.forEach((loader) => {
                  if (
                    typeof loader === 'object' &&
                    loader.loader &&
                    loader.loader.includes('sass-loader')
                  ) {
                    // Отключаем sourcemap для sass-loader
                    loader.options.sourceMap = false;
                  }
                });
              }
            });
          }
        });
  
        return webpackConfig;
      },
    },
  };
  