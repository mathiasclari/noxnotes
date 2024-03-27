import { contextBridge } from 'electron';

if (!process.contextIsolated){
  throw new Error('This script should be run in a contextIsolated renderer process');
}

try{
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (error){
  console.error('Failed to expose preload functions:', error);
}
