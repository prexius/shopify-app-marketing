import {
  app_createcampaingform_default
} from "/build/_shared/chunk-U3J4JOQS.js";
import "/build/_shared/chunk-VXFL7UG5.js";
import {
  InlineGrid,
  Layout,
  LegacyCard,
  Page,
  Tabs,
  Text,
  init_esm
} from "/build/_shared/chunk-7SM5YFS4.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-YQ4DAV2Z.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.campaigns.tsx
init_remix_hmr();
init_esm();
var import_react = __toESM(require_react());

// app/utils/tabs.tsx
init_remix_hmr();

// app/components/Test.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Test.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Test.tsx"
  );
  import.meta.hot.lastModified = "1706220276814.7913";
}
var TestComponent = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "TestComponent" }, void 0, false, {
    fileName: "app/components/Test.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = TestComponent;
var Test_default = TestComponent;
var _c;
$RefreshReg$(_c, "TestComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/tabs.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\tabs.tsx"
  );
  import.meta.hot.lastModified = "1706221180232.1978";
}
var tabs = [
  {
    id: "all-customers",
    content: "All",
    panelID: "all-customers-content-one",
    component: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Test_default, {}, void 0, false, {
      fileName: "app/utils/tabs.tsx",
      lineNumber: 19,
      columnNumber: 20
    }, this)
  },
  {
    id: "accepts-marketing-1",
    content: "Ongoing",
    panelID: "accepts-marketing-content-1"
  },
  {
    id: "repeat-customers-1",
    content: "Draft",
    panelID: "repeat-customers-content-1"
  },
  {
    id: "prospects-1",
    content: "Completed",
    panelID: "prospects-content-1"
  }
];

// app/routes/app.campaigns.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.campaigns.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.campaigns.tsx"
  );
  import.meta.hot.lastModified = "1706224668135.4216";
}
function CampaignsPage({}) {
  _s();
  const [selected, setSelected] = (0, import_react.useState)(0);
  const handleTabChange = (0, import_react.useCallback)((selectedTabIndex) => setSelected(selectedTabIndex), []);
  const [activate, setActivate] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InlineGrid, { columns: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: "heading3xl", as: "h2", children: "Campaings" }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 35,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LegacyCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tabs, { tabs, selected, onSelect: handleTabChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LegacyCard.Section, { title: tabs[selected].content, children: tabs[selected].component }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 43,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 42,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 41,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(app_createcampaingform_default, { activate, setActivate }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.campaigns.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.campaigns.tsx",
    lineNumber: 32,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.campaigns.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(CampaignsPage, "dWX7ckppek0ValSwEGF+Jceb1+M=");
_c2 = CampaignsPage;
var app_campaigns_default = CampaignsPage;
var _c2;
$RefreshReg$(_c2, "CampaignsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_campaigns_default as default
};
//# sourceMappingURL=/build/routes/app.campaigns-E6ZUJYMJ.js.map
