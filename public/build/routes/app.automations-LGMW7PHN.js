import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-YQ4DAV2Z.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.automations.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.automations.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.automations.tsx"
  );
  import.meta.hot.lastModified = "1706218169509.4255";
}
function AutomationsPage({}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "AutomationsPage" }, void 0, false, {
    fileName: "app/routes/app.automations.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = AutomationsPage;
var app_automations_default = AutomationsPage;
var _c;
$RefreshReg$(_c, "AutomationsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_automations_default as default
};
//# sourceMappingURL=/build/routes/app.automations-LGMW7PHN.js.map
