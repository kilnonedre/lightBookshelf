interface ConfigDropDownItem {
  key: string
  name: string
  withDivider: boolean
  color?: string
  icon?: string
}

interface ConfigSwitchItem {
  currentKey: string
  anchorKey: string
}

export { ConfigDropDownItem, ConfigSwitchItem }
