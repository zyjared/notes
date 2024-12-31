interface SidebarUrlBuilderReturn {
  base: string
  buildBase: (...child: string[]) => string
  buildLink: (...child: string[]) => string
  buildSub: (...child: string[]) => SidebarUrlBuilderReturn
}

function buildLink(...paths: string[]): string {
  return encodeURI(`/${paths.reduce((acc, p) => acc.concat(p.split('/').filter(Boolean)), []).join('/')}`)
}

function buildBase(...paths: string[]) {
  return paths.length > 0 ? `${buildLink(...paths)}/` : '/'
}

export function sidebarUrlBuilder(...paths: string[]): SidebarUrlBuilderReturn {
  return {
    base: buildBase(...paths),
    buildBase: (...subpaths: string[]) => buildBase(...paths, ...subpaths),
    buildLink: (...subpaths: string[]) => buildLink(...paths, ...subpaths),
    buildSub: (...subpaths: string[]) => sidebarUrlBuilder(...paths, ...subpaths),
  }
}
