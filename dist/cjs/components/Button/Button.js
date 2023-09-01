"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var colors_1 = require("../../utils/colors");
var styled_1 = __importDefault(require("@emotion/styled"));
var variantStyles = {
    primary: {
        backgroundColor: colors_1.colors.primary.base,
        color: colors_1.colors.white.base,
        border: "1px solid ".concat(colors_1.colors.primary.base),
        '&:hover': {
            backgroundColor: colors_1.colors.primary.dark,
            border: "1px solid ".concat(colors_1.colors.primary.dark),
        },
    },
    secondary: {
        backgroundColor: colors_1.colors.secondary.base,
        color: colors_1.colors.white.base,
        border: "1px solid ".concat(colors_1.colors.secondary.base),
        '&:hover': {
            backgroundColor: colors_1.colors.secondary.dark,
            border: "1px solid ".concat(colors_1.colors.secondary.dark),
        },
    },
    black: {
        backgroundColor: colors_1.colors.black.base,
        color: colors_1.colors.grey.light,
        border: "1px solid ".concat(colors_1.colors.black.base),
        '&:hover': {
            backgroundColor: colors_1.colors.grey.dark,
            border: "1px solid ".concat(colors_1.colors.grey.dark),
        },
    },
    light: {
        backgroundColor: colors_1.colors.teritary.base,
        color: colors_1.colors.black.base,
        border: "1px solid ".concat(colors_1.colors.teritary.base),
        '&:hover': {
            backgroundColor: colors_1.colors.teritary.base,
            border: "1px solid ".concat(colors_1.colors.secondary.dark),
        },
    },
    outline: {
        backgroundColor: 'transparent',
        color: colors_1.colors.white.base,
        border: "1px solid ".concat(colors_1.colors.white.base),
        '&:hover': {
            color: colors_1.colors.grey.light,
            borderColor: colors_1.colors.grey.light,
        },
    },
};
var StyledButton = styled_1.default.button({
    border: 0,
    padding: '1rem',
    cursor: 'pointer',
    transition: 'background-color .3s, color .3s, border .3s, box-shadow .3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '1rem',
    '&:hover': {
        textDecoration: 'none',
    },
    ':focus:not(:focus-visible)': {
        outline: 0,
    },
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, fullwidth = _a.fullwidth;
    return (__assign({ width: fullwidth ? '100%' : 'inherit' }, variantStyles[variant]));
});
var Arrow = function () {
    return (react_1.default.createElement("svg", { fill: "currentColor", width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M5.95246 1.06044L6.64613 0.366772C6.93985 0.0730551 7.4148 0.0730551 7.70539 0.366772L13.7797 6.43797C14.0734 6.73169 14.0734 7.20663 13.7797 7.49723L7.70539 13.5715C7.41167 13.8653 6.93673 13.8653 6.64613 13.5715L5.95246 12.8779C5.65562 12.581 5.66187 12.0967 5.96496 11.8061L9.73016 8.21902H0.749916C0.334338 8.21902 0 7.88468 0 7.4691V6.46922C0 6.05364 0.334338 5.7193 0.749916 5.7193H9.73016L5.96496 2.1322C5.65874 1.84161 5.65249 1.35729 5.95246 1.06044Z" })));
};
var Button = function (_a) {
    var label = _a.label, variant = _a.variant, onClick = _a.onClick, withArrow = _a.withArrow, fullwidth = _a.fullwidth;
    return (react_1.default.createElement(StyledButton, { variant: variant, label: label, onClick: onClick, fullwidth: fullwidth },
        label,
        withArrow && (react_1.default.createElement("span", { style: { marginLeft: '.5rem', marginTop: '4px' } },
            react_1.default.createElement(Arrow, null),
            ' '))));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map