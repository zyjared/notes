import { defineSidebarAuto } from '@zyjared/vitepress-sidebar'
import { expect, it } from 'vitest'

it('auto', () => {
  const sidebar = defineSidebarAuto({ srcDir: 'pages' })
  console.log(JSON.stringify(sidebar, null, 2))
//   expect(sidebar).toMatchSnapshot({})
})
