import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";
//import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useTranslation } from "react-i18next";

export const SidebarItems = () => {
  const { t } = useTranslation();



 const items = [
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
    title: t('titles.chatBot'),
    path: "/chat_bot",
    icon: (
      <SvgIcon fontSize="small">
        <ChatRoundedIcon />
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