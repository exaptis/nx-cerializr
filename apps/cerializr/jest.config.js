module.exports = {
  name: 'cerializr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cerializr',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
