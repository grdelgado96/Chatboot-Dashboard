import i18n from '../i18n';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'src/hooks/use-auth';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  

  useEffect(() => {
      // Configura el idioma según sea necesario
      const preferredLanguage = localStorage.getItem('language');
      if (preferredLanguage) {
        i18n.changeLanguage(preferredLanguage);
      }
    // Redirigir a la página de inicio de sesión al cargar la página
    if (auth.isAuthenticated) {
      // Si está autenticado, redirige a la página de chat
      router.push('/chat_bot');
    }else{
      router.push('/auth/login'); 
    }
    
  }, [auth.isAuthenticated, router]);
};

export default Page;
