import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';

//https://vitejs.dev/config/#conditional-config
// https://vitejs.dev/config/
export default defineConfig(({mode , command})=>{
  const env = loadEnv(mode, process.cwd(),"")
  return(
    {
      plugins: [react()],
      server:{
        port: Number(env.VITE_PORT),
      },
      define:{
        __PORT__:env.VITE_PORT,
      }
    }
  )
})
