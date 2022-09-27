// src/figmaTokensChakra/comp/tab.json
var tab = {
  unselected: {
    line: {
      "background-color": {
        value: "{semantic.color.actions.primary.default.quiet-background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      }
    },
    soft: {
      "background-color": {
        value: "{semantic.color.actions.primary.default.quiet-background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      }
    },
    solid: {
      "background-color": {
        value: "{semantic.color.actions.primary.default.quiet-background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      }
    }
  },
  selected: {
    line: {
      "text-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      }
    },
    soft: {
      "background-color": {
        value: "{semantic.color.navigation.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.navigation.text}",
        type: "color"
      }
    },
    solid: {
      "background-color": {
        value: "{semantic.color.navigation.border}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.navigation.text}",
        type: "color"
      }
    }
  },
  "font-family": {
    value: "{semantic.font-family.font-family.navigation}",
    type: "fontFamilies"
  },
  "text-size": {
    value: "{semantic.font-size.navigation.xl}",
    type: "fontSizes"
  },
  "font-weight": {
    value: "{semantic.font-weight.typography.regular}",
    type: "fontWeights"
  }
};
var tab_default = {
  tab
};
export {
  tab_default as default,
  tab
};
