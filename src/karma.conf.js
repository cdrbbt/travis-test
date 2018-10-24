// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
   
   autoWatch: false,
   
   browsers: ['ChromeHeadless'],
     // you can define custom flags
     customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
   
   singleRun: true
  
  })
}