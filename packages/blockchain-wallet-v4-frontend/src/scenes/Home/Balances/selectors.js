import { selectors } from 'data'
import { createDeepEqualSelector } from 'services/ReselectHelper'

export const getData = createDeepEqualSelector(
  [
    selectors.components.layoutWallet.getBalancesTable,
    selectors.modules.profile.isSilverOrAbove
  ],
  (currentTab, isSilverOrAbove) => ({ currentTab, isSilverOrAbove })
)
