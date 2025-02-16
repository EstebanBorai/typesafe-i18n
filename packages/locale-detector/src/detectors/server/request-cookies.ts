import type { Request } from 'express'
import type { Locale } from '../../../../runtime/src/core'
import type { LocaleDetector } from '../../detect'
import { parseValueFromCookie } from '../_cookie.util'

export const initRequestCookiesDetector =
	(req: Request, key = 'lang'): LocaleDetector =>
	(): Locale[] =>
		parseValueFromCookie(req?.cookies, key)
