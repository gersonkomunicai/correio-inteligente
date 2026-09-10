// components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}
const COOKIE_NAME = 'cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 dias em segundos

function getCookie(name: string): string | null {
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return match ? match.split('=')[1] : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getCookie(COOKIE_NAME);
    if (!existing) {
      setVisible(true);
    }
  }, []);


  function gtag(...args: any[]) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
  function handleChoice(choice: 'granted' | 'denied') {
    setCookie(COOKIE_NAME, choice);
    setVisible(false);
    gtag('consent', 'update', {
      'analytics_storage': choice,
      'ad_storage': choice,
      'ad_user_data': choice,
      'ad_personalization': choice,
    });
  }

  if (!visible) return null;

  return (
    <div className='fixed bottom-0 items-center left-0 right-0 z-50 p-3 gap-3 bg-gray-100 text-correio-inteligente-200 flex '>
      <p>Usamos cookies para analytics e marketing. Você aceita?</p>
      <button className='p-2 bg-gray-100 text-correio-inteligente-200 border border-correio-inteligente-200 transition-all duration-150 ease-in hover:bg-correio-inteligente-200 hover:text-gray-100 cursor-pointer' onClick={() => handleChoice('denied')}>Só essenciais</button>
      <button className='p-2 bg-gray-100 text-correio-inteligente-200 border border-correio-inteligente-200 transition-all duration-150 ease-in hover:bg-correio-inteligente-200 hover:text-gray-100 cursor-pointer' onClick={() => handleChoice('granted')}>Aceitar todos</button>
    </div>
  );
}