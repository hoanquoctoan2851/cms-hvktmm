export declare enum StatusLetter {
    PENDING = "pending",
    CONFIRM = "confirm",
    RECONFIRM = "re_confirm",
    SUCCESS = "success",
    APPROVED = "approved",
    REJECT = "reject"
}
export interface FormService {
    resetForm: () => void;
    submit: () => void;
    validate: () => Promise<any>;
}
export declare enum TypeLetter {
    BankLoanLetter = "BankLoanLetter",
    CancelCourseLetter = "CancelCourseLetter",
    ChangeCourseLetter = "ChangeCourseLetter",
    ConfirmStudyingLetter = "ConfirmStudyingLetter",
    ContinueStudyingLetter = "ContinueStudyingLetter",
    EnjoyPolicyLetter = "EnjoyPolicyLetter",
    LeaveAbsenceLessLetter = "LeaveAbsenceLessLetter",
    LeaveAbsenceMoreLetter = "LeaveAbsenceMoreLetter",
    LeavingSchool = "LeavingSchool",
    PaymentCollectiveLetter = "PaymentCollectiveLetter",
    PaymentPersonalLetter = "PaymentPersonalLetter",
    RenewCardLetter = "RenewCardLetter",
    ReservationAcademicLetter = "ReservationAcademicLetter",
    ResolveWorkLetter = "ResolveWorkLetter"
}
export interface LetterTable {
    nameLetter: string;
    createdAt: string;
    approver: string;
    status: StatusLetter;
}
