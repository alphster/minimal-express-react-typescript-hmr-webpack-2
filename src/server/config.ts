export const envCfg = ({
	BASE_PROTOCOL: process.env.BASE_PROTOCOL ?? 'http',
	BASE_DOMAIN: process.env.BASE_DOMAIN ?? 'localhost',
	BASE_PORT: process.env.BASE_PORT ?? '3000',
	BASE_URL: `${process.env.BASE_PROTOCOL}://${process.env.BASE_DOMAIN}:${process.env.BASE_PORT}` ?? 'http://localhost:3000',
	CLIENT_ID: process.env.CLIENT_ID,
	ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
	SECRET: process.env.SECRET
})