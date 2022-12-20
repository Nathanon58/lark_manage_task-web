import { notification, Spin, Tooltip } from "antd";
import moment from "moment";
import { Icon } from "../resources";
import { useEffect, useState } from "preact/hooks";
import { ButtonTheme } from "../components/buttons";
import { ModalTheme, MODAL_NAME } from "../components/modal";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { GET, POST, GET_TASK, GET_OPTION_SEARCH } from "../services";
import { CaseListColumn } from "../constants/global/columnTableForm";
import { ManageCaseSearchForm } from "../constants/global/SearchForm";

const ManageCaseListScene = () => {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])
    const [defaultValue, setDefaultValue] = useState([])
    const [itemImageList, setItemImageList] = useState([])
    const [editCaseModal, setEditCaseModal] = useState(false)
    const [openImageModal, setOpenImageModal] = useState(false)
    const [defaultValueEdit, setDefaultValueEdit] = useState({})
    const [optionItFollowUp, setOptionItFollowUp] = useState([])

    useEffect(() => {
        Promise.all([
            onFetchOption(),
            onFetchCaseList()
        ])
    }, [])

    const onFetchCaseList = async (itemSearch) => {
        try {
            setLoading(true)
            let submitDate = [moment().subtract(20, "days"), moment()]
            let usageDate = [moment(), moment().add(5, 'days')]
            let obj = {}
            if (itemSearch) {
                for (const key in itemSearch) {
                    if (Object.hasOwnProperty.call(itemSearch, key)) {
                        const element = itemSearch[key];
                        switch (key) {
                            case 'submit_date':
                                obj.submit_sd = (element[0] && element[0].format("YYYY-MM-DD")) || ''
                                obj.submit_ed = (element[1] && element[1].format("YYYY-MM-DD")) || ''
                                break;
                            case 'usage_date':
                                obj.usage_startdate = (element[0] && element[0].format("YYYY-MM-DD")) || ''
                                obj.usage_enddate = (element[1] && element[1].format("YYYY-MM-DD")) || ''
                                break;
                            case 'duedate':
                                obj.duedate_start = (element[0] && element[0].format("YYYY-MM-DD")) || ''
                                obj.duedate_end = (element[1] && element[1].format("YYYY-MM-DD")) || ''
                                break;
                            default:
                                obj[key] = element
                        }
                    }
                }
            } else {
                obj = {
                    request_no: "",
                    status: "",
                    submit_sd: submitDate[0].format("YYYY-MM-DD"),
                    submit_ed: submitDate[1].format("YYYY-MM-DD"),
                    requesters_name: "",
                    department_sup: "",
                    urgency: "",
                    usage_startdate: usageDate[0].format("YYYY-MM-DD"),
                    usage_enddate: usageDate[1].format("YYYY-MM-DD"),
                    type_desired: "",
                    accessory_hw: "",
                    duedate_start: "",
                    duedate_end: "",
                    it_comment: "",
                    it_followup: "",
                    pr_ep: ""
                }
            }
            const res = await POST(GET_TASK, obj)
            let { result, success } = res
            if (success) {
                const dataCase = result && result.map((item, i) => {
                    return {
                        ...item,
                        key: i + 1,
                        type_accessory: item.type_desired + `${item.accessory_hw && '/'}` + item.accessory_hw + `${item.quantity && '/'}` + item.quantity,
                        request_image: < ButtonTheme
                            useFor='RE_CHECK'
                            title='Pic'
                            disabled={item.request_image.length === 0}
                            onClick={() => openImage(item.request_image)}
                        />,
                        accessory: `อุปกรณ์ที่ต้องการเบิก : ${item.accessory_sw}\nสิทธิการใช้งานระบบ : ${item.system_license}\nsystem import-Export : ${item.system_import_export}\nรายละเอียด : ${item.detail_requested}\n`,
                        request_filedetail: item.request_filedetail && item.request_filedetail.map((val, i) => {
                            return <Tooltip title={val}><a href={val} download>{`Download File(${i + 1})\n`}</a></Tooltip>
                        })
                    }
                })
                setDataSource(dataCase)
            }
        } catch (err) {
            const { message } = err
            console.log(message)
            notification['error']({
                message: `GET_TASK เกิดข้อผิดพลาด`,
                description:
                    `${message} `,
            });
        } finally {
            setLoading(false)
        }
    }

    const onFetchOption = async () => {
        try {
            const res = await GET(GET_OPTION_SEARCH)
            let { result, success } = res
            if (success) {
                let obj = {}
                let objDropdown = {}
                let optionAll = { value: "", label: "ทั้งหมด" }
                obj.optionStatus = [optionAll, ...result.option_station]
                obj.optionUrgency = [optionAll, ...result.option_urgency]
                obj.optionType = [optionAll, ...result.type_desired]
                obj.optionHw = [optionAll, ...result.accessory_hw]
                const optionIt = result.user_follow_it.map((val) => {
                    return {
                        value: val.UserId,
                        label: `${val.UserId}-${val.UserName}`
                    }
                })
                setOptionItFollowUp(optionIt)
                obj.optionIt = [{ value: "", label: "ทั้งหมด" }, ...optionIt]
                objDropdown.optionsFollowup = optionIt
                obj.submit_date = [moment().subtract(10, "days"), moment()]
                obj.usage_date = [moment(), moment().add(5, 'days')]
                setDefaultValue(prevState => ({ ...prevState, ...obj }))
                setDefaultValueEdit(prevState => ({ ...prevState, ...objDropdown }))
            }
        } catch (err) {
            const { message } = err
            console.log(message)
            notification['error']({
                message: `GET_OPTION_SEARCH เกิดข้อผิดพลาด`,
                description:
                    `${message} `,
            });
        }
    }

    const openImage = (data) => {
        setItemImageList(data)
        setOpenImageModal(true)
    }

    const openEdit = (data) => {
        setDefaultValueEdit(prevState => ({ ...prevState, ...data }))
        setEditCaseModal(true)
    }

    const onSearch = (e) => {
        onFetchCaseList(e)
    }

    const closeEditCase = () => {
        setEditCaseModal(false)
        setDefaultValueEdit({})
    }

    const closeModalImage = () => {
        setOpenImageModal(false)
        setItemImageList([])
    }

    return (
        <Spin tip="Loading..." spinning={false}>
            <PageLayout
                searchLayout={{
                    title: 'จัดการเคสงาน',
                    icon: <Icon.setting />,
                    formSearch: ManageCaseSearchForm({ defaultValue: defaultValue }),
                    onSearch,
                }}
                tableLayout={{
                    columns: CaseListColumn({ editAction: openEdit }),
                    dataSource: dataSource,
                    loading: loading,
                    defaultPageSize: 50
                }}
            />
            <ModalTheme
                useFor={MODAL_NAME.EDIT_MANAGECASE}
                title="แก้ไขข้อมูล"
                visible={editCaseModal}
                onClose={closeEditCase}
                data={{ defaultValue: defaultValueEdit, reApi: onFetchCaseList, optionIT: optionItFollowUp }}
            />
            <ModalTheme
                useFor={MODAL_NAME.OPEN_IMAGEFILE}
                title="แสดงรูปภาพ"
                visible={openImageModal}
                onClose={closeModalImage}
                data={{ defaultValue: itemImageList }}
            />
        </Spin>
    )
}
export default ManageCaseListScene;