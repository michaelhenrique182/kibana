/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { connect } from 'react-redux';
import TransactionOverview from './view';
import { getUrlParams } from '../../../store/urlParams';
import sorting, { changeTransactionSorting } from '../../../store/sorting';

function mapStateToProps(state = {}) {
  return {
    urlParams: getUrlParams(state),

    transactionSorting: sorting(state, 'transaction').sorting.transaction
  };
}

const mapDispatchToProps = {
  changeTransactionSorting
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TransactionOverview
);
