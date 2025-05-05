import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatDate = (date: string) => dayjs.utc(date).tz('Asia/Tokyo').format('YYYY / MM /DD')
export const formatDateARIA = (date: string) => dayjs.utc(date).tz('Asia/Tokyo').format('YYYY年MM月DD日')
