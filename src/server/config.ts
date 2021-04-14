import dotenv from 'dotenv'
dotenv.config()

const BASE_PROTOCOL = process.env.BASE_PROTOCOL ?? 'http'
const BASE_DOMAIN = process.env.BASE_DOMAIN ?? 'localhost'
const BASE_PORT = process.env.BASE_PORT ?? '3000'
const BASE_URL = `${BASE_PROTOCOL}://${BASE_DOMAIN}:${BASE_PORT}`

export const envCfg = ({
	BASE_PROTOCOL,
	BASE_DOMAIN,
	BASE_PORT,
	BASE_URL,
	CLIENT_ID: process.env.CLIENT_ID,
	ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
	SECRET: process.env.SECRET
})