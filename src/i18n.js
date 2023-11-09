// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      titles: {
        botsList: "Bots List",
        chatBot: "ChatBot",
        uploadDocuments: "Upload Documents",
        account: "Account",
        chats: "Chats",
      },
      //Login Section
      emailValidation: "Must be a valid email",
      emailRequired: "Email is required",
      passwordRequired: "Password is required",
      loginTitle: "Login",
      dontHaveAccount: "Don't have an account? ",
      register: "Register",
      emailLoginLabel: "Email",
      passwordLoginLabel: "Password",
      continueButton: "Continue",
      Skipbutton: "Skip authentication",
      userInfo: "You can use john.doe@gmail.com and password 123456",
      //Register section
      registerTitle: "Register",
      haveAccount: "Already have an account? ",
      login: "Log in",
      nameLabel: "Name",
      nameRequired: "Name is required",
      //Account Section
      accountHeadTitle: "Account | Chatbot",
      account: "Account",
      uploadPictureButton: "Upload Picture",
      chatbotTitle: "ChatBot",
      profileTitle: "Profile",
      subheaderAccountProfile: "The information can be edited",
      firstNameLabel: "First name",
      lastNameLabel: "Last name",
      emailLabel: "Email Address",
      phoneNumberLabel: "Phone Number",
      countryLabel: "Country",
      stateLabel: "Select State",
      saveDetailsButton: "Save Details",
      //Bots List Section
      documentListHeader: "Documents List",
      removeButton: "Remove",
      returnButton: "Return",
      //Chatbot Section
      uploadDocHeader: "Documents in use:",
      uploadFileButton: "Upload File",
      typeLabel: "Type here...",
      typeContextLabel: "Type context here...",
      sendButton: "Send",
      loadText: "Typing...",
      //Upload Documents Section
      dropzoneText: "Drag and drop files here",
      dropzoneButton: "Select Multiple Files",
      fileListHeader: "Uploaded files:",
      nameTableRow: "File Name",
      botsTableRow: "Bots",
      actionTableRow: "Actions",
      //Top Nav Section:
      english: "English",
      spanish: "Spanish",
      //Account Popover Section
      accountTitle: "Account",
      signoutButton: "Sign out",
      //Analytics Section
      analytics: "Analytics",
      barChart: "Bar Chart",
      lineChart: "Line Chart",
      linePlot: "Line Plot",
      pieChart: "Pie Chart",
      //Chats Section
      date: "Date",
      time: "Time",
    },
  },
  es: {
    translation: {
      titles: {
        botsList: "Lista de Bots",
        chatBot: "ChatBot",
        uploadDocuments: "Subir Documentos",
        account: "Cuenta",
        chats: "Chats",
      },
      //Login Section
      emailValidation: "El correo electrónico debe ser válido",
      emailRequired: "El correo electrónico es requerido",
      passwordRequired: "La contraseña es requerida",
      loginTitle: "Acceder",
      dontHaveAccount: "¿No tiene una cuenta? ",
      register: "Registrarse",
      emailLoginLabel: "Correo electrónico",
      passwordLoginLabel: "Contraseña",
      continueButton: "Continuar",
      Skipbutton: "Saltar autenticación",
      userInfo: "Puede usar john.doe@gmail.com y contraseña 123456",
      //Register section
      registerTitle: "Registrarse",
      haveAccount: "¿Ya tiene una cuenta?",
      login: "Acceder",
      nameLabel: "Nombre",
      nameRequired: "El nombre es requerido",
      //Account Section
      accountHeadTitle: "Cuenta | Chatbot",
      account: "Cuenta",
      uploadPictureButton: "Subir Foto",
      chatbotTitle: "ChatBot",
      profileTitle: "Perfil",
      subheaderAccountProfile: "La información se puede editar",
      firstNameLabel: "Nombre",
      lastNameLabel: "Apellido",
      emailLabel: "Correo electrónico",
      phoneNumberLabel: "Número de Teléfono",
      countryLabel: "País",
      stateLabel: "Selecciona el Estado",
      saveDetailsButton: "Guardar Cambios",
      //Bots List Section
      documentListHeader: "Lista de Documentos",
      removeButton: "Eliminar",
      returnButton: "Regresar",
      //Chatbot Section
      uploadDocHeader: "Documentos en uso:",
      uploadFileButton: "Subir Archivo",
      typeLabel: "Escribe aquí...",
      typeContextLabel: "Esccribe el contexto aquí...",
      sendButton: "Enviar",
      loadText: "Escribiendo...",
      //Upload Documents Section
      dropzoneText: "Arrastra y suelta archivos aquí",
      dropzoneButton: "Selecciona multiples archivos",
      fileListHeader: "Archivos subidos:",
      nameTableRow: "Nombre de Archivo ",
      botsTableRow: "Bots",
      actionTableRow: "Acciones",
      //Top Nav Section:
      english: "Inglés",
      spanish: "Español",
      //Account Popover Section
      accountTitle: "Cuenta",
      signoutButton: "Desconectar",
      //Analytics Section
      analytics: "Analítica",
      barChart: "Gráfico de barras",
      lineChart: "Gráfico de lineas",
      linePlot: "Diagrama de lineas",
      pieChart: "Gráfico circular",
      //Chats Section
      date: "Fecha",
      time: "Hora",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
