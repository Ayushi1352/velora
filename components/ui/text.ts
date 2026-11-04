/** Fills "{key}" placeholders from templates.json labels, e.g. fill("Page {n}", { n: 2 }) */
export function fill(template: string, values: Record<string, string | number> = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** Current page check for nav links: "/" only matches itself, other links also match their sub pages. */
export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
