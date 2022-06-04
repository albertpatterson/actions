import { getConfig as getBackgroundConfig } from './webpack/get.webpack.config.background.js';
import { getConfig as getInjectedConfig } from './webpack/get.webpack.config.injected.js';
import { getConfig as getPopupConfig } from './webpack/get.webpack.config.popup.js';
import { getConfig as getOptionsConfig } from './webpack/get.webpack.config.options.js';
import * as tools from 'simple_build_tools';
import { CONSTANTS } from './constants.js';
import * as path from 'path';
import { createFcnWithName } from './util.js';

const clean = () => tools.rmrf(CONSTANTS.DIST_DIR);
const bundleBackground = async () => {
  const config = await getBackgroundConfig(false);
  return await tools.webpack(config);
};
const bundleInjected = async () => {
  const config = await getInjectedConfig(false);
  return await tools.webpack(config);
};
const bundlePopups = async () => {
  const popups = await tools.getDirs(path.resolve(CONSTANTS.SRC_DIR, 'popup'));
  const tasks = [];
  for (const fullpath of popups) {
    const name = path.basename(fullpath);
    const config = await getPopupConfig(false, name);
    const task = createFcnWithName(
      () => tools.webpack(config),
      `bundlePopup_${name}`
    );
    tasks.push(task);
  }

  return tools.parallel(tasks)();
};

const bundleOptions = async () => {
  const config = await getOptionsConfig(false);
  return await tools.webpack(config);
};
const copyIcons = () =>
  tools.copyDir(CONSTANTS.ICONS_DIR_SRC, CONSTANTS.ICONS_DIR_DESC);
const copyManifest = () =>
  tools.transformFile(
    CONSTANTS.MANIFEST_SRC_PATH,
    CONSTANTS.MANIFEST_DEST_PATH,
    (json) => {
      const data = JSON.parse(json);
      const permissions = new Set(data.permissions);
      permissions.add('alarms');
      data.permissions = Array.from(permissions);
      return JSON.stringify(data);
    }
  );

export const build = async () =>
  tools.runTasks(
    tools.series([
      clean,
      tools.parallel([
        bundleBackground,
        bundleInjected,
        bundlePopups,
        bundleOptions,
        copyIcons,
        copyManifest,
      ]),
    ])
  );

if (process.argv[2] === '-r') {
  await build();
}
