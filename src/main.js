import render from './render';
import {
  initGlobalState,
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
} from 'qiankun';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });
const loader = (loading) => render({ loading });
const container = '#subapp-container';

/**
 * Step2 注册子应用
 */
let apps = [
  {
    name: 'mfe-app-vue',
    entry: '//localhost:7100',
    container,
    loader,
    activeRule: '/vue',
  },
  {
    name: 'mfe-app-react',
    entry: '//localhost:7101',
    container,
    loader,
    activeRule: '/react',
  },
];

let lifeCycles = {
  beforeLoad: [
    (app) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
};

registerMicroApps(apps, lifeCycles);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]:', value, prev)
);

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/vue');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
