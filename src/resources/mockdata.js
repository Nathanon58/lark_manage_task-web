export const mockdataCase = [
    {
        request_no: '123456',
        status: 'under review',
        submit_time: '12/9/2021 18:57:49',
        requesters_name: 'ยุ้ย-Chanamon',
        department_sup: 'แบงค์-Karin',
        approval_records: 'ยุ้ย-Chanamon|Create Approval|2021-12-09 18:57:48;จิ-Jirapat|Forward|"ตั้มลบเสร็จแล้วฝากกดอนุมัติด้วยนะครับ" |2021-12-09 20:25:28;ยุ้ย-Chanamon|Comment|"รบกวนพี่ตั้ม ทำให้ด้วยนะคะ " |2021-12-15 15:23:36',
        current_approver: 'ตั้ม-Saharat',
        urgency: 'ตามขั้นตอนไอที',
        usage_date: '12/26/2021',
        type_accessory: 'Error /จำนวน : เมาส์/1',
        accessory: 'Adobe PS,Adobe AI',
        request_image: '',
        request_contact: 'ตั้ม-Saharat',
        remark: 'พี่เบญเบิก จอ Monitor ขนาด 27 นิ้ว ไปใช้งานที่บ้าน',
        duedate: '12/19/2021',
        it_comment: 'Input Text (500) ยิงกลับไปเป็น comment หรือเก็บ Recode',
        it_followup: 'คนไอที',
        pr_ep: 'Input Text (400) เก็บ Record'
    },
    {
        request_no: '823456',
        status: 'approved',
        submit_time: '12/9/2021 18:57:49',
        requesters_name: 'ไก่-Chanamon',
        department_sup: 'ปลา-Karin',
        approval_records: 'ไก่-Chanamon|Create Approval|2021-12-09 18:57:48;จิ-Jirapat|Forward|"ตั้มลบเสร็จแล้วฝากกดอนุมัติด้วยนะครับ" |2021-12-09 20:25:28;ยุ้ย-Chanamon|Comment|"รบกวนพี่ตั้ม ทำให้ด้วยนะคะ " |2021-12-15 15:23:36',
        current_approver: 'ไข่-Saharat',
        urgency: 'เร่งด่วน',
        usage_date: '10/11/2021',
        type_accessory: 'Error /จำนวน : เมาส์/1',
        accessory: 'Adobe PS,Adobe AI',
        request_image: '',
        request_contact: 'กีบ-Saharat',
        remark: 'เบญเบิก จอ Monitor ขนาด 27 นิ้ว ไปใช้งานที่บ้าน',
        duedate: '12/29/2021',
        it_comment: 'Input Text (500) ยิงกลับไปเป็น comment หรือเก็บ Recode',
        it_followup: 'คนไอที',
        pr_ep: 'Input Text (400) เก็บ Record'
    }
]

export const mockOptionStatus = [
    {
        value: 'under_review',
        label: 'Under review'
    },
    {
        value: 'approved',
        label: 'Approved'
    },
]

export const mockOptionUrgency = [
    {
        value: 'it_method',
        label: 'ตามขั้นตอนไอที'
    },
    {
        value: 'fast',
        label: 'เร่งด่วน'
    },
]