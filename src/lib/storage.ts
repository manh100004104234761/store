export function storageFactory(storage?: Storage): Storage {
  let inMemoryStorage: { [key: string]: string } = {};
  const length = 0;

  function isSupported() {
    if (!window.navigator.cookieEnabled) {
      return false;
    }
    try {
      const testKey = 'test_storage_key';
      storage!.setItem(testKey, testKey);
      storage!.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  function clear(): void {
    if (isSupported()) {
      storage!.clear();
    } else {
      inMemoryStorage = {};
    }
  }

  function getItem(name: string): string | null {
    if (isSupported()) {
      return storage!.getItem(name);
    }
    if (inMemoryStorage.hasOwnProperty(name)) {
      return inMemoryStorage[name];
    }
    return null;
  }

  function key(index: number): string | null {
    if (isSupported()) {
      return storage!.key(index);
    } else {
      return Object.keys(inMemoryStorage)[index] || null;
    }
  }

  function removeItem(name: string): void {
    if (isSupported()) {
      storage!.removeItem(name);
    } else {
      delete inMemoryStorage[name];
    }
  }

  function setItem(name: string, value: string): void {
    if (isSupported()) {
      storage!.setItem(name, value);
    } else {
      inMemoryStorage[name] = String(value); // not everyone uses TypeScript
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    key,
    length,
  };
}

export const BOOK_TOKEN_KEY = 'book_token';
export const LOGGING_IN_FLAG = '1';

export const localStore = storageFactory(window.navigator.cookieEnabled ? localStorage : undefined);
// Session storage will be removed if user close browser tab
export const sessionStore = storageFactory(window.navigator.cookieEnabled ? sessionStorage : undefined);
