// Vocs 2.x removed the `head()` config option, so analytics is injected via a
// layout slot instead. Vocs only recognizes three slot export *names*:
// `Footer`, `OutlineFooter`, `SidebarHeader` — the name picks WHERE the slot
// mounts in the shell, not what it does. We borrow `Footer` (it renders on
// every page, inside the layout) purely as a mount point for the analytics
// tag; it produces no visible footer UI.
//
// React 19 hoists the async gtag loader into `<head>` no matter where it's
// rendered; only the small inline init runs where the slot mounts.
//
// `OutlineFooter`/`SidebarHeader` are exported as `undefined` so the generated
// `virtual:vocs/slots` module has matching exports (silences IMPORT_IS_UNDEFINED
// build warnings); vocs falls back to its default UI for those slots.

const GTM_ID = "GTM-NQXRVQ2";

const gtagInit = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GTM_ID}');
`;

function Analytics() {
  return (
    <>
      <script src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} async />
      <script dangerouslySetInnerHTML={{ __html: gtagInit }} />
    </>
  );
}

// Required vocs slot name. Renders no visible footer — just mounts analytics.
export function Footer() {
  return <Analytics />;
}

export const OutlineFooter = undefined;
export const SidebarHeader = undefined;
