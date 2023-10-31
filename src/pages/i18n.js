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
      },
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
      //Chatbot Section
      uploadDocHeader: "Documents in use:",
      uploadFileButton: "Upload File",
      typeLabel: "Type here...",
      typeContextLabel: "Type context here...",
      sendButton: "Send",
      loadText: 'Typing...',
      //Upload Documents Section
      dropzoneText: "Drag and drop files here",
      dropzoneButton: "Select Multiple Files",
      fileListHeader: "Uploaded files:",
      nameTableRow: "File Name",
      botsTableRow: "Bots",
      actionTableRow: "Actions",
    },
  },
  es: {
    translation: {
      titles: {
        botsList: "Lista de Bots",
        chatBot: "ChatBot",
        uploadDocuments: "Subir Documentos",
        account: "Cuenta",
      },
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
      //Chatbot Section
      uploadDocHeader: "Documentos en uso:",
      uploadFileButton: "Subir Archivo",
      typeLabel: "Escribe aquí...",
      typeContextLabel: "Esccribe el contexto aquí...",
      sendButton: "Enviar",
      loadText: 'Escribiendo...',
      //Upload Documents Section
      dropzoneText: "Arrastra y suelta archivos aquí",
      dropzoneButton: "Selecciona multiples archivos",
      fileListHeader: "Archivos subidos:",
      nameTableRow: "Nombre de Archivo ",
      botsTableRow: "Bots",
      actionTableRow: "Acciones",
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
