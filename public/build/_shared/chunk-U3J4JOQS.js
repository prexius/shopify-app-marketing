import {
  Form,
  init_esm2 as init_esm,
  useActionData,
  useSubmit
} from "/build/_shared/chunk-VXFL7UG5.js";
import {
  Button,
  Frame,
  Layout,
  Modal,
  Page,
  TextField,
  init_esm as init_esm2
} from "/build/_shared/chunk-7SM5YFS4.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-YQ4DAV2Z.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.createcampaingform.tsx
init_remix_hmr();
init_esm();
init_esm2();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.createcampaingform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.createcampaingform.tsx"
  );
  import.meta.hot.lastModified = "1706224470627.105";
}
var CreateCampaingForm = ({
  activate,
  setActivate
}) => {
  _s();
  const handleChange = (0, import_react2.useCallback)(() => setActivate(!activate), [activate, setActivate]);
  const activator = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: handleChange, children: "Create new" }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 34,
    columnNumber: 21
  }, this);
  const [value, setValue] = (0, import_react2.useState)("default");
  const handleChangeText = (0, import_react2.useCallback)((newValue) => setValue(newValue), []);
  const submit = useSubmit();
  const actionData = useActionData();
  console.log(actionData, "CreateCampaingForm");
  const sendEmails = () => submit({}, {
    replace: true,
    method: "POST"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { activator, open: activate, onClose: handleChange, title: "Create a new email campaigns", primaryAction: {
    content: "Send",
    onAction: sendEmails
  }, secondaryActions: [{
    content: "Finish Later",
    onAction: () => {
    }
  }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Campaing Name", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 57,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "To", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 58,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Corporation", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 59,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "From", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 60,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Email Subject", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 61,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Content", value, onChange: handleChangeText, autoComplete: "off" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 62,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { submit: true, children: "send" }, void 0, false, {
      fileName: "app/routes/app.createcampaingform.tsx",
      lineNumber: 63,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 56,
    columnNumber: 33
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 55,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 54,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 53,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 46,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 45,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.createcampaingform.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_s(CreateCampaingForm, "1ZsCAkPsW0m1sEQgQ/ubEMlrt/Q=", false, function() {
  return [useSubmit, useActionData];
});
_c = CreateCampaingForm;
var app_createcampaingform_default = CreateCampaingForm;
var _c;
$RefreshReg$(_c, "CreateCampaingForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  app_createcampaingform_default
};
//# sourceMappingURL=/build/_shared/chunk-U3J4JOQS.js.map
