import UserIcon from "@heroicons/react/24/solid/UserIcon";
import { SvgIcon } from "@mui/material";
//import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useTranslation } from "react-i18next";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ForumIcon from '@mui/icons-material/Forum';

export const SidebarItems = () => {
  const { t } = useTranslation();



 const items = [
  {
    title: t('titles.chatBot'),
    path: "/chat_bot",
    icon: (
      <SvgIcon fontSize="small">
        <ChatRoundedIcon />
      </SvgIcon>
    ),
  },
  {
    title: t('titles.botsList'),
    path: "/bots_list",
    icon: (
      <SvgIcon fontSize="small">
        <SmartToyRoundedIcon />
      </SvgIcon>
    ),
  },
  
  {
    title: t('titles.uploadDocuments'),
    path: "/upload_docs",
    icon: (
      <SvgIcon fontSize="small">
        <UploadFileIcon />
      </SvgIcon>
    ),
  },
  {
    title:  t('analytics'),
    path: '/analytics',
    icon: (
      <SvgIcon fontSize="small">
        <AnalyticsIcon />
      </SvgIcon>
    )
  },
  {
    title:  'Chats',
    path: '/chats',
    icon: (
      <SvgIcon fontSize="small">
        <ForumIcon />
      </SvgIcon>
    )
  },
  {
    title:  t('titles.account'),
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  
];
return items;
};