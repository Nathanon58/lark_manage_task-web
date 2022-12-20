import _ from 'lodash'
import moment from 'moment'

Number.prototype.pad = function (size) {
  let s = String(this)
  while (s.length < (size || 2)) { s = '0' + s }
  return s
}

/**
 *
 * TODO ฟังก์ชั่นสำหรับดึงชื่อ-นามสกุล
 */
export const fullname = (firstname, lastname) => {
  return `${firstname}-${lastname}`
}

/**
 *
 * TODO ฟังก์ชั่นทำดีเลย์
 */
export const delay = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 *
 * TODO ฟังก์ชั่นสำหรับเช็คค่าว่าง
 */
export function isEmpty(array) {
  let obj = array
  if (!Array.isArray(obj) && typeof obj === 'object') {
    obj = Object.values(obj)
  }
  return _.some(obj.map(el => el && el.toString()), _.isEmpty)
}

export const convertStrToFormat = (str, format) => {
  if (!str) {
    return ''
  }

  switch (format) {
    case 'phone_number':
      str = str.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); break
    case 'id_card':
      str = str.replace(/(\d{1})(\d{2})(\d{5})(\d{2})(\d{2})(\d{1})/, '$1-$2-$3-$4-$5-$6'); break
    case 'credit':
      str = str.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4'); break
    case 'money': str = numeral(str).format('0,0[.]00'); break
    case 'money_digit': str = numeral(str).format('0,0.00'); break
    case 'date':
      const [d, m, y] = moment(str).format('DD-MM-YYYY').split('-')
      str = `${d}-${m}-${+y + 543}`
      break
    case 'datetime':
      const [da, time] = moment(str).add(543, 'y').format('DD-MM-YYYY HH:mm:ss').split(' ')
      str = `${da}\n${time}`
      break
  }

  return str
}

export const convertFormatToStr = (str) => {
  if (!str) {
    return ''
  }
  str = `${str}`.replace(/-|,/g, '')
  return str
}

export function compareRender(prevProps, nextProps, key = 'value') {
  return prevProps[key] === nextProps[key]
}

export const fnSort = (dataA, dataB, key) => {
  return dataA[key] < dataB[key] ? -1 :
    dataA[key] > dataB[key] ? 1 : 0
}


export function changeColor(data, type) {
  let color = ""
  if (type === "dateNow") {
    let now = moment()
    let dateInput = moment(data)
    let count = dateInput.diff(now)
    if (count > 0) {
      color = "#000000D9"
    } else if (count < 0) {
      color = "#f81d22"
    }
    return color;
  }

}