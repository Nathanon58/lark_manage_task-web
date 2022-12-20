import {
    SettingOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    UploadOutlined,
    DownloadOutlined,
    LoginOutlined,
    ClearOutlined,
    LockOutlined,
    TeamOutlined,
    PlusCircleOutlined,
    RollbackOutlined,
    SaveOutlined,
    FileSearchOutlined,
    ReloadOutlined,
    InfoCircleOutlined,
    UserAddOutlined,
    ShakeOutlined,
    FileAddOutlined,
    PrinterOutlined,
    CheckCircleOutlined,
    CopyrightOutlined,
    QrcodeOutlined,
    ExclamationCircleOutlined,
    InteractionOutlined
} from '@ant-design/icons';

export const Icon = {
    customerList: () => <TeamOutlined />,
    report: () => <FileSearchOutlined />,
    manageCredit: () => <CopyrightOutlined />,
    createQRCode: () => <QrcodeOutlined />,

    /**most for button */
    search: () => <SearchOutlined />,
    edit: () => <EditOutlined />,
    remove: () => <DeleteOutlined />,
    clear: () => <ClearOutlined />,
    upload: () => <UploadOutlined />,
    download: () => <DownloadOutlined />,
    login: () => <LoginOutlined />,
    forgetPassword: () => <LockOutlined />,
    create: () => <PlusCircleOutlined />,
    back: () => <RollbackOutlined />,
    save: () => <SaveOutlined />,
    confirm: () => <CheckCircleOutlined />,
    reAct: () => <ReloadOutlined />,
    recheck: () => <InfoCircleOutlined />,
    register: () => <UserAddOutlined />,
    manageAppReport: () => <ShakeOutlined />,
    manageUserReport: () => <TeamOutlined />,
    manageReport: () => <FileAddOutlined />,
    print: () => <PrinterOutlined />,
    warningAlert: () => <ExclamationCircleOutlined />,
    systemFlow: () => <InteractionOutlined />,
    setting: () => <SettingOutlined />

}

export const IconMenu = {
    customerList: <TeamOutlined />,
    report: <FileSearchOutlined />,
    manageCredit: <CopyrightOutlined />,
    uploadFilmPlan: <UploadOutlined />,
}
