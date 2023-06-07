//諦め

import React, { useState, useEffect } from "react";
// import { text } from "stream/consumers";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
};

useEffect(() => {
  const timer = setInterval(() => {
    setTimestamp(new Date());
  }, UPDATE_CYCLE);

  return () => {
    clearInterval(timer);
  };
}, []);

useEffect(() => {
  const savedLocale = localStorage.getItem(KEY_LOCALE);
  if (savedLocale !== null) {
    setLocale(getLocaleFromString(savedLocale));
  }
}, []);
