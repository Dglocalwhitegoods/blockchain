import { connect, ConnectedProps } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import styled from 'styled-components'

import { Button, Icon, Text } from 'blockchain-info-components'
import { CoinAccountListOption } from 'components/Form'
import { FlyoutWrapper } from 'components/Flyout'
import { selectors } from 'data'
import { SupportedWalletCurrenciesType } from 'core/redux/walletOptions/types'
import CopyClipboardButton from 'components/Clipboard/CopyClipboardButton'
import QRCodeWrapper from 'components/QRCode/Wrapper'

import { Props as OwnProps } from '../index'
import { RequestSteps } from '../types'
import { StepHeader } from '../model'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-top: ${props => `1px solid ${props.theme.grey000}`};
  border-bottom: ${props => `1px solid ${props.theme.grey000}`};
`
const AddressDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow-wrap: anywhere;
  word-break: break-all;
  hyphens: none;
`
const ClipboardWrapper = styled.div`
  margin-left: 24px;
  margin-top: 6px;
`
const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 36px;
  width: 100%;
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

class RequestShowAddress extends React.PureComponent<Props> {
  render () {
    const { formValues, setStep, supportedCoins, walletCurrency } = this.props
    const { selectedAccount } = formValues

    // TODO: ensure selectors return next address for BCH/BTC
    const receiveAddress =
      // @ts-ignore
      selectedAccount.nextAddress || selectedAccount.address

    return (
      <Wrapper>
        <FlyoutWrapper>
          <StepHeader>
            <Icon
              cursor
              onClick={() => setStep(RequestSteps.COIN_SELECT)}
              name='arrow-back'
              color='grey600'
              size='24px'
              style={{ marginRight: '20px' }}
            />
            <Text size='24px' color='grey800' weight={600}>
              <FormattedMessage
                id='modals.requestcrypto.showaddress.title'
                defaultMessage='Scan or Share'
              />
            </Text>
          </StepHeader>
        </FlyoutWrapper>
        <CoinAccountListOption
          account={selectedAccount}
          coinModel={supportedCoins[selectedAccount.coin]}
          displayOnly
          hideActionIcon
          walletCurrency={walletCurrency}
        />
        <AddressWrapper>
          <AddressDisplay>
            <Text color='grey600' size='14px' lineHeight='21px' weight={500}>
              <FormattedMessage id='copy.address' defaultMessage='Address' />
            </Text>
            <Text color='grey800' size='16px' weight={600} lineHeight='24px'>
              {receiveAddress}
            </Text>
          </AddressDisplay>
          <ClipboardWrapper>
            <CopyClipboardButton
              textToCopy={receiveAddress}
              color='blue600'
              size='24px'
            />
          </ClipboardWrapper>
        </AddressWrapper>
        <QRCodeContainer>
          <QRCodeWrapper
            data-e2e='requestAddressQrCode'
            size={280}
            value={receiveAddress}
          />
        </QRCodeContainer>
        <ButtonsWrapper>
          <Button
            data-e2e='createRequestLink'
            height='48px'
            nature='empty-blue'
            onClick={() => setStep(RequestSteps.BUILD_LINK)}
            width='310px'
          >
            <Text color='blue600' size='16px' weight={600}>
              <FormattedMessage
                id='modals.requestcrypto.showaddress.createlink'
                defaultMessage='Create Link'
              />
            </Text>
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  supportedCoins: selectors.core.walletOptions
    .getSupportedCoins(state)
    .getOrElse({} as SupportedWalletCurrenciesType)
})

const connector = connect(mapStateToProps)
type Props = ConnectedProps<typeof connector> &
  OwnProps & {
    setStep: (step: RequestSteps) => void
  }

export default connector(RequestShowAddress)
