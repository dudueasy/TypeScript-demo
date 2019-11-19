declare global {
  interface Window{
    server: {
      host: string
    }
  }
}

export default global
