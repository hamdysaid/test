export const environment = {
    production: false,
    // API_URL: "https://imanshahin-001-site1.gtempurl.com/api/",
    // API_URL_HUB: "https://imanshahin-001-site1.gtempurl.com/",
    API_URL : "https://localhost:7131/api/",
    API_URL_HUB : "https://localhost:7131/",
    imageEndPoint: {
        normal: "https://imanshahin-001-site1.gtempurl.com/images/",
        med: "https://localhost:7131/images/Thumbs/med/",
        small: "https://localhost:7131/images/Thumbs/small/",
    },
    endPoint: {
        notification: {
            readNotification: "Notification/ReadNotification/",
            user: "Notification/User",
            hub: "NotificationHub"
        },
        forgetPassword: {
            sendEmail: "User/ForgetPassword/SendEmail/",
            sendOTP: "User/ForgetPassword/SendCode/",
            sendPassowrd: "User/ForgetPassword/SendPassword/"
        },
        detail: {
            dataForUserRegister: "Detail/DataForUserRegister",
            chartsForUserNumbers: "Detail/ChartsForUserNumbers",
            chartVolunteerRequest: "Detail/ChartVolunteerRequest",
            chartEmployee: "Detail/EmployeeChart",
        },
        reportEndPoint: {
            agenda: "Report/Agenda",
            activity: "Report/Activity",
            event: "Report/Event",
            employee: "Report/Employee",
            invittion: "Report/Invittion",
            volunteer: "Report/Volunteer",
            guest: "Report/Guest",
            agendaExport: "Report/Export/Agenda",
            employeeExport: "Report/Export/Employee",
            invittionExport: "Report/Export/Invitation",
            volunteerExport: "Report/Export/Volunteer",
            eventExport: "Report/Export/Event",
            activityExport: "Report/Export/Activity",
            guestExport: "Report/Export/Guest",
        },
        agendaEndPoint: {
            base: "Agenda",
            filter: "Agenda/Filter",
            addUser: "Agenda/AddUser/",
            removeUser: "Agenda/RemoveUser/",
            currentUser: "Agenda/CurrentUser",
            byUserEmail: "Agenda/User/",
            all: "Agenda/All",
            exportToExcel: "Agenda/ExportToExcel"
        },
        agendaStatusEndPoint: {
            base: "AgendaStatus",
            all: "AgendaStatus/All",
            exportToExcel: "AgendaStatus/ExportToExcel"
        },
        certificateEndPoint: {
            sendEmail: "Certificate/SendEmail/",
            base: "Certificate",
            all: "Certificate/All",
            exportToExcel: "Certificate/ExportToExcel",
            getCertificateByInvitaionId: "Certificate/GetCertificateByInvitaionId/"
        },
        certificateStatusEndPoint: {
            base: "CertificateStatus",
            all: "CertificateStatus/All",
            exportToExcel: "CertificateStatus/ExportToExcel",
        },
        chairEndPoint: {
            base: "Chair",
            all: "Chair/All",
            swithChairType: "Chair/SwithChairType/",
            changelocation: "Chair/ChangeLocaion",
            exportToExcel: "Chair/ExportToExcel",
            createAllChairs: "Chair/CreateAllChairs"
        },
        chairStatusEndPoint: {
            base: "ChairStatus",
            all: "ChairStatus/All",
            exportToExcel: "ChairStatus/ExportToExcel"
        },
        dayOfWeek: "DayOfWeek",
        degreeEndPoint: {
            base: "Degree",
            all: "Degree/All",
            exportToExcel: "Degree/ExportToExcel"
        },
        departmentEndPoint: {
            base: "Department",
            all: "Department/All",
            exportToExcel: "Department/ExportToExcel"
        },
        eventEndPoint: {
            base: "Event",
            all: "Event/All",
            exportToExcel: "Event/ExportToExcel",
            eventEmployee: "Event/Employee"
        },
        eventScheduleEndPoint: {
            base: "EventSchedule",
            all: "EventSchedule/All",
            exportToExcel: "EventSchedule/ExportToExcel",
            event: "EventSchedule/Event/"
        },
        eventSpeakersEndPoint: {
            base: "EventSpeakers",
            all: "EventSpeakers/All",
            exportToExcel: "EventSpeakers/ExportToExcel",
            event: "EventSpeakers/Event/"
        },
        eventSponsorEndPoint: {
            base: "EventSponsor",
            all: "EventSponsor/All",
            exportToExcel: "EventSponsor/ExportToExcel",
            event: "EventSponsor/Event/"
        },
        EmployeeStatusEndPoint: {
            base: "EmployeeStatus",
            all: "EmployeeStatus/All",
            exportToExcel: "EmployeeStatus/ExportToExcel"
        },
        eventStatusEndPoint: {
            base: "EventStatus",
            all: "EventStatus/All",
            exportToExcel: "EventStatus/ExportToExcel"
        },
        genderEndPoint: {
            base: "Gender",
            all: "Gender/All",
            exportToExcel: "Gender/ExportToExcel"
        },
        guestStatusEndPoint: {
            base: "GuestStatus",
            all: "GuestStatus/All",
            exportToExcel: "GuestStatus/ExportToExcel"
        },
        hallEndPoint: {
            base: "Hall",
            all: "Hall/All",
            exportToExcel: "Hall/ExportToExcel",
            hallEvent: "Hall/Event/",
            chairHub: "ChairHub"
        },
        invitationEndPoint: {
            base: "Invitation",
            all: "Invitation/All",
            filter: "Invitation/Filter",
            exportToExcel: "Invitation/ExportToExcel",
            invitationVolunteer: "Invitation/Volunteer/",
            invitationEmployee: "Invitation/Employee/"
        },
        invitationStatusEndPoint: {
            base: "InvitationStatus",
            all: "InvitationStatus/All",
            exportToExcel: "InvitationStatus/ExportToExcel"
        },
        placeEndPoint: {
            base: "Place",
            all: "Place/All",
            exportToExcel: "Place/ExportToExcel"
        },
        principalityEndPoint: {
            base: "Principality",
            all: "Principality/All",
            exportToExcel: "Principality/ExportToExcel"
        },
        proofCertificateEndPoint: {
            base: "ProofCertificate",
            all: "ProofCertificate/All",
            exportToExcel: "ProofCertificate/ExportToExcel",
            proofCertificateVolunteer: "ProofCertificate/Volunteer/"
        },
        volunteerStatusEndPoint: {
            base: "VolunteerStatus",
            all: "VolunteerStatus/All",
            exportToExcel: "VolunteerStatus/ExportToExcel"
        },
        vacationTypeEndPoint: {
            base: "VacationType",
            all: "VacationType/All",
            exportToExcel: "VacationType/ExportToExcel"
        },
        vacationEndPoint: {
            base: "Vacation",
            all: "Vacation/All",
            exportToExcel: "Vacation/ExportToExcel",
            vacationEmployee: "Vacation/Employee/",
            acceptOrRejectVacation: "Vacation/AcceptOrRejectVacation",
        },
        staticPageEndPoint: {
            base: "StaticPage",
            all: "StaticPage/All",
            exportToExcel: "StaticPage/ExportToExcel"
        },
        userEndPoints: {
            base: "User",
            login: "User/Login",
            volunteerRegister: "User/Volunteer/Register",
            employee: "User/Employee",
            employeeRegister: "User/Employee/Register",
            superAdminRegister: "User/SuperAdmin/Register",
            userRole: "User/Role",
            userClaim: "User/Claim",
            userClaimReview: "User/Claim/Review",
            userClassDateTime: "User/ClassDateTime",
            volunteerUpdateStatus: "User/Volunteer/UpdateStatus",
            volunteerFilter: "User/Volunteer/Filter",
            volunteerUpdateProfile: "User/Volunteer/UpdateProfile",
            employeeUpdateProfile: "User/Employee/UpdateProfile",
            volunteerDates: "User/Volunteer/Dates/",
            changePassword: "User/ChangePassword",
            available: "User/Volunteer/Available/",
            activate: "User/Volunteer/Activate/",
            employeeSearch: "User/Employee/Search",
            guestSearch: "User/Guest/Search",
            volunteerDetails: "User/Volunteer/",
            employeeDetails: "User/Employee/",
            guestRegister: "User/Guest/Register"
        },
    }
}