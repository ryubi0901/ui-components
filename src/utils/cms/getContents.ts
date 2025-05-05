import { MicroCMSQueries } from 'microcms-js-sdk'

import { apiClient } from './apiClient'

export const get = (queries?: MicroCMSQueries) => apiClient.getList({ endpoint: '', queries })
