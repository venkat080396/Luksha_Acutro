export const CONNECTORS = {
    HEADER: "Connectors",
    NEW_CONNECTOR: "New Connector",
    CREATE_CONNECTOR: "Create Connector",
    UPDATE_CONNECTOR: "Update Connector",
    EMAIL: "Email",
    EMAIL_LIST_DESCRIPTION: "Allows you to send emails to a list of recipients.",
    SMS: "SMS",
    SMS_LIST_DESCRIPTION: "Send SMS notifications to a list of mobile numbers.",
    CANCEL: "Cancel",
    NAME: "Name",
    FIELDS: {
        NAME: "Name",
        TYPE: "Type"
    },
    RECIPIENTS: "Recipients",
    SAVE: "Save",
    EMAIL_MESSAGE: "Enter a list of email recipients below.",
    SMS_MESSAGE: "Enter a list of mobile phone numbers below.",
    EMAIL_LIST_CREATED: "Email list has been created successfully",
    EMAIL_LIST_UPDATED: "Email list has been updated successfully",
    SMS_LIST_CREATED: "SMS list has been created successfully",
    SMS_LIST_UPDATED: "SMS list has been updated successfully",
    LIST_DELETED: "List has been deleted successfully",
    SELECT_CONNECTOR: "Select a Connector",
    OK: "OK"
}

export const ALERT_RULES = {
    HEADER: "Alert Rules",
    NEW_ALERT_RULE: "New Alert Rule",
    ENTER_NAME_FOR_ALERT_RULE: "Enter a name for your alert rule",
    UPDATE_ALERT_RULE: "Update Alert Rule",
    CREATE_ALERT_RULE: "Create Alert Rule",
    CUSTOMISE_YOUR_ALERT_RULES: "Customise your Alert rules",
    EDIT: "Edit",
    DELETE: "Delete",
    CANCEL: "Cancel",
    DELETE_SUCCESS_MESSAGE: "Alert rule has been deleted successfully",
    UPDATE_SUCCESS_MESSAGE: "Alert rule has been updated successfully",
    CREATE_SUCCESS_MESSAGE: "Alert rule has been created successfully",
    FIELDS: {
        NAME: "Name",
        NAME_PLACEHOLDER: "Enter Name",
        DESCRIPTION: "Description",
        DESCRIPTION_PLACEHOLDER: "Enter Description",
        TYPE: "Type",
        LAST_TRIGGERED: "Last Triggered"
    },
    OPERATORS: {
        GREATER_THAN_VALUE: ">",
        GREATER_THAN: "Greater Than",
        GREATER_THAN_OR_EQUAL_TO_VALUE: ">=",
        GREATER_THAN_OR_EQUAL_TO: "Greater Than or Equal to",
        LESS_THAN_VALUE: "<",
        LESS_THAN: "Less Than",
        LESS_THAN_EQUAL_TO_VALUE: "<=",
        LESS_THAN_EQUAL_TO: "Less than or Equal to",
        EQUAL_TO_VALUE: "=",
        EQUAL_TO: "Equal to",
    },
    CONFIGURE_ACTIONS: "Configure actions",
    CONFIGURE_ACTIONS_DESCRIPTION: "Select the actions you want to perform when the trigger is activated",
    ADD_ACTION: "Add Action",
    OVERRIDE_TEMPLATE: "Override template",
    MESSAGE: "Message",
    CONFIGURE_CONDITIONS: "Configure conditions",
    CONFIGURE_CONDITIONS_DESCRIPTION: "select the conditions that the event must meet for the alert rule to run",
    ASSET_TYPE: "Asset Type",
    DEVICE: "Device",
    SENSOR: "Sensor",
    OPERATOR: "Operator",
    VALUE: "Value",
    ALLOW_AI_ADJUSTMENT: "Allow AI adjustment",
}

export const ESCALATION_SETTINGS = {
    SITE: "Site",
    BUILDING: "Building",
    FLOOR: "Floor",
    DEVICES: "Devices",
    LEVEL1: "Level 1",
    LEVEL2: "Level 2",
    LEVEL3: "Level 3",
    SAVE: "Save"
}

export const INSTALLATION_ALERTS = {
    ALERTS_INSTALLED: "Alerts Installed",
    FIELDS: {
        BUILDING: "Building",
        FLOOR: "Floor",
        DEVICE_TYPE: "Device Type",
        DEVICE: "Device",
        SENSOR: "Sensor",
        DATE_CREATED: "Date Created",
        ALERT_LAST_TRIGGERED: "Alert last triggered",
        CURRENT_STATUS: "Current Status",
        TRIGGERS_HISTORY: "Triggers history (Last 6 months)"
    }
}

export const LEVEL_INFORMATION = {
    RECORD1: {
        TYPE: "Communication Method",
        LEVEL1: "Email",
        LEVEL2: "Email/SMS",
        LEVEL3: "Email/SMS"
    },
    RECORD2: {
        TYPE: "Alerting Frequency",
        LEVEL1: "Every 6 hours until resolved",
        LEVEL2: "Every 4 hours until resolved (can only SMS during hours of 0600-2200)",
        LEVEL3: "Every 2 hours until resolved (can only SMS during hours of 0600-2200)"
    },
    RECORD3: {
        TYPE: "Auto-Escalation Condition",
        LEVEL1: "No user responds to alert within 24 hours from initial level 1 alert\nOR\nA user manually escalates to the next level as they are not able to take action or investigate alert",
        LEVEL2: "No user responds to alert within 24 hours from initial level 2 alert\nOR\nA user manually escalates to the next level as they are not able to take action or investigate alert",
        LEVEL3: "If no-one responds within 24 hours, Acutro will close the alert and mark as Not Resolved"
    }
}