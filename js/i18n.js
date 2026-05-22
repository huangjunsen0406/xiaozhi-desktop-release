const I18N = (() => {
  const translations = {
    zh: {
      // nav
      'nav.overview': '概览',
      'nav.capabilities': '核心能力',
      'nav.architecture': '架构',
      'nav.download': '下载',
      'nav.releases': '历史版本',

      // index — hero
      'index.title': 'Xiaozhi Desktop - Pro Architecture',
      'index.hero.subtitle': 'Electron 主进程驱动 · Live2D 实时渲染 · 本地神经计算',
      'index.hero.cta': '即刻体验',
      'index.hero.architecture': '查看源码架构',

      // index — core modules
      'index.modules.title': 'Core Modules',
      'index.modules.subtitle': '基于插件化架构的六大核心能力',
      'index.live2d.title': 'Live2D 交互引擎',
      'index.live2d.desc': '不仅仅是显示。通过 renderer/src/pages/Live2dView.vue 实现全链路控制。<br>支持拖拽物理反馈、口型实时同步 (Lip-Sync)。',
      'index.live2d.feat1': '模型热加载与配置持久化',
      'index.live2d.feat2': '点击穿透与边缘吸附',
      'index.wake.title': '本地离线唤醒',
      'index.wake.desc': '隐私优先。基于 sherpa-onnx-node 的 KeywordSpotter 在本地运行。<br>后台音频窗口 (AudioWindow) 独立采集 PCM，主进程零阻塞。',
      'index.iot.dual': '双协议栈支持',
      'index.iot.hub': '全屋智能中枢',
      'index.iot.hub.desc': 'Plugins/IoTPlugin.ts 统一调度，反向状态上报。',

      // index — architecture
      'index.arch.title': '硬核架构，极致性能。',

      // index — footer
      'index.footer.title': 'Ready to deploy?',
      'index.footer.cta': '下载客户端',
      'index.footer.community': '社区群: 1053746729',

      // download
      'download.title': 'Download Xiaozhi Desktop',
      'download.subtitle': '选择您的平台。体验下一代桌面智能助手。',
      'download.loading': '正在获取最新版本...',
      'download.mac.desc': 'macOS 11.0 (Big Sur) 或更高版本\n需要在终端执行：xattr -cr /Applications/xiaozhi-desktop.app',
      'download.win.desc': 'Windows 10 / 11',
      'download.linux.desc': 'Ubuntu 20.04+ / Debian 11+',
      'download.no.version': '暂无可用版本',
      'download.error': '无法获取最新版本信息，请稍后重试。',
      'download.error.link': '前往 GitHub Releases 页面手动下载 →',
      'download.sysreq.title': 'System Requirements',
      'download.sysreq.min': 'Minimum',
      'download.sysreq.rec': 'Recommended',

      // arch labels
      'arch.mac.arm64': 'Apple Silicon (.dmg)',
      'arch.mac.x64': 'Intel (.dmg)',
      'arch.mac.universal': 'macOS (.dmg)',
      'arch.win.x64': 'x64 (.exe)',
      'arch.win.ia32': 'x86 (.exe)',
      'arch.win.universal': 'Windows (.exe)',
      'arch.linux.appimage.x64': 'x64 (.AppImage)',
      'arch.linux.appimage.arm64': 'arm64 (.AppImage)',
      'arch.linux.appimage': '.AppImage',
      'arch.linux.deb.x64': 'x64 (.deb)',
      'arch.linux.deb.arm64': 'arm64 (.deb)',
      'arch.linux.deb': '.deb',

      // releases
      'releases.title': 'Releases - Xiaozhi Desktop',
      'releases.subtitle': '下载历史版本。默认推荐使用最新版本以获得最佳体验。',
      'releases.changelog': 'View changelog',
      'releases.loading': '正在加载版本列表...',
      'releases.select': 'Select previous releases',
      'releases.no.assets': '此版本暂无可用下载文件',
      'releases.empty': '暂无发布版本',
      'releases.error': '无法加载版本列表',
      'releases.error.link': '前往 GitHub Releases 页面 →',

      // shared
      'footer.copyright': '© 2025 Xiaozhi Desktop. Built with Electron & Passion.',
    },
    en: {
      // nav
      'nav.overview': 'Overview',
      'nav.capabilities': 'Capabilities',
      'nav.architecture': 'Architecture',
      'nav.download': 'Download',
      'nav.releases': 'Releases',

      // index — hero
      'index.title': 'Xiaozhi Desktop - Pro Architecture',
      'index.hero.subtitle': 'Electron main process driven · Live2D real-time rendering · Local neural computing',
      'index.hero.cta': 'Get Started',
      'index.hero.architecture': 'View Architecture',

      // index — core modules
      'index.modules.title': 'Core Modules',
      'index.modules.subtitle': 'Six core capabilities built on plugin architecture',
      'index.live2d.title': 'Live2D Interactive Engine',
      'index.live2d.desc': 'More than display. Full pipeline control via renderer/src/pages/Live2dView.vue.<br>Supports drag physics feedback and real-time lip-sync.',
      'index.live2d.feat1': 'Hot-reload models with persistent config',
      'index.live2d.feat2': 'Click-through and edge snapping',
      'index.wake.title': 'Local Offline Wake Word',
      'index.wake.desc': 'Privacy first. sherpa-onnx-node KeywordSpotter runs locally.<br>Background AudioWindow captures PCM independently, zero main-process blocking.',
      'index.iot.dual': 'Dual protocol stack',
      'index.iot.hub': 'Smart Home Hub',
      'index.iot.hub.desc': 'Plugins/IoTPlugin.ts unified scheduling with reverse state reporting.',

      // index — architecture
      'index.arch.title': 'Hardcore architecture, ultimate performance.',

      // index — footer
      'index.footer.title': 'Ready to deploy?',
      'index.footer.cta': 'Download Client',
      'index.footer.community': 'Community: 1053746729',

      // download
      'download.title': 'Download Xiaozhi Desktop',
      'download.subtitle': 'Choose your platform. Experience the next-gen desktop assistant.',
      'download.loading': 'Fetching latest version...',
      'download.mac.desc': 'macOS 11.0 (Big Sur) or later\nRun in terminal: xattr -cr /Applications/xiaozhi-desktop.app',
      'download.win.desc': 'Windows 10 / 11',
      'download.linux.desc': 'Ubuntu 20.04+ / Debian 11+',
      'download.no.version': 'No version available',
      'download.error': 'Failed to fetch latest version. Please try again later.',
      'download.error.link': 'Go to GitHub Releases page →',
      'download.sysreq.title': 'System Requirements',
      'download.sysreq.min': 'Minimum',
      'download.sysreq.rec': 'Recommended',

      // arch labels
      'arch.mac.arm64': 'Apple Silicon (.dmg)',
      'arch.mac.x64': 'Intel (.dmg)',
      'arch.mac.universal': 'macOS (.dmg)',
      'arch.win.x64': 'x64 (.exe)',
      'arch.win.ia32': 'x86 (.exe)',
      'arch.win.universal': 'Windows (.exe)',
      'arch.linux.appimage.x64': 'x64 (.AppImage)',
      'arch.linux.appimage.arm64': 'arm64 (.AppImage)',
      'arch.linux.appimage': '.AppImage',
      'arch.linux.deb.x64': 'x64 (.deb)',
      'arch.linux.deb.arm64': 'arm64 (.deb)',
      'arch.linux.deb': '.deb',

      // releases
      'releases.title': 'Releases - Xiaozhi Desktop',
      'releases.subtitle': 'Download previous releases. We recommend the latest version for the best experience.',
      'releases.changelog': 'View changelog',
      'releases.loading': 'Loading releases...',
      'releases.select': 'Select previous releases',
      'releases.no.assets': 'No downloads available for this version',
      'releases.empty': 'No releases found',
      'releases.error': 'Failed to load releases',
      'releases.error.link': 'Go to GitHub Releases page →',

      // shared
      'footer.copyright': '© 2025 Xiaozhi Desktop. Built with Electron & Passion.',
    },
  }

  let currentLang = 'zh'

  function detectLang() {
    const saved = localStorage.getItem('xz-lang')
    if (saved && translations[saved]) return saved
    const browser = (navigator.language || '').toLowerCase()
    if (browser.startsWith('zh')) return 'zh'
    return 'en'
  }

  function t(key, params) {
    let text = (translations[currentLang] && translations[currentLang][key]) || key
    if (params) {
      Object.keys(params).forEach(k => {
        text = text.replace('${' + k + '}', params[k])
      })
    }
    return text
  }

  function applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n')
      const text = t(key)
      if (el.tagName === 'TITLE') {
        document.title = text
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text
      } else {
        el.textContent = text
      }
    })
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en'
    const toggle = document.getElementById('lang-toggle')
    if (toggle) toggle.textContent = currentLang === 'zh' ? 'EN' : '中'
  }

  function setLang(lang) {
    if (!translations[lang]) return
    currentLang = lang
    localStorage.setItem('xz-lang', lang)
    applyToDOM()
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }))
  }

  function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh')
  }

  function getLang() {
    return currentLang
  }

  function getLocale() {
    return currentLang === 'zh' ? 'zh-CN' : 'en-US'
  }

  function init() {
    currentLang = detectLang()
    applyToDOM()
  }

  return { t, init, setLang, toggleLang, getLang, getLocale, applyToDOM }
})()

document.addEventListener('DOMContentLoaded', () => I18N.init())
