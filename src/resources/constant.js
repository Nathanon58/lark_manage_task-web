
export const default_form_input = [{
  form_id: 1,
  label: 'ชื่อ-นามสกุล',
  ref: 'fullname',
  type: 'INPUT',
  style: {
    marginRight: 50
  },
  customerProps: {
    maxLength: 20
  },
  className: 'customer-input'
}, {
  form_id: 1,
  label: 'เบอร์โทร',
  ref: 'phone_number',
  type: 'INPUT'
}]

export const pathName = {
  manageCaseList: "/manage-caseList",
}