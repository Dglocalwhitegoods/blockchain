import React from 'react'
import styled from 'styled-components'

import { Exchange } from '@core'
import { formatFiat } from '@core/exchange/utils'
import { FiatType, PriceChangeType, PriceDiffType } from '@core/types'
import { Text } from 'blockchain-info-components'

const PriceChangeText = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  color: ${(props) => props.theme.grey600};
`

const PriceChangeColoredText = styled.span<{
  change: PriceDiffType
}>`
  font-weight: 600;
  color: ${(props) =>
    props.change.movement === 'down'
      ? props.theme.red600
      : props.change.movement === 'up'
      ? props.theme.green600
      : props.theme.grey600};
`

export const PriceChange = ({
  children,
  currency,
  isPortfolioPosition,
  priceChange
}: {
  children: any
  currency: FiatType
  isPortfolioPosition?: boolean
  priceChange: PriceChangeType
}) => {
  const change = isPortfolioPosition ? priceChange.positionChange : priceChange.overallChange
  let priceFormatted
  const price = formatFiat(change.diff)
  const hidePrices = Number.isNaN(price) || Number.isNaN(change.percentChange)
  if (change.movement === 'down') {
    priceFormatted = `-${Exchange.getSymbol(currency)}${price.substring(1)}`
  } else {
    priceFormatted = `${Exchange.getSymbol(currency)}${price}`
  }

  return (
    <PriceChangeText>
      {!hidePrices && (
        <PriceChangeColoredText change={change}>
          {priceFormatted} ({formatFiat(change.percentChange)})%
        </PriceChangeColoredText>
      )}
      {children}
    </PriceChangeText>
  )
}
