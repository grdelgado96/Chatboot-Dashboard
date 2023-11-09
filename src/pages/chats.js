import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Stack, Unstable_Grid2 as Grid } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ChatList } from "src/sections/chats/chatList";
import { Chat } from "src/sections/chats/chat";
import { useState } from "react";

let DUMMY_CHATS = [
  {
    date: "2023/11/01",
    time: "05:04",
    title: "Tienda de ropa online",
    messages: [
      { user: "bot", message: "Hola, en que puedo ayudarle" },
      { user: "user", message: "Hola. Todavía no he recibido mi pedido." },
      {
        user: "bot",
        message:
          "Puedo ayudarla a localizar su pedido. ¿Me puede proporcionar la ID del pedido, por favor?",
      },
      { user: "user", message: "12587456" },
      {
        user: "bot",
        message:
          "Gracias. Veo que su pedido ha sido entregado a nuestro socio logístico el [Fecha]. Debería llegar a su dirección dentro de las siguientes 48 horas.",
      },
      { user: "user", message: "Gracias." },
      {
        user: "bot",
        message:
          "¡De nada! Si puedo ayudarle con alguna otra cosa, solo tiene que dejar un mensaje.",
      },
    ],
  },
  {
    date: "2023/10/30",
    time: "10:04",
    title: "Tienda de regalos online",
    messages: [
      {
        user: "bot",
        message:
          "¡Hola! Bienvenida a Regalos ABC. Soy su asistente de tienda. Si hay algo con lo que pueda ayudarle, solo tiene que dejarme un mensaje.",
      },
      { user: "user", message: "Necesito ayuda para encontrar los regalos adecuados." },
      {
        user: "bot",
        message:
          "¡Estaré encantado de ayudar! ¿Está buscando un regalo para un amigo, familiar o compañero de trabajo?",
      },
      { user: "user", message: "Compañeros de trabajo." },
      { user: "bot", message: "De acuerdo. ¿Cuantos destinatarios habría?" },
      { user: "user", message: "Unos 25." },
      { user: "bot", message: "¿Son hombres, mujeres o ambos?" },
      { user: "user", message: "Ambos. Alrededor de 15 hombres y 10 mujeres." },
      {
        user: "bot",
        message: "De acuerdo. ¿Tiene una horquilla de precios preferida para esto regalos?",
      },
      { user: "user", message: "Me gustaría que cada uno costara menos de 30 $." },
      {
        user: "bot",
        message:
          "¡Estupendo! Ya tengo la información que necesito para hacer algunas recomendaciones. Ahora podrá ver 5 opciones de regalo en la ventana de chat. Por favor, elija la que más le guste y encontraré otras opciones relacionadas.",
      },
    ],
  },

  {
    date: "2023/10/01",
    time: "05:04",
    title: "Joyeria",
    messages: [
      {
        user: "bot",
        message:
          "Hola, y bienvenido a la Joyería ABC. Soy su asistente de tienda. ¿En qué puedo ayudarle?",
      },
      { user: "user", message: "No sé qué tamaño de anillo debería comprar." },
      {
        user: "bot",
        message:
          "Para descubrir su tamaño de anillo, coja una tira de papel y enróllela alrededor del dedo. Marque el punto donde ambos lados se encuentran. Ahora desenrolle el papel y mida la longitud entre ambas marcas. Esta será la ‘circunferencia’ del anillo. Utilice la siguiente tabla para encontrar el tamaño que coincida con la circunferencia medida (en mm).",
      },
      {
        user: "user",
        message:
          "Estoy comprando el anillo como regalo para mi novia. ¿Cómo descubro su tamaño de anillo?",
      },
      {
        user: "bot",
        message:
          "Si no puede medir el dedo, necesitará un anillo que le quede bien. Utilice una regla para medir el diámetro interno (la distancia más larga entre las caras internas) del anillo. Después utilice la siguiente tabla para encontrar el tamaño de anillo que coincida con el diámetro medido (en mm).",
      },
      { user: "user", message: "Ok, genial, ¡gracias!" },
    ],
  },
];
const Page = () => {
  const { t } = useTranslation();
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const handleChatItemClick = (index) => {
    setSelectedChatIndex(index);
  };

  return (
    <>
      <Head>
        <div>
          <p>{t("titles.chats")}</p>
        </div>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <ChatList chats={DUMMY_CHATS} onChatItemClick={handleChatItemClick}></ChatList>
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <Chat chats={DUMMY_CHATS} selectedChatIndex={selectedChatIndex}></Chat>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
