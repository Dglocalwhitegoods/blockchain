import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'

import { Remote } from '@core'
import { fromCashAddr } from '@core/utils/bch'
import { actions, model } from 'data'

import { getData } from './selectors'
import BchImportedAddresses from './template'

const { WALLET_TX_SEARCH } = model.form

class ImportedAddressesContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !Remote.Loading.is(nextProps.data)
  }

  handleTransferAll = () => {
    this.props.actions.showModal(model.components.sendBch.MODAL, {
      excludeHDWallets: true,
      from: 'allImportedAddresses'
    })
  }

  handleEditLabel = (address) => {
    const btcAddr = fromCashAddr(address.addr)
    this.props.componentActions.editImportedAddressLabel(btcAddr)
  }

  render() {
    const { data, ...rest } = this.props
    return data.cata({
      Failure: (message) => <div>{message}</div>,
      Loading: () => <div />,
      NotAsked: () => <div />,
      Success: (addresses) => {
        return addresses.length ? (
          <BchImportedAddresses
            importedAddresses={addresses}
            onTransferAll={this.handleTransferAll}
            onEditLabel={this.handleEditLabel}
            {...rest}
          />
        ) : (
          <div />
        )
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions.modals, dispatch),
  componentActions: bindActionCreators(actions.components.manageAddresses, dispatch),
  modalActions: bindActionCreators(actions.modals, dispatch)
})

const mapStateToProps = (state) => ({
  data: getData(state),
  search: formValueSelector(WALLET_TX_SEARCH)(state, 'search')
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportedAddressesContainer)
