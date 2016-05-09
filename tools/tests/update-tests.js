import selftest, { Sandbox } from '../tool-testing/selftest.js';
import catalog from '../packaging/catalog/catalog.js';

const DEFAULT_RELEASE_TRACK = catalog.DEFAULT_TRACK;
const SIMPLE_WAREHOUSE = {
  v1: { },
  v2: { recommended: true }
};

console.log('out here')
selftest.define("'meteor update' alters `.meteor/packages`", () => {
  console.log('in here')
  const s = new Sandbox({
    warehouse: SIMPLE_WAREHOUSE,
    fakeMongo: true
  });

  console.log('created sandbox')
  // s.createApp("myapp", "simple-app");
  // s.cd("myapp");
  // console.log('created app')
  //
  // s.write('.meteor/release', DEFAULT_RELEASE_TRACK + '@v2');
  // console.log('updated release')
  //
  // s.run.stop();
  // console.log('done')
});
