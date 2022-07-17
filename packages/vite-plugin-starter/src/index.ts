import type { Plugin } from 'vite'

function VitePluginReactInspector(): Plugin {
  return {
    name: 'vite-plugin-starter',
    apply: 'serve',
  }
}

export default VitePluginReactInspector
