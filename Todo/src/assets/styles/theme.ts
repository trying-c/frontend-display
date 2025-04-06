import { type GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: " #2ecc71",
        primaryColorHover: " #27ae60",
        primaryColorPressed: " #1e8449",
        primaryColorSuppl: " #1e8449",
        successColor: " #2ecc71",
        infoColor: " #3498db",
        warningColor: " #f39c12",
        errorColor: " #e74c3c",
        borderColor: " #dcdfe6",
        fontFamily: "Arial, sans-serif"
    },
    Button: {
        borderRadius: "4px",
        height: "36px",
        padding: "0 16px",
        fontSize: "14px"
    },
    Card: {
        backgroundColor: " #ffffff",
        borderColor: " #dcdfe6",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
    },
    Input: {
        borderRadius: "4px",
        height: "36px",
        padding: "0 12px",
        fontSize: "14px"
    },
    Tag: {
        backgroundColor: " #27ae60",
        color: " #ffffff"
    }
}
